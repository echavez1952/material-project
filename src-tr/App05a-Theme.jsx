import { Button, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({

palette: {
    mode: 'light',
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

export const AppTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{border: 3, boxShadow: 3, pb: 2 }}>
      <h1>App</h1>
        <Typography 
          variant="h3"
          // color="primary"
          color="secondary"
        >
            H3 Titulo 
        </Typography>
        <Button variant="contained">Mi primer botón</Button>
      </Container>
    </ThemeProvider>
  );
}

