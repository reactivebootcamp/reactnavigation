import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../screens/home';
import {About} from '../screens/about';

type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
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
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#EC5B70',
        drawerInactiveTintColor: '#212121',
        drawerInactiveBackgroundColor: '#FFFFFF',
        drawerLabelStyle: {
          fontWeight: '600',
          fontSize: 14,
        },
        drawerType: 'back',
      })}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
