import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './src';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Suspense } from 'react/cjs/react.production.min';
import { ActivityIndicator } from 'react-native';
import { Colors } from './src/assets';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure();
const App = () => {
  GoogleSignin.configure({
    scopes: [
      '577290104875-bsve3e8pgqluggvp0jot70muqbvup7ba.apps.googleusercontent.com',
    ], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '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', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });
  console.reportErrorsAsExceptions = false;
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
