import React from 'react';
import { Text } from 'react-native';
import { Colors, Images } from '../../assets';
import Box from '../Box';
import ImageIcon from '../ImageIcon/index';
import { normalize } from '../../configs/commons';

const SuccessModal = ({ onPress }) => {
  return (
    <Box height={'100%'} justify="center" align="center">
      <ImageIcon size={90} resizeMode="contain" name={Images.SUCCESS} />
      <Box
        onPress={onPress}
        width="40%"
        justify="center"
        align="center"
        margin={[20, 0, 0, 0]}
        padding={[10, 0]}
        color={Colors.CS_PURPLE}
        style={{
          borderRadius: normalize(4),
        }}>
        <Text size={16} color={Colors.CS_WHITE}>
          Return
        </Text>
      </Box>
    </Box>
  );
};

export default SuccessModal;
