import React, { useCallback } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, Text } from '../../components';
import { useForm } from 'react-hook-form';
import InputItem from './InputItem';
import HandleLogin from './HandleLogin';
import styles from './styles';

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

  return (
    <Box background={Colors.CS_GREEN} width="100%" height="100%" flex={1}>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={styles.container}>
        <Text
          margin={[getStatusBarHeight() + 100, 0, 0, 0]}
          size={32}
          color={'#180E25'}
          fontWeight="700">
          Login
        </Text>
        <Text
          margin={[15, 0, 0, 0]}
          size={15}
          color={'#827D89'}
          fontWeight="400">
          And notes your idea
        </Text>
        <InputItem
          control={control}
          name="firstName"
          errors={errors.firstName}
          placeholder="cs_tech@gmail.com"
          label="Email Address"
          margin={[20, 0, 0, 0]}
        />
        <InputItem
          control={control}
          name="lastName"
          security={true}
          errors={errors.lastName}
          label="Password"
          margin={[20, 0, 0, 0]}
        />
        <HandleLogin handleSubmit={handleSubmit} onSubmit={onSubmit} />
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default LoginScreen;
