import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};

export default Products;
