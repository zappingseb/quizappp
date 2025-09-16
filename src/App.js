import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Quiz from './components/Quiz';
import questionsData from './data/questions.json';
import { color } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF475D', // Your custom pink color
      light: '#FFECDB',
      dark: '#E8707D',
      contrastText: '#FFFFFF'    },
    secondary: {
      main: '#2D3748', // Purple accent
      light: '#A29BFE',
      dark: '#5A4FCF',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#2E7D32',
    },
    error: {
      main: '#F44336',
      light: '#EF5350',
      dark: '#C62828',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    background: {
      default: 'transparent', // Let background image show through
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3748',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#2D3748',
    },
    h5: {
      fontWeight: 500,
      color: '#2D3748',
    },
    h6: {
      fontWeight: 600,
      color: '#2D3748',
    },
    span: {
      color: '2D3748'
    }
  },
  shape: {
    borderRadius: 10, // Global border radius
  },
  shadows: [
    'none',
    '5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)', // Custom shadow
    '5px 9px 8.1px 0 rgba(0, 0, 0, 0.1)',
    '5px 11px 12px 0 rgba(0, 0, 0, 0.15)',
    // ... rest of default shadows
    ...createTheme().shadows.slice(4),
  ],
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '16px',
          paddingBottom: '16px',
          backgroundColor: 'transparent',
        },
      },
    },
    // Make Paper components use your custom styling
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          boxShadow: '5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)',
        },
      },
    },
    // Customize buttons globally
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '5px 9px 8.1px 0 rgba(0, 0, 0, 0.05)',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  const [phrases, setPhrases] = useState([]);

  const addPhrase = (phrase) => {
    setPhrases(prev => [...prev, phrase]);
  };

  const resetQuiz = () => {
    setPhrases([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container 
        maxWidth="sm" 
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 1, sm: 2 }
        }}
      >
        <Quiz 
          questionsData={questionsData}
          phrases={phrases}
          onPhraseAdd={addPhrase}
          onReset={resetQuiz}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;