/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../screens/categories';
import Products from '../screens/products';
import Product from '../screens/product';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Search from '../components/icon/search';

const isAndroid = Platform.OS === 'android';

export type ShopStackParamList = {
  Categories: undefined;
  Products: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<ShopStackParamList>();

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8D93CE',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 210,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingLeft: 30,
    height: 35,
    paddingVertical: 10,
    borderRadius: 20,
  },
  searchIcon: {
    position: 'absolute',
    top: isAndroid ? 7 : 9,
    left: 9,
  },
});

export const ShopStack = () => {
  const [search, setSearch] = useState<string>('');
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const insets = useSafeAreaInsets();

  const onChangeText = (text: string) => {
    setSearch(text);
  };

  const onFocus = () => {
    setSearchFocus(true);
  };

  const onBlur = () => {
    setSearchFocus(false);
  };
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          return (
            <View style={[styles.header, {marginTop: insets.top}]}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  onChangeText={onChangeText}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  value={search}
                />
                <Search
                  color={searchFocus ? '#000000' : '#cccccc'}
                  width={18}
                  height={18}
                  style={styles.searchIcon}
                />
              </View>
            </View>
          );
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
