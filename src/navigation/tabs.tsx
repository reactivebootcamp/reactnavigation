/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {ShopStack} from './shop';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DrawerNavigator from './drawer';
import HomeIcon from '../components/icons/home';
import ShopIcon from '../components/icons/shop';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FCECC9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  label: {
    fontWeight: '400',
    fontSize: 12,
  },
});

const TabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => {
  return (
    <View style={[styles.tabBar, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        // TODO: not sure what I need to do here!!!
        const label: string | undefined | any =
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

        const CustomIcon = () => {
          switch (label) {
            case 'Home':
              return <HomeIcon width={20} height={20} color="#212121" />;
            case 'Shop':
              return <ShopIcon width={20} height={20} color="#212121" />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onLongPress={onLongPress}
            style={styles.labelContainer}
            key={route.key}
            onPress={onPress}>
            <CustomIcon />
            <Text
              style={[
                styles.label,
                {color: isFocused ? '#2D3142' : '#EC5B70'},
              ]}>
              {label}
            </Text>
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
      }}>
      <Tab.Screen
        name="DrawerStack"
        component={DrawerNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          title: 'Shop',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
