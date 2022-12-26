import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Colors, Images } from '../../assets';
import { Box, ImageIcon } from '../../components';

const RightNavBar = ({ currentTab }) => {
  const navigation = useNavigation();
  const createNoted = () => {
    navigation.navigate('EditorScreen');
  };
  if (currentTab !== 'Menu') {
    return null;
  } else {
    return (
      <Box
        width={'100%'}
        height={'100%'}
        justify="center"
        align="flex-end"
        padding={[0, 0, 0, 15]}>
        <ImageIcon
          source={Images.CREATE}
          size={27}
          tintColor={Colors.CS_PURPLE}
          pressable
          onPress={createNoted}
        />
      </Box>
    );
  }
};

export default React.memo(RightNavBar);
