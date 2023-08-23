import React from 'react';
import {RootNavigator} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
