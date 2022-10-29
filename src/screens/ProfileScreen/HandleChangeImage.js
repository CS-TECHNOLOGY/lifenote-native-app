import React, { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../assets';
import { Box, NavBar, Text } from '../../components';
import styles from './styles';

const HandleChangeImage = () => {
  return (
    <Box
      pressable
      background={Colors.CS_GREEN}
      style={styles.btnChangeImageContainer}>
      <Text color={Colors.CS_CHANGE_IMAGE} fontWeight={'500'} size={16}>
        Change Image
      </Text>
    </Box>
  );
};

export default HandleChangeImage;
