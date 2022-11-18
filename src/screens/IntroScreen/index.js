import React, { useCallback } from 'react';
import { useSetAccountState } from '../../atoms/account';
import { Box } from '../../components';
import { storage } from '../../configs/storage';
import Intro from './Intro';
const IntroScreen = () => {
  const setLogin = useSetAccountState();
  const onDone = useCallback(() => {
    storage.set('firstIntro', true);
    setLogin({
      isLogin: 'LOGIN',
    });
  }, [setLogin]);
  return (
    <Box flex={1}>
      <Intro three onDone={onDone} />
    </Box>
  );
};

export default IntroScreen;
