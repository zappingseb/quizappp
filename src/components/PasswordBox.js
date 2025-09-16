import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Lock } from '@mui/icons-material';

const PasswordBox = ({ onCorrect, pwd }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === pwd) {
      setError(false);
      onCorrect();
    } else {
      setError(true);
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 3,
        minHeight: { xs: 'auto', sm: '400px' } , mt: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Lock />
          <span>Enter Password</span>
        </Box>

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={input}
          error={error}
          helperText={error ? 'Incorrect password' : ''}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default PasswordBox;
