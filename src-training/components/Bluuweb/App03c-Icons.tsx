import React from 'react'

import { Android, Delete, DeleteForever, Room } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, Grid, Icon, IconButton } from '@mui/material';
import {  Forward, Star } from "@mui/icons-material";
import { Google } from "@mui/icons-material";

export const AppIcon = () => {
  return (
  
    <div>
      
      <Delete color='primary' />
      <DeleteForever />
      <Android />
      <EmailIcon color='secondary' /> 
      <Forward />
      <Star />
      <Room color="primary" />
      <CancelIcon color="secondary" />
      
      <Button
        variant="contained"
        color="inherit"
        startIcon={<Delete />}
      >
        Delete
      </Button>

      {/* El siguiente icono hace un efecto al hacer click */}
      <IconButton>
          <Delete color="primary" />
      </IconButton>
     

     <Grid size={{xs: 12,sm: 6}}>
            <Button variant="contained" fullWidth startIcon={<Google />}>
              Google
            </Button>
      </Grid>

        <Button
        variant="contained"
        color="secondary"
        startIcon={<Google />}
      >
        Google
      </Button>

      <Google color="primary" />
    </div>

  )
  
  
}

