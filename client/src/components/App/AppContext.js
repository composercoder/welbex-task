import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({defaultContext, children}) => {
  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  )
};
