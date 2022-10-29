import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/index';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import { useAccountValue } from '../atoms/account';
import ProfileScreen from '../screens/ProfileScreen';

const FirstStack = createStackNavigator();

const Router = () => {
  const { isLogin } = useAccountValue();

  return (
    <FirstStack.Navigator screenOptions={{ headerShown: false }}>
      {isLogin === '' ? (
        <FirstStack.Screen name="IntroScreen" component={IntroScreen} />
      ) : (
        <>
          <FirstStack.Screen name="ProfileScreen" component={ProfileScreen} />
          {/* <FirstStack.Screen name="LoginScreen" component={LoginScreen} />
          <FirstStack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          /> */}
        </>
      )}
    </FirstStack.Navigator>
  );
};
// };

export default Router;
