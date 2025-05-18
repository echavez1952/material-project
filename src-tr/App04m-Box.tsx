import { Box, Container } from '@mui/material'

export const AppBox = () => {
  return (
    <Container>
      <h1>App</h1>
      <Box 
        sx={{ 
          border: 2, 
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          }}
        component="span"
      >
        Pero que hermoso es MUI
      </Box> 
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        This Box renders as an HTML section element.
      </Box>
    </Container>
  )
}
