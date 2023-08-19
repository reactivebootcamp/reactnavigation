import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeProps} from '../navigation/drawer';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#EC5B70',
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

export const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={styles.button}>
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
