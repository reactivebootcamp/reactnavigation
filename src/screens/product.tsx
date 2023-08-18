import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Product = () => {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
