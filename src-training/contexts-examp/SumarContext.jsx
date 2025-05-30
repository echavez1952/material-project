import React, { createContext, useState, useContext } from 'react'

export const DataContext = createContext();

export const ContextApp = ({children}) => {

  const [valueContext, setValueContext] = useState(0);

  const valor  = { valueContext, setValueContext };
  console.log(valor); //{valueContext: 0, setValueContext: ƒ}

  


  function CompA() {  
    return (
      <div>
        <p>Componente A</p>
        <CompB />
      </div>
    )
  }

  function CompB() {  
    return (
    <div>
      <p>Componente B</p>
      <p className="px-4 text-red-400 font-bold">Datos: {valueContext}</p>
      <CompC />
    </div>
    )
  }

  function CompC() {
    return (
      <div>
        <p>Componente C</p>
        <CompD  />
      </div>
    )
  }

  function CompD() {
    return (
      <div>
        <p>Componente D</p>
        <CompE  />
      </div>
    )
  }
  
  function CompE() {
    const { valueContext, setValueContext } = useContext(DataContext);
      return (
      <div>
        <p>Componente E</p>
        <p className="px-4 text-red-400 font-bold">Datos: {valueContext}</p> 
        <button className="p-4 bg-gray-400 font-bold text-blue-800 mt-4" onClick={() => setValueContext
        (valueContext + 1) }> Sumar 1</button>
      </div>
    )
  }

return (
    <DataContext.Provider value={valor}>
      {children}
      <CompA />
    </DataContext.Provider>
  );

  
} 

