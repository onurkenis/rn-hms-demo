import React, { useState } from 'react';
import { Button, View, Text, NativeModules, ScrollView } from 'react-native';
import { DEFAULT_LOG, DEFAULT_TOPIC, RESULT_CODE_SUCCESS } from './constants';
import { styles } from './styles';

const Push = () => {
  const [log, setLog] = useState(DEFAULT_LOG);

  const getToken = () => {
    NativeModules.RNHmsInstanceId.getToken((result, token) => {
      let msg = log;
      if (result == RESULT_CODE_SUCCESS) {
        msg = msg + 'getToken result:' + token + '\n';
      } else {
        msg = msg + 'getToken exception, error:' + token + '\n';
      }
      setLog(msg);
      console.log(msg);
    });
  };

  const deleteToken = () => {
    NativeModules.RNHmsInstanceId.deleteToken((result, resultInfo) => {
      let msg = log;
      if (result == RESULT_CODE_SUCCESS) {
        msg = msg + 'deleteToken success!' + '\n';
      } else {
        msg = msg + 'deleteToken failed:' + resultInfo + '\n';
      }
      setLog(msg);
    });
  };

  const subscribe = () => {
    NativeModules.RNHmsMessaging.subscribe(DEFAULT_TOPIC, (result, errinfo) => {
      let msg = log;
      if (result == RESULT_CODE_SUCCESS) {
        msg = msg + 'subscribe success!' + '\n';
      } else {
        msg = msg + 'subscribe failed:' + errinfo + '\n';
      }
      setLog(msg);
    });
  };
  const clearLog = () => {
    setLog(DEFAULT_LOG);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Push Kit</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={getToken} title="Get Token" />
        <Button onPress={deleteToken} title="Delete Token" />
        <Button onPress={subscribe} title="Subscribe A Topic" />
        <Button onPress={clearLog} title="Clear Log" />
      </View>
      <ScrollView>
        <Text style={styles.log}>{log}</Text>
      </ScrollView>
    </View>
  );
};

export default Push;
