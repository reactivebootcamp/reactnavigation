/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainStack} from './main';
import {ShopStack} from './shop';
import {Image, StyleSheet} from 'react-native';

const homeIcon = require('../../assets/images/home.png');
const homeIconOutline = require('../../assets/images/home-outline.png');
const shopIcon = require('../../assets/images/shop.png');
const shopIconOutline = require('../../assets/images/shop-outline.png');

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 11,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: '#EC5B70',
        tabBarInactiveTintColor: '#212121',
      }}>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={focused ? homeIcon : homeIconOutline}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={focused ? shopIcon : shopIconOutline}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
