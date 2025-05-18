import { Box, Container } from '@mui/material'

export const AppBox = () => {
  return (
    <Container>
      <h1>App</h1>
      <Box 
        sx={{ 
          border: 2, 
          p: 4,
          mt: 4,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          }}
        // component="span"
      >
        Pero que bueno y práctico es MUI
      </Box>  
    </Container>
  )
}