import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/main';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

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

export const About = ({route}: AboutProps) => {
  const {name} = route.params || {};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </SafeAreaView>
  );
};
