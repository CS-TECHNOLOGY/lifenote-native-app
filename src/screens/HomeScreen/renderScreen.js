/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Text } from '../../components';
import { modalGlobalRef } from '../../routers/configRef';

const renderScreen = route => {
  switch (route) {
    case 'Home':
      return (
        <Text
          onPress={() =>
            modalGlobalRef.current?.show({
              type: '',
              onDone: () => null,
              title: 'Show popup',
              content: 'Very test app note life',
            })
          }>
          Screen Home
        </Text>
      );

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
