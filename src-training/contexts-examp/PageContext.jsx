import { createContext, useContext } from 'react';

export const PageNameContext = createContext();

export const ContextApp = () => {

  return (
    <PageNameContext.Provider value="ParentPage">
      <h1 className="font-bold text-xl text-red-500">Context Page title  (Parent Page)</h1>
      <ChildComponent />
    </PageNameContext.Provider>
  );

  function ChildComponent() {
    const pageName = useContext(PageNameContext);

    return (
      <>
      <p>This a sub-component (Child Component), nested in the <span className="font-bold text-blue-500">{pageName}</span> page </p>
      </>
    )
  }
}  