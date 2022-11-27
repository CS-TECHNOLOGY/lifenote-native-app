import React from 'react';
import { Colors } from '../../assets';
import colors from '../../assets/colors';
import images from '../../assets/images';
import { Box, ImageIcon, Text } from '../../components';
import styles from './style';

export const BasicProfile = () => {
  return (
    <Box pressable style={styles.basicInfoContainer}>
      <ImageIcon
        style={styles.avatar}
        name={images.GOOGLE}
        margin={[0, 0, 0, 16]}
      />
      <Box>
        <Text
          color={Colors.CS_BLACK}
          fontWeight={'700'}
          size={20}
          margin={[0, 0, 6, 0]}>
          Michael Antonio
        </Text>
        <Box flexDirection="row" style={styles.boxEmail}>
          <ImageIcon
            style={styles.emailIcon}
            name={images.EMAIL}
            margin={[0, 0, 0, 9]}
          />
          <Text color={colors.CS_GRANITE} fontSize={12}>
            anto_michael@gmail.com
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
