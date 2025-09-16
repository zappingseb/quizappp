import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box 
        sx={{ 
          display: 'flex',
          gap: 0.5,
          alignItems: 'center'
        }}
      >
        {Array.from({ length: totalSteps }, (_, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: 24, sm: 32 },
              height: { xs: 6, sm: 8 },
              borderRadius: 1,
              backgroundColor: index < currentStep 
                ? theme.palette.primary.main 
                : theme.palette.grey[300],
              transition: 'background-color 0.3s ease-in-out'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProgressIndicator;