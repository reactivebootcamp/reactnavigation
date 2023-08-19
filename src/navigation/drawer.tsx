import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../screens/home';
import {About} from '../screens/about';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type DrawerRootParamList = {
  Home: undefined;
  About: undefined;
};

export type HomeProps = NativeStackScreenProps<DrawerRootParamList, 'Home'>;
export type AboutProps = NativeStackScreenProps<DrawerRootParamList, 'About'>;

const Drawer = createDrawerNavigator<DrawerRootParamList>();

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
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerLabelStyle: {
          fontWeight: '600',
        },
        drawerActiveBackgroundColor: '#EC5B70',
        drawerInactiveBackgroundColor: '#fff',
        drawerType: 'back',
      })}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
