import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import { AppContext } from './AppContext';
import Push from './push';
import Analytics from './analytics';
import Account from './account';

const App = () => {
  const [isHmsAvailable, setIsHmsAvailable] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkHmsAvailability() {
      const isHmsAvailable = await NativeModules.HmsUtils.isHmsAvailable();
      setIsHmsAvailable(isHmsAvailable);
      setIsReady(true);
    }

    checkHmsAvailability();
  }, []);

  return (
    <>
      {isReady && (
        <AppContext isHmsAvailable={isHmsAvailable}>
          <Push />
          <Analytics />
          <Account />
        </AppContext>
      )}
    </>
  );
};

export default App;
