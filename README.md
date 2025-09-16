# Interactive Quiz WebApp

A mobile-optimized quiz application built with React and Material UI that generates a personality trait collection (tag cloud) based on user responses.

## Features

- 📱 **Mobile-optimized** responsive design
- 🎯 **10-question quiz** with configurable content
- 📊 **Progress indicator** with step-by-step visualization
- 🖼️ **Image support** for questions (configurable)
- 🏷️ **Tag cloud results** showing collected personality traits
- ✨ **Material UI** modern design
- 🐳 **Docker containerized** for easy deployment
- 📝 **Markdown support** in questions for rich formatting

## Quick Start with Docker

### Prerequisites
- Docker installed on your system

### Build and Run

1. **Build the Docker image:**
   ```bash
   docker build -t quiz-webapp .
   ```

2. **Run the container:**
   ```bash
   docker run -p 8080:80 quiz-webapp
   ```

3. **Access the app:**
   Open your browser and navigate to `http://localhost:8080`

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Fix for ESLint "react-app" Config Error

The proper way to fix ESLint issues is to install all required dependencies:

**Step 1: Install all ESLint dependencies**
```bash
npm install --save-dev \
  eslint \
  eslint-config-react-app \
  @babel/eslint-parser \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-testing-library
```

**Step 2: Run the development server**
```bash
npm run dev
```

**Benefits of proper ESLint setup:**
- ✅ **Code quality** - Catches bugs and issues early
- ✅ **Consistent style** - Maintains code formatting standards  
- ✅ **React best practices** - Enforces React hooks rules and patterns
- ✅ **Accessibility** - jsx-a11y plugin ensures accessible components
- ✅ **Import organization** - Keeps imports clean and organized

**Available linting commands:**
```bash
# Check for linting errors
npm run lint

# Fix auto-fixable linting errors
npm run lint:fix
```

**Only disable ESLint as last resort:**
If you absolutely need to disable ESLint temporarily:
```bash
# Windows
set DISABLE_ESLINT_PLUGIN=true && npm start

# macOS/Linux  
DISABLE_ESLINT_PLUGIN=true npm start
```

### Fix for "react-scripts not recognized" Error

If you get the error `'react-scripts' is not recognized`, follow these steps:

1. **Delete existing node_modules and package-lock.json:**
   ```bash
   # Windows
   rmdir /s node_modules
   del package-lock.json
   
   # macOS/Linux
   rm -rf node_modules package-lock.json
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

3. **Reinstall dependencies:**
   ```bash
   npm install
   ```

### Local Development (without Docker)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   *Or alternatively:*
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

4. **Development features:**
   - Hot reload for instant changes
   - Error overlay for debugging  
   - Source maps for easier debugging
   - Fast refresh for React components

### Troubleshooting

**If you still get "react-scripts not recognized":**

1. **Check if react-scripts is installed:**
   ```bash
   npm list react-scripts
   ```

2. **Install react-scripts globally (temporary fix):**
   ```bash
   npm install -g react-scripts
   ```

3. **Use npx instead:**
   ```bash
   npx react-scripts start
   ```

4. **Alternative: Use Vite for faster development:**
   ```bash
   # Install Vite (optional alternative)
   npm install -D vite @vitejs/plugin-react
   ```

### Alternative Development Commands

```bash
# Standard React development server
npm start

# Development server (same as above)
npm run dev

# Run with npx (if react-scripts issues)
npx react-scripts start

# Run tests in watch mode
npm test

# Build for production (for testing)
npm run build

