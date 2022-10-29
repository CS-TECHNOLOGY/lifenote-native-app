import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, InputItem, NavBar, Text } from '../../components';
import HandleChangeImage from './HandleChangeImage';
import styles from './styles';

const ProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('Michael AntonioMichael Antonio', control);
  return (
    <Box
      background={Colors.CS_GREEN}
      width="100%"
      height="100%"
      flex={1}
      style={[styles.container]}>
      <NavBar leftIcon label="Settings" border={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Box style={styles.avatar} />
        <HandleChangeImage />
        <Box width="99%" height="100%">
          <InputItem
            control={control}
            name="firstName"
            errors={errors.firstName}
            label="Full Name"
            margin={[20, 0, 0, 0]}
          />
          <InputItem
            control={control}
            name="firstName"
            errors={errors.firstName}
            label="Email Address"
            margin={[20, 0, 0, 0]}
          />
          <Text
            margin={[15, 0, 0, 0]}
            size={15}
            color={'#827D89'}
            fontWeight="400">
            Changing email address information means you need to re-login to the
            apps.
          </Text>
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default ProfileScreen;
