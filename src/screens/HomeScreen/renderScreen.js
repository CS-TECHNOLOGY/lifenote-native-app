/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Text } from '../../components';
import { modalGlobalRef } from '../../routers/configRef';
import SecurityScreen from '../SecurityScreen';
import MenuNotes from '../MenuNotes';
import CalendarNoted from '../CalendarNoted';
import ProfileScreen from '../ProfileScreen';

const renderScreen = route => {
  switch (route) {
    case 'Menu':
      return <MenuNotes />;
    case 'Pattern':
      return <SecurityScreen />;
    case 'Noted':
      return <CalendarNoted />;
    case 'Profile':
      return <ProfileScreen />;
    default:
      return (
        <Text
          onPress={() =>
            modalGlobalRef.current?.show({
              type: 'success',
            })
          }>
          Normal Screen
        </Text>
      );
  }
};
export default renderScreen;
