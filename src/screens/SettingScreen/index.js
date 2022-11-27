import React from 'react';
import colors from '../../assets/colors';
import BasicSettingItem from '../../components/SettingItem/BasicSettingItem';
import images from '../../assets/images';
import styles from './style';
import ButtonEditProfile from './ButtonEditProfile';
import { BasicProfile } from './BasicProfile';
import { Box, Text } from '../../components';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  const toEditProfile = () => {
    navigation.navigate('ProfileScreen');
  };
  return (
    <Box
      width="100%"
      height="100%"
      background={colors.CS_WHITE}
      padding={[16, 16, 16, 16]}>
      <BasicProfile />
      <ButtonEditProfile onPess={toEditProfile} />
      <Box style={styles.line} />
      <Text color={colors.CS_GRANITE} fontSize={10} margin={[0, 0, 8, 0]}>
        APP SETTINGS
      </Text>
      <BasicSettingItem
        rightIcon
        text="Change Password"
        leftIcon={images.CLOCK}
      />
      <BasicSettingItem
        rightText={'Medium'}
        text="Change Password"
        leftIcon={images.FONT_SIZE}
      />
      <BasicSettingItem
        rightText={'All active'}
        text="Change Password"
        leftIcon={images.NOTIFICATION}
      />
      <Box style={styles.line} />
      <BasicSettingItem
        text="Log Out"
        leftIcon={images.LOGOUT_SETTING}
        textColor={colors.CS_FADED_RED}
      />
    </Box>
  );
};

export default SettingScreen;
