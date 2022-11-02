import React from 'react';
import { Colors } from '../../assets';
import { Box, ImageIcon, Text } from '../../components';
import { normalize } from '../../configs/commons';

const TabButton = ({ currentTab, setCurrentTab, title, image }) => {
  return (
    <Box
      pressable
      onPress={() => {
        if (title === 'LogOut') {
        } else {
          setCurrentTab(title);
        }
      }}>
      <Box
        flexDirection="row"
        align="center"
        padding={[8, 13, 0, 35]}
        margin={[15, 0, 0, 0]}
        background={
          currentTab === title ? Colors.CS_SALMON : Colors.TRANSPARENT
        }
        style={{
          borderRadius: normalize(8),
        }}>
        <ImageIcon
          source={image}
          size={25}
          tintColor={
            currentTab === title ? Colors.CS_SALMON : Colors.TRANSPARENT
          }
        />
        <Text
          size={15}
          fontWeight="700"
          padding={[0, 15, 0, 0]}
          color={currentTab === title ? Colors.CS_PURPLE : Colors.CS_WHITE}>
          {title}
        </Text>
      </Box>
    </Box>
  );
};
export default React.memo(TabButton);
