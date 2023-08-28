/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Home} from '../screens/home';
import {About} from '../screens/about';
import {Image, StyleSheet, Text, View} from 'react-native';
import Logout from '../components/icons/logout';
import HomeIcon from '../components/icons/home';
import AboutIcon from '../components/icons/about';
// import {useAuthentication} from '../features/auth/hooks/useAuthentication';
import {useAppDispatch} from '../store';
import {signOut} from '../store/actions/auth';

export type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const styles = StyleSheet.create({
  drawerHeader: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileContainer: {
    paddingTop: 10,
    gap: 5,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  drawerItem: {
    padding: 0,
    margin: 0,
  },
  drawerItemIcon: {
    padding: 0,
    margin: 0,
  },
  drawerItemLabel: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 0,
  },
});

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();
  const onHandlerSignOut = () => {
    dispatch(signOut());
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
            }}
          />
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.username}>Reactive Bootcamp</Text>
          <Text style={styles.location}>Buenos Aires, Argentina</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={() => (
          <Logout
            style={styles.drawerItemIcon}
            height={17}
            width={17}
            color="#000000"
          />
        )}
        label={() => <Text style={styles.drawerItemLabel}>Logout</Text>}
        onPress={onHandlerSignOut}
        style={styles.drawerItem}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
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
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused}) => (
            <HomeIcon
              width={17}
              height={17}
              color={focused ? '#ffffff' : '#212121'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({focused}) => (
            <AboutIcon
              width={17}
              height={17}
              color={focused ? '#ffffff' : '#212121'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
