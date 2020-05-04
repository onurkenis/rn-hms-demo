import React from 'react';
import haInterface from 'react-native-ha-interface';
import { Button, View, Text, ToastAndroid } from 'react-native';
import { styles } from './styles';
import { useConfig } from '../AppContext';

const Analytics = () => {
  const { isHmsAvailable } = useConfig();
  ToastAndroid.show(`isHmsAvailable: ${isHmsAvailable}`, ToastAndroid.SHORT);

  const sendEvent = () => {
    /*
     * You can trigger firebase or hms analytics conditionally.
     *
     * Assume that we imported analytics 
     * from @react-native-firebase/analytics;
     *
     * isHmsAvailable 
     *   ? analytics.logEvent(eventName, object)
     *   : haInterface.onEvent(eventName, object)
     *
     */
    haInterface.onEvent('testEvent', {
      testString: 'TestValue',
      testInt: 20,
      testDouble: 2.2,
      testBoolean: false,
    });
    alert('Test Event Sent!');
  };

  const getAppInstanceID = () => {
    haInterface.getAAID().then(aaid => alert(`AAID: ${aaid}`));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytics Kit</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={sendEvent} title="Send Analytics Event" />
        <Button onPress={getAppInstanceID} title="Get AAID" />
      </View>
    </View>
  );
};

export default Analytics;
