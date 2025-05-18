import { Box, Container } from '@mui/material'

export const AppBox = () => {
  return (
    <Container>
      <h1>App</h1>
      <Box component="section" sx={{ p: 2, m: 1, border: 2}}>
        Pero que bueno y práctico es MUI
      </Box>
      <Box component="section" sx={{ p: 2, m:1,  border: '1px dashed grey' }}>
        This Box renders as an HTML section element.
      </Box>
    </Container>




    // <Container>
    //   <h1>App</h1>
    //   <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    //     This Box renders as an HTML section element.
    //   </Box>
    // </Container>
  )
}