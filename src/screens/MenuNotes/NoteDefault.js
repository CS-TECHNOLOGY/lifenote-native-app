import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { Box, Text } from '../../components';

const NoteDefault = ({ style, item }) => {
  return (
    <Box
      background={Colors.CS_WHITE_MODE}
      padding={[10]}
      margin={[10, 0, 0, 0]}
      style={[styles.content, style]}>
      <Text
        color={Colors.CS_GRAY}
        size={16}
        textAlign="left"
        fontWeight={'900'}>
        Cerebral
      </Text>
      <Text
        numberOfLines={Math.floor(Math.random() * 5) + 1}
        color={Colors.CS_GRAY}
        size={14}
        textAlign="left"
        fontWeight={'700'}
        margin={[5, 0]}>
        {item.text}palsy sport Cerebral palsy sport Cerebral palsy sport
        Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral
        palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy
        sport Cerebral palsy sport Cerebral palsy sport
      </Text>
      <Text
        color={Colors.CS_GRAY}
        size={8}
        textAlign="right"
        fontWeight={'700'}
        margin={[5, 0, 0, 0]}>
        12/01/2022
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  content: {
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.CS_DISABLE,
  },
});
export default NoteDefault;
