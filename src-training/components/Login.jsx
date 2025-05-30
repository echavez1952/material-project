import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth';

export const Login = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setError,
    clearErrors
  } = useForm();

  const { login } = useAuth();

  const onHandleSubmit = () => {
    
    console.log(getValues("username"), getValues("password")) 
    
    // ejecutar mi funcion de login
   const success = login(getValues("username"), getValues("password"));
    // verificar si el usuario existe y las credenciales son correctas 
  
    if (!success) {
      // tengo que mostrar un error
      setError("general", {
        type: "manual",
        message: "Usuario o contraseña incorrectos",
      });
      return;
    }

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>Log In</h2>

      <div>
        <input
          type="text"
          placeholder="username"
          name="username"
          {...register("username", {
              required: "username es requerido",
              onChange: () => clearErrors('general'),
          })}
        />
        {errors.username && (
          <p className="text-red-700">{errors.username.message}</p>
        )}
      </div>

      <br />
      <div>
        <input 
          type="password"
          placeholder='Password'
          name="password"
          {...register("password", { 
            required: 'password es requerida',
            onChange: () => clearErrors('general'), 
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: 
              "La contraseña debe tener 8 caracteres, al menos 1 letra y al menos 1 número"
            },
          })}
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      
      </div>

      {errors.general && (
        <p className="text-red-700">{errors.general.message}</p>
      )}

      <br />

      <button type="submit">Log in</button>
    </form>
  )
}
