import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Platform, BackHandler } from 'react-native';
import { Suspense } from 'react/cjs/react.production.min';
import { ActivityIndicator, Alert } from 'react-native';
import { Colors } from './src/assets';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import RNExitApp from 'react-native-exit-app';

const App = () => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/userinfo.profile'], //scopes as you need
    webClientId:
      '577290104875-bsve3e8pgqluggvp0jot70muqbvup7ba.apps.googleusercontent.com',
    iosClientId:
      '577290104875-i4htrgl62ju6tuffci6rhi91sdjk7clf.apps.googleusercontent.com',
  });
  console.reportErrorsAsExceptions = false;
  useEffect(() => {
    if (Platform?.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let backHandleAlertShow = false;

  const handleBackButton = () => {
    if (!backHandleAlertShow) {
      backHandleAlertShow = true;
      Alert.alert(
        'Exit the app',
        'Your notes are still saved',
        [
          {
            text: 'Close',
            onPress: () => {
              backHandleAlertShow = false;
            },
          },
          {
            text: 'OK',
            onPress: () => {
              RNExitApp.exitApp();
              backHandleAlertShow = false;
            },
          },
        ],
        { cancelable: true },
      );
    }

    if (backHandleAlertShow) {
      backHandleAlertShow = false;
    }
    return true;
  };
  return (
    <Suspense
      fallback={<ActivityIndicator size="small" color={Colors.CS_DARK_RED} />}>
      <RecoilRoot>
        <SafeAreaProvider>
          <GestureHandlerRootView style={styles.flexRoot}>
            <Root />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </RecoilRoot>
    </Suspense>
  );
};
const styles = StyleSheet.create({
  flexRoot: { flex: 1 },
});
export default App;
