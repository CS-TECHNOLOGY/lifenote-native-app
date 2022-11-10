import React from 'react';
import { Colors } from '../../assets';
import { Box, ImageIcon, Text } from '../../components';
import { normalize } from '../../configs/commons';
import { StyleSheet } from 'react-native';

const TabButton = ({ currentTab, setCurrentTab, title, image, closeMenu }) => {
  return (
    <Box
      pressable
      onPress={() => {
        if (title === 'LogOut') {
        } else {
          setCurrentTab && setCurrentTab(title);
          closeMenu && closeMenu(true);
        }
      }}
      width="100%">
      <Box
        flexDirection="row"
        align="center"
        padding={[6, 15, 6, 35]}
        margin={[15, 0, 0, 0]}
        background={
          currentTab === title ? Colors.CS_TEXT_DISABLE : Colors.TRANSPARENT
        }
        style={[
          {
            borderRadius: normalize(8),
          },
          title === 'LogOut' && styles.logout,
        ]}>
        <ImageIcon
          source={image}
          size={25}
          tintColor={
            currentTab === title ? Colors.CS_CHANGE_IMAGE : Colors.CS_WHITE
          }
        />
        <Text
          size={15}
          fontWeight="700"
          padding={[0, 15, 0, 0]}
          color={
            currentTab === title ? Colors.CS_CHANGE_IMAGE : Colors.CS_WHITE
          }>
          {title}
        </Text>
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({
  logout: {
    borderTopWidth: 1,
    borderColor: Colors.CS_WHITE,
  },
});
export default React.memo(TabButton);
