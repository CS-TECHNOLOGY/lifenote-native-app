import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Images } from '../../assets';
import { Box, ButtonCustomize, ImageIcon, NavBar } from '../../components';
import HandleChangeImage from './HandleChangeImage';
import styles from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
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
  const onSubmit = () => {
    navigation.goBack();
  };
  return (
    <Box width="100%" height="100%" background={Colors.TRANSPARENT}>
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
          onPress={onSubmit}
          rightItem={null}
        />
      </Box>
    </Box>
  );
};

export default ProfileScreen;
