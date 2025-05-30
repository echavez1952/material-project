import React from 'react'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
})

export const AppTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 100,
          height: 100,
          p: 2,
          textAlign: "center",
          color: "white",
          borderRadius: 2,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        >
          BOX
      </Box>
    </ThemeProvider>
  );
}
