import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import ContentLogin from './ContentLogin';
import useAnimatedLogin from './useAnimatedLogin';
import Animated from 'react-native-reanimated';
import IntroLogin from './IntroLogin';
import ContentRegister from '../RegisterScreen/ContentRegister';

const LoginScreen = () => {
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
    isRegistering,
    control,
    handleSubmit,
    errors,
    onSubmit,
    loginWidthGuest,
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
        loginWidthGuest={loginWidthGuest}
      />
      <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          {!isRegistering ? (
            <ContentLogin
              control={control}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              errors={errors}
              onRegister={onRegister}
              onForgotPassword={onForgotPassword}
              onLoginGoogle={signIn}
            />
          ) : (
            <ContentRegister
              control={control}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          )}
        </KeyboardAwareScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default LoginScreen;
