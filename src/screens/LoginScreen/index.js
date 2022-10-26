import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';
import useAnimatedLogin from './useAnimatedLogin';
import Animated from 'react-native-reanimated';
import IntroLogin from './IntroLogin';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = useCallback(data => console.log(data), []);

  const {
    imageAnimatedStyle,
    buttonsAnimatedStyle,
    formAnimatedStyle,
    registerHandler,
    loginHandler,
    width,
    height,
    lottiePosition,
    onRegister,
    onForgotPassword,
    signIn,
  } = useAnimatedLogin();

  return (
    <Animated.View style={[styles.container]}>
      <IntroLogin
        lottiePosition={lottiePosition}
        imageAnimatedStyle={imageAnimatedStyle}
        width={width}
        height={height}
        buttonsAnimatedStyle={buttonsAnimatedStyle}
        loginHandler={loginHandler}
        registerHandler={registerHandler}
      />
      <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <ContentLogin
            control={control}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            errors={errors}
            onRegister={onRegister}
            onForgotPassword={onForgotPassword}
            onLoginGoogle={signIn}
          />
        </KeyboardAwareScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default LoginScreen;
