import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import GlobalModal from './components/ModalGlobal';
import { modalGlobalRef } from './routers/configRef';
import Router from './routers/index';

const Root = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <GlobalModal
        ref={ref => {
          modalGlobalRef.current = ref;
        }}
      />
    </>
  );
};
export default Root;
