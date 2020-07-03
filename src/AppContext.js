import React, { useContext } from 'react';

const Config = React.createContext({
  isHmsAvailable: false,
});

export const useConfig = () => useContext(Config);

export const AppContext = ({ children, isHmsAvailable }) => {
  const context = { isHmsAvailable };
  return <Config.Provider value={context}>{children}</Config.Provider>;
};
