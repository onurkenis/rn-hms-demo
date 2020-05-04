import React from 'react';
import haInterface from 'react-native-ha-interface';
import { Button, View, Text } from 'react-native';
import { styles } from './styles';

const Analytics = () => {
  const sendEvent = () => {
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
