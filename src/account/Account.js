import React, { useState } from 'react';
import { Button, View, Text, NativeModules } from 'react-native';
import { styles } from './styles';

const Account = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    NativeModules.HMSLogin.login().then(
      account => {
        setUser(account);
      },
      (code, message) => {
        console.log(message);
      },
    );
  };

  const handleLogout = () => {
    NativeModules.HMSLogin.logout();
    setUser(null);
  };

  const Login = () => {
    return <Button onPress={handleLogin} title="Login" />;
  };

  const Logout = () => {
    const { displayName } = user;
    return (
      <>
        <Text style={styles.text}>{`Welcome ${displayName}`}</Text>
        <Button onPress={handleLogout} title="Logout" />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Kit</Text>
      {!user ? <Login /> : <Logout />}
    </View>
  );
};

export default Account;
