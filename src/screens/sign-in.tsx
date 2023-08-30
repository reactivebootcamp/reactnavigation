import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from '../store-v1';
// import {signIn} from '../store-v1/actions/auth';
import {AuthState} from '../store-v1/types';
import {signIn} from '../store-v2/features/auth/auth.slices';
// import {useAuthentication} from '../features/auth/hooks/useAuthentication';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector<AuthState>(state => state.auth);
  // const {signIn} = useAuthentication();

  const onHandlerSignIn = () => {
    // signIn({email: 'add@gmail.com', password: '12345678'});
    dispatch(signIn({email: 'ladliawjd@gmail.com', password: '12345678'}));
  };

  useEffect(() => {
    if (auth.isError) {
      Alert.alert('Error', auth.error);
    }
  }, [auth]);

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button title="Login" color="#EC5B70" onPress={onHandlerSignIn} />
    </View>
  );
};

export default SignIn;
