import { ParentComponent } from "./ParentConponent"

// Execute ChildrenComponent
// Ejemplo: 
// export const LoginPage = () => { 

export const AppChildren = () => {

  console.log('Execute instrucciones ChildrenComponent')
  
  return (
    // Execute ParentComponet
    // Ejemplo:
    // <AuthLayout description="Login Page"></AuthLayout>
    
    <ParentComponent description=" (h3). Login Page">
      <h1>HELLO WORLD desde el ChildrenComponent</h1>
      <p>Este es el primer contenido del ChildrenComponent</p>
    </ParentComponent>
  )
}
