import React from 'react';
import {RootNavigator} from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {AuthProvider} from './src/features/auth/context';
import {Provider} from 'react-redux';
import {store} from './src/store-v2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
function App(): JSX.Element {
  return (
    // <AuthProvider>
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.container}>
          <RootNavigator />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
    // </AuthProvider>
  );
}

export default App;
