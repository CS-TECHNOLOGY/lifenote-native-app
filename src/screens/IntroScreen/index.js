import React, { useRef, useCallback } from 'react';
import Swiper from 'react-native-swiper';
import { useSetAccountState } from '../../atoms/account';
import { Box } from '../../components';
import Intro from './Intro';
const IntroScreen = () => {
  const swiper = useRef();
  const setLogin = useSetAccountState();
  const onNext = useCallback(() => {
    swiper.current?.scrollBy(1);
  }, []);
  const onDone = useCallback(() => {
    setLogin({
      isLogin: 'LOGIN',
    });
  }, [setLogin]);
  return (
    <Box flex={1}>
      <Swiper
        ref={swiper}
        index={0}
        removeClippedSubviews={false}
        showsPagination={false}
        autoplay={false}
        loop={false}
        automaticallyAdjustContentInsets>
        <Intro one onNext={onNext} onDone={onDone} />
        <Intro two onNext={onNext} onDone={onDone} />
        <Intro three onDone={onDone} />
      </Swiper>
    </Box>
  );
};

export default IntroScreen;
