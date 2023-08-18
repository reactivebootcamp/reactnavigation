import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import {About} from '../screens/about';

export type RootStackParamList = {
  Home: undefined;
  About: {name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#EC5B70',
        },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: '#fff',
          fontWeight: '600',
        },
        headerTintColor: '#fff',
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
