import React, { useContext, useState } from 'react';
import { NativeModules } from 'react-native';

const Config = React.createContext({
  isHmsAvailable: '',
});

export const useConfig = () => useContext(Config);

export const AppContext = ({ children }) => {
  const [isHmsAvailable, setIsHmsAvailable] = useState(false);

  async function checkHmsAvailability() {
    const availability = await NativeModules.HmsUtils.isHmsAvailable();
    setIsHmsAvailable(availability);
  }

  checkHmsAvailability();

  const context = { isHmsAvailable };

  return <Config.Provider value={context}>{children}</Config.Provider>;
};
