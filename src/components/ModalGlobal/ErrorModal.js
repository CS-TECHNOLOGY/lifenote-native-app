import React from 'react';
import { Colors, Images } from '../../assets';
import Box from '../Box';
import ImageIcon from '../ImageIcon/index';
import { normalize } from '../../configs/commons';
import Text from '../Text';

const ErrorModal = ({ onPress }) => {
  return (
    <Box height={'100%'} justify="center" align="center">
      <ImageIcon size={90} resizeMode="contain" name={Images.ERROR} />
      <Box
        onPress={onPress}
        pressable
        width="40%"
        justify="center"
        align="center"
        margin={[20, 0, 0, 0]}
        padding={[10, 0]}
        background={Colors.CS_RED}
        style={{
          borderRadius: normalize(4),
        }}>
        <Text size={16} fontWeight="700" color={Colors.CS_WHITE}>
          Return
        </Text>
      </Box>
    </Box>
  );
};

export default ErrorModal;
