import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useAuthentication} from '../features/auth/hooks/useAuthentication';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn = () => {
  const {signIn} = useAuthentication();

  const onHandlerSignIn = () => {
    signIn({email: 'add@gmail.com', password: '12345678'});
  };
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button title="Login" color="#EC5B70" onPress={onHandlerSignIn} />
    </View>
  );
};

export default SignIn;
