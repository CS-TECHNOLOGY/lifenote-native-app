import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box } from '../../components';
import { useForm } from 'react-hook-form';
import styles from './styles';
import ContentLogin from './ContentLogin';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

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
  const navigation = useNavigation();
  const onSubmit = useCallback(data => console.log(data), []);
  const onRegister = useCallback(
    () => navigation.navigate('RegisterScreen'),
    [navigation],
  );
  const onForgotPassword = useCallback(
    () => navigation.navigate('ForgotPasswordScreen'),
    [navigation],
  );
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error) {
      console.log('_error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <Box background={Colors.CS_GREEN} width="100%" height="100%" flex={1}>
      <KeyboardAwareScrollView
        enableOnAndroid
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}>
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
    </Box>
  );
};

export default LoginScreen;
