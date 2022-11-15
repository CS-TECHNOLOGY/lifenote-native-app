/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Text } from '../../components';
import { modalGlobalRef } from '../../routers/configRef';
import MenuNotes from '../MenuNotes';

const renderScreen = route => {
  switch (route) {
    case 'Menu':
      return <MenuNotes />;

    default:
      return (
        <Text
          nPress={() =>
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
