import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Images } from '../../assets';
import { Box, ImageIcon, NavBar } from '../../components';
import HandleChangeImage from './HandleChangeImage';
import styles from './styles';

const ProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
  });
  return (
    <Box width="100%" height="100%" background={Colors.CS_BACK_GROUND}>
      <NavBar leftIcon label="Settings" border={true} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <ImageIcon style={styles.avatar} name={Images.GOOGLE} />
        <HandleChangeImage
          control={control}
          errors={errors}
          changeAvatar={() => null}
        />
      </KeyboardAwareScrollView>
    </Box>
  );
};

export default ProfileScreen;
