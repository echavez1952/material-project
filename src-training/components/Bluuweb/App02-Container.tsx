import { Button, Container } from "@mui/material"

export const AppContainer = () => {
  return (
    <Container sx={{border: 3, boxshadow: 3, pb: 2}}>
      <h1>App</h1>
        <Button variant="contained">Mi primer botón</Button>
    </Container>
  )
}
