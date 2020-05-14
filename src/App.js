import React, { useCallback, useEffect, useState } from 'react';
import HMSLocation from 'react-native-hms-location';
import { Button, View } from 'react-native';

const Permissions = () => {
  useEffect(() => {
    console.log('useEffect');
    // Check location permissions
    HMSLocation.FusedLocation.Native.hasPermission()
      .then(result => console.log(`Permission granted: ${result}`))
      .catch(ex => console.log('Error while getting location permission info: ' + ex));
  });

  const requestLocationPermisson = useCallback(() => {
    HMSLocation.FusedLocation.Native.requestPermission();
  }, []);

  return (
    <>
      <View>
        <Button title="Request Permission" onPress={requestLocationPermisson} />
      </View>
    </>
  );
};

const App = () => {
  const getLocation = useCallback(() => {
    HMSLocation.FusedLocation.Native.getLastLocation()
      .then(pos => console.log(pos))
      .catch(err => console.log('Failed to get last location', err));
  }, []);

  return <Button title="Get last location" onPress={getLocation} />;
};

export default App;
