import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Product from '../screens/product';

export type ShopStackParamList = {
  Categories: undefined;
  Products: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<ShopStackParamList>();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8D93CE',
        },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: '#fff',
          fontWeight: '600',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
