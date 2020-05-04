import React from 'react';
import { NativeModules, ToastAndroid } from 'react-native';
import Push from './push';
import Analytics from './analytics';
import Account from './account';

const checkHmsAvailability = async () => {
  const isHmsAvailable = await NativeModules.HmsUtils.isHmsAvailable();
  ToastAndroid.show(`isHmsAvailable: ${isHmsAvailable}`, ToastAndroid.SHORT);
};

const App = () => {
  checkHmsAvailability();
  return (
    <>
      <Push />
      <Analytics />
      <Account />
    </>
  );
};

export default App;
