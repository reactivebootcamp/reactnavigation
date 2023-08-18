import React from 'react';
import {RootNavigator} from './src/navigation';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}

export default App;
