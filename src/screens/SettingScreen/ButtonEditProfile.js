import React from 'react';
import { Colors, Images } from '../../assets';
import { ButtonCustomize } from '../../components';
import styles from './style';

const ButtonEditProfile = ({ onPess }) => {
  return (
    <ButtonCustomize
      label={'Edit Profile'}
      styleLabel={{ color: Colors.CS_CHANGE_IMAGE }}
      style={styles.btnEditProfile}
      background={Colors.CS_WHITE}
      onPress={onPess}
      rightItem={null}
      margin={[38, 0, 0, 0]}
      tintColorLeft={Colors.CS_CHANGE_IMAGE}
      leftImage={Images.EDIT_PROFILE}
      LeftItem={Images.EDIT_PROFILE}
    />
  );
};

export default ButtonEditProfile;
