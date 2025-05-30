import { Button, Container, Grid } from '@mui/material';
import Box  from '@mui/material/Box';
export const AppBox = () => {
  return (
 
    <Container>
      <Box sx={{ 
        bgcolor: '#cfe8fc', 
        height: 'calc(100vh - 20px)' 
        }} > 

      </Box>
      <Button variant="contained">Mi Boton</Button> 
    </Container>
    )
}
