/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ShopStack} from './shop';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DrawerNavigator from './drawer';

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

const TabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: insets.bottom,
        backgroundColor: '#EBEBD3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // tabBarLabelStyle: {
        //   fontWeight: '400',
        //   fontSize: 11,
        // },
        // tabBarStyle: {
        //   backgroundColor: '#fff',
        // },
        // tabBarActiveTintColor: '#EC5B70',
        // tabBarInactiveTintColor: '#212121',
      }}>
      <Tab.Screen
        name="DrawerStack"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({focused}) => (
          //   <Image
          //     style={styles.icon}
          //     source={focused ? homeIcon : homeIconOutline}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarLabel: 'Shop',
          // tabBarIcon: ({focused}) => (
          //   <Image
          //     style={styles.icon}
          //     source={focused ? shopIcon : shopIconOutline}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
