/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Box, ImageIcon } from '../../components';
import SecurityScreen from '../SecurityScreen';
import MenuNotes from '../MenuNotes';
import CalendarNoted from '../CalendarNoted';
import { Images } from '../../assets';

const renderScreen = route => {
  switch (route) {
    case 'Menu':
      return <MenuNotes />;
    case 'Pattern':
      return <SecurityScreen />;
    case 'Noted':
      return <CalendarNoted />;
    // case 'Profile':
    //   return <ProfileScreen />;
    default:
      return (
        <Box width={'100%'} height={'100%'} justify="center" align="center">
          <ImageIcon name={Images.MAINTAIN} size={'70%'} />
        </Box>
      );
  }
};
export default renderScreen;
