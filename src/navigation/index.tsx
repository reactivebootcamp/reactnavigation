import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './tabs';
import {AuthStack} from './auth';
import {useSelector} from '../store-v1';
// import {useAuth} from '../features/auth/context';

export const RootNavigator = () => {
  const auth = useSelector(state => state.auth);
  const {isAuthenticated} = auth;

  console.warn({auth});
  // const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabsNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
