import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core";

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

export const Columnas = (props) => {
  const classes = estilos();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(Columnas);