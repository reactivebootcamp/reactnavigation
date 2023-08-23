import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAuthentication} from '../hooks/useAuthentication';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SignIn = () => {
  const {signIn} = useAuthentication();

  const onHandleSignIn = () => {
    signIn('dawdawd@gmail.com', '12345678');
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Button title="Sign In" onPress={onHandleSignIn} />
      </View>
    </SafeAreaView>
  );
};
