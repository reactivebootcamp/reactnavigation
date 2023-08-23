import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ShopStackParamList} from '../navigation/shop';

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#8D93CE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

type CategoriesProps = NativeStackScreenProps<ShopStackParamList, 'Categories'>;

const Categories = ({navigation}: CategoriesProps) => {
  return (
    <KeyboardAvoidingView
      behavior={isAndroid ? 'height' : 'padding'}
      style={styles.keyboardView}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text>Categories</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={styles.button}>
            <Text style={styles.buttonText}>Go to Products</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Categories;
