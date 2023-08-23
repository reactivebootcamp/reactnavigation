import React from 'react';
import {RootNavigator} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './src/context/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
function App(): JSX.Element {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.container}>
          <RootNavigator />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

export default App;
