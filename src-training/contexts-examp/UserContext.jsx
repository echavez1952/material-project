import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();

export const ContextApp = () => {
  
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component1 />
    </UserContext.Provider>
  );

  function Component1() {
    return (
      <>
        <h1>Component 1</h1>
        <Component2 />
      </>
    );
  }

  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }

  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }

  function Component4() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>Component 4</h1>
        <h2>{`Hello ${user} again!`}</h2>
        <Component5 />
      </>
    );
  }

  function Component5() {
    return (
      <>
        <h1>Component 5</h1>
      </>
    );
  }
 
}