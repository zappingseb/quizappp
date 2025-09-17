# Interactive Quiz WebApp

A mobile-optimized quiz application built with React and Material UI that generates a questionairre around
a personal gift for my wife's birthday. Including some picture questions asking about paintings
from my kids.

## Features

- 📱 **Mobile-optimized** responsive design
- 🎯 **10-question quiz** with configurable content
- 📊 **Progress indicator** with step-by-step visualization
- 🖼️ **Image support** for questions (configurable)
- ✨ **Material UI** modern design
- 🐳 **Docker containerized** for easy deployment
- 📝 **Markdown support** in questions for rich formatting
- 🖥️ **Automatic Deployment** into Github Pages

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
- npm

**Step 2: Run the development server**
```bash
npm run dev
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
2. Reference them in questions.json: `"image": "images/your-image.jpg"`
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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Keep components under 250 lines
4. Test on mobile devices
5. Submit a pull request

## License

MIT License - feel free to use this project for your own quizzes!