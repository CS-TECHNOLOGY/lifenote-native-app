import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import { useAccountValue } from '../atoms/account';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const FirstStack = createStackNavigator();

const Router = () => {
  const { isLogin } = useAccountValue();

  return (
    <FirstStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <FirstStack.Screen name="HomeScreen" component={SettingScreen} /> */}
      {isLogin === '' ? (
        <FirstStack.Screen name="IntroScreen" component={IntroScreen} />
      ) : (
        <>
          <FirstStack.Screen name="LoginScreen" component={LoginScreen} />
          <FirstStack.Screen name="HomeScreen" component={HomeScreen} />
          <FirstStack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <FirstStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </>
      )}
    </FirstStack.Navigator>
  );
};

export default Router;
