import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './tabs';
import {AuthStack} from './auth';
import {useAuth} from '../features/auth/context';

export const RootNavigator = () => {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabsNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
