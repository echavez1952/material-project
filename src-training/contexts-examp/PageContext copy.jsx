import { createContext, useContext } from 'react';

export const AuthContext = createContext();

const pageName = useContext(AuthContext);

export const ContextApp = ({ children }) => {
   
    <p>This a sub-component (Child Component), nested in the <span className="font-bold text-blue-500">{pageName}</span> page </p>
       
  return (
    <PageNameContext.Provider value="ParentPage">
    <h1 className="font-bold text-xl text-red-500">Context Page title  (Parent Page)</h1>
    {children}
  </PageNameContext.Provider>
  );
}  