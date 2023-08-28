import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './tabs';
import {AuthStack} from './auth';
import {useAppSelector} from '../store';
// import {useAuth} from '../features/auth/context';

export const RootNavigator = () => {
  const auth = useAppSelector(state => state.auth);
  const {isAuthenticated} = auth;

  console.warn({auth});
  // const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabsNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
