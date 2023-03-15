import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import { useAccountValue } from '../atoms/account';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { storage } from '../configs/storage';
import EditorScreen from '../screens/EditorScreen';
import { NULL } from '../configs/constants';

const FirstStack = createStackNavigator();

const Router = () => {
  const firstIntro = storage.getBoolean('firstIntro');
  const { isLogin, isGuest } = useAccountValue();

  return (
    <FirstStack.Navigator screenOptions={{ headerShown: false }}>
      {!firstIntro || isLogin === NULL ? (
        <FirstStack.Screen name="IntroScreen" component={IntroScreen} />
      ) : (
        <>
          {isGuest === NULL ? (
            <FirstStack.Screen name="LoginScreen" component={LoginScreen} />
          ) : (
            <>
              <FirstStack.Screen name="HomeScreen" component={HomeScreen} />
              <FirstStack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
              />
              <FirstStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
              />
              <FirstStack.Screen name="EditorScreen" component={EditorScreen} />
            </>
          )}
        </>
      )}
    </FirstStack.Navigator>
  );
};

export default Router;
