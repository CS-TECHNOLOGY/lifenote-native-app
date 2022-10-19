import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import IntroScreen from './screens/IntroScreen';

const Root = () => {
  return (
    <NavigationContainer>
      <IntroScreen />
    </NavigationContainer>
  );
};
export default Root;
