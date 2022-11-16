import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Images } from '../../assets';
import { Box, ButtonCustomize, ImageIcon, NavBar } from '../../components';
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
      <Box padding={[0, 15]} style={styles.saveButton}>
        <ButtonCustomize
          label={'Save Chane'}
          background={Colors.CS_PURPLE}
          styleLabel={{ color: Colors.CS_WHITE }}
          onPress={() => null}
          rightItem={null}
        />
      </Box>
    </Box>
  );
};

export default ProfileScreen;
