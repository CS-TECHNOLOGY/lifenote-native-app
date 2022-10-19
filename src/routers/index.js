import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen/index';
import { Text } from '../components';

const FirstStack = createStackNavigator();

const Login = () => {
  return <Text>Login</Text>;
};
const Router = () => {
  return (
    <FirstStack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{ headerShown: false }}>
      <FirstStack.Screen name="IntroScreen" component={IntroScreen} />
      <FirstStack.Screen name="Login" component={Login} />
    </FirstStack.Navigator>
  );
};

export default Router;
