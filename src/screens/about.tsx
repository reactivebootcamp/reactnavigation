import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AboutProps} from '../navigation/drawer';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const About = ({}: AboutProps) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    </SafeAreaView>
  );
};
