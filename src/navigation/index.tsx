import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './tabs';
import {useAuth} from '../context/auth';
import {AuthStack} from './auth';

export const RootNavigator = () => {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthStack /> : <TabsNavigator />}
    </NavigationContainer>
  );
};
