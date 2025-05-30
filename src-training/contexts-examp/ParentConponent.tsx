import { Box, Grid, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface ParentComponentProps {
  children: ReactNode,
  description: string
}

// Parent Component
// Ejemplo
// export const AuthLayout: React.FC<ParentComponentProps> = ({

export const ParentComponent: React.FC<ParentComponentProps> = ({
  children,
  description = "",
}) => {
  
  return (
    <Grid
        sx={{
          width: {sm: 450},
          background: "#eee",
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          border: "1px red solid"
        }}
      >
      
        <Typography variant="h3" color="primary">{description}</Typography>
        {children}
      
    </Grid>
  );
};
