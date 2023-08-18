import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './tabs';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};
