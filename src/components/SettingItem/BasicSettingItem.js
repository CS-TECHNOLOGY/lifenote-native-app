import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import images from '../../assets/images';
import { normalize } from '../../configs/commons';
import Box from '../Box';
import ImageIcon from '../ImageIcon';
import Text from '../Text';

const BasicSettingItem = ({
  rightIcon,
  text,
  leftIcon,
  rightText,
  textColor,
}) => {
  return (
    <Box
      pressable
      flexDirection="row"
      style={styles.container}
      padding={[17, 12, 12, 12]}>
      <Box flexDirection="row" style={styles.leftItem}>
        <ImageIcon
          style={styles.leftIcon}
          name={leftIcon}
          margin={[0, 0, 0, 16]}
        />
        <Text fontSize={16} fontWeight={'500'} color={textColor}>
          {text}
        </Text>
      </Box>
      {rightIcon && (
        <ImageIcon style={styles.rightIcon} name={images.RIGHT_ARROW} />
      )}
      {rightText && (
        <Text fontSize={12} color={colors.CS_GRANITE}>
          {rightText}
        </Text>
      )}
    </Box>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftItem: {
    alignItems: 'center',
  },
  leftIcon: {
    width: normalize(16),
    height: normalize(18),
  },
  rightIcon: {
    width: normalize(5),
    height: normalize(10),
  },
});
export default BasicSettingItem;
