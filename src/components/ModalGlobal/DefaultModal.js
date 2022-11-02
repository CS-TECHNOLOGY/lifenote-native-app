import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../Text/index';
import Box from '../Box/index';
import { Colors } from '../../assets';
import styles from './styles';

const DefaultModal = ({
  title,
  content,
  onClose,
  onPress,
  textLeft = 'Close',
  textRight = 'OK',
}) => {
  return (
    <>
      <Box justify="center" align="center" height={'70%'}>
        <Text size={22} fontWeight="700" margin={[10, 0]} textAlign="center">
          {title}
        </Text>
        <Text size={17} color={Colors.CS_GRAY} textAlign="center">
          {content}
        </Text>
      </Box>
      <Box flexDirection="row" justify="space-between" height={'20%'}>
        <Box
          pressable
          onPress={onClose}
          width="40%"
          height={'100%'}
          background={Colors.CS_DISABLE}
          justify="center"
          align="center"
          style={styles.radius}>
          <Text color={Colors.CS_TEXT_DISABLE}>{textLeft}</Text>
        </Box>
        <TouchableOpacity
          onPress={onPress}
          pressable
          width="40%"
          height={'100%'}
          background={Colors.CS_PURPLE}
          justify="center"
          align="center"
          style={styles.radius}>
          <Text color={Colors.CS_WHITE}>{textRight}</Text>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default DefaultModal;