# Serve production build locally
npx serve -s build
```

## Configuration

### Questions Configuration

Edit `src/data/questions.json` to customize your quiz:

```json
{
  "title": "Your Quiz Title",
  "description": "Quiz description",
  "questions": [
    {
      "id": 1,
      "question": "Your question with **markdown** support",
      "type": "multiple-choice",
      "image": "/images/optional-image.jpg",
      "options": [
        { 
          "text": "Option 1", 
          "phrase": "trait-keyword" 
        }
      ]
    }
  ]
}
```

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in questions.json: `"image": "/images/your-image.jpg"`
3. Supported formats: JPG, PNG, WebP

### Question Types

Currently supports:
- `multiple-choice`: Single selection questions with phrase generation

### Markdown Support

Questions support basic markdown:
- **Bold text**: `**text**`
- *Italic text*: `*text*`
- Other markdown elements can be added by extending the Markdown component

## Architecture

### Component Structure

```
src/
├── components/
│   ├── Quiz.js              # Main quiz orchestrator
│   ├── ProgressIndicator.js # Step progress visualization
│   ├── QuestionCard.js      # Individual question display
│   └── ResultsView.js       # Tag cloud results
├── data/
│   └── questions.json       # Quiz configuration
└── App.js                   # Root component
```

### Key Design Principles

- **Mobile-first**: Responsive design optimized for mobile devices
- **Component isolation**: Each component under 250 lines
- **Configuration-driven**: Easy to modify quiz content via JSON
- **Material UI**: Consistent, modern design system
- **Progressive enhancement**: Works on all modern browsers

## Docker Deployment

### Production Deployment

1. **Build production image:**
   ```bash
   docker build -t quiz-webapp:production .
   ```

2. **Deploy with environment variables:**
   ```bash
   docker run -d \
     --name quiz-app \
     -p 80:80 \
     --restart unless-stopped \
     quiz-webapp:production
   ```

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  quiz-webapp:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Run: `docker-compose up -d`

## Customization

### Themes

Modify the Material UI theme in `src/App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#your-color' },
    secondary: { main: '#your-secondary-color' },
  },
});
```

### Adding New Question Types

1. Extend the question schema in `questions.json`
2. Add handling logic in `QuestionCard.js`
3. Update result processing in `Quiz.js`

### Phrase Collection Logic

Results are processed in `ResultsView.js`:
- Duplicate phrases are counted and highlighted
- Most frequent traits appear larger
- Share functionality included

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive Web App capabilities

## Performance

- Optimized bundle size
- Lazy loading ready
- Nginx caching for static assets
- Responsive images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Keep components under 250 lines
4. Test on mobile devices
5. Submit a pull request

## License

MIT License - feel free to use this project for your own quizzes!

# Public Directory Structure

Your `public/` directory should contain these files:

```
public/
├── index.html              ✅ (already created)
├── manifest.json          ✅ (already created)
├── favicon.ico            ❌ (you need this)
├── logo192.png            ❌ (you need this)
├── logo512.png            ❌ (you need this)
├── robots.txt             ❌ (recommended)
├── bg.png                 ✅ (your background image)
└── images/                ❌ (you need this directory)
    ├── drawing1.jpg       ❌ (question 1 image)
    ├── drawing2.jpg       ❌ (question 2 image)
    └── drawing3.jpg       ❌ (question 9 image)
```

## Files You Need to Add:

### 1. Create `public/robots.txt`:
```
User-agent: *
Allow: /
```

### 2. Add favicon files:
- `favicon.ico` (16x16, 32x32 icon)
- `logo192.png` (192x192 PNG)
- `logo512.png` (512x512 PNG)

### 3. Create `public/images/` directory with:
- `drawing1.jpg` - Airplane drawing
- `drawing2.jpg` - Suitcase drawing  
- `drawing3.jpg` - Bridges drawing

### 4. Verify existing files:
- ✅ `bg.png` (your Belgrade background)
- ✅ `index.html` (already configured)
- ✅ `manifest.json` (already configured)

## Quick Icon Generation:
You can use tools like:
- https://favicon.io/favicon-generator/
- https://realfavicongenerator.net/
- Or create simple icons with any image editor

## Image Recommendations:
- **Favicon**: Simple, recognizable at small sizes
- **Logo PNG**: High quality, transparent background
- **Quiz images**: Optimized for web (JPG format, reasonable file size)
- **Background**: Already have `bg.png` ✅