import { AppBar, Box, Button, Typography, Toolbar } from '@mui/material'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Header
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    </Box>
  )
}

