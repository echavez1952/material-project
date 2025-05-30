import { Button, Grid, Link, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../component/AuthLayout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/AuthServices";
import { useAuth } from "../hooks/useAuth";


interface LoginFormData {
  email: string;
  password: string;
};

// Children Component
// export const AppChildren = () => {

export const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data:", data);
    // Login data:
    // {email: 'edwinchavez1952@gmail.com', password: 'Echavez5210'}
    
    
    // ejecutar mi función de loginUser
    // verificar si el usuario existe y las credenciales son correctas
    // si no existe tengo que mostrar un error
    
    try {
      const user = await loginUser(data.email, data.password);
      if (user) {
        console.log('Usuario logueado:', user);
      // Usuario logueado: 
      // {firstName: 'edwin', uid: 'jJdwQ2RNL7ODc3JffhPIuoXONI52', email: 'edwinchavez1952@gmail.com', lastName: 'chavez'}
        
        navigate('/');
      } else {
        console.log('No se encontró el usuario en Firestore');
      }
    } catch (error) {
      console.error(error);
    }
    
  };

  
  return (
    // Execute ParentComponent

    <AuthLayout description="Login Page">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="email@mail.com"
            fullWidth
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo no válido"
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid sx={{ margin: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="********"
            fullWidth
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid size={{xs:12 ,sm:6}}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid size={{xs:12 ,sm:6}}>
            <Button variant="contained" fullWidth startIcon={<Google />}>
              Google
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              No tienes cuenta? Registrarse
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};