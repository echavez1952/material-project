import { Drawer, Box, Toolbar, Typography } from '@mui/material';

const drawerWidth = 300;

export const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          // borderRadius: '20px 0 20px 0',
          borderRadius: '10px',
          boxSizing: 'border-box',
          padding: 2,
          border: 2,
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6">Sidebar</Typography>
        {/* Aquí puedes agregar opciones del menú */}
      </Box>
    </Drawer>
  );
};
