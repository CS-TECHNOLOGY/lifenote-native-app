import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { Box, Text } from '../../components';

const RenderNote = ({ text }) => (
  <Box margin={[5, 0, 0, 0]} flexDirection="row" align="center">
    <Box
      background={Colors.CS_BLACK}
      justify="center"
      align="center"
      style={styles.dot}
    />
    <Text
      numberOfLines={1}
      color={Colors.CS_GRAY}
      size={14}
      textAlign="left"
      fontWeight={'700'}
      padding={[0, 5]}>
      {text}palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy
      sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport
      Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral
      palsy sport Cerebral palsy sport
    </Text>
  </Box>
);
const NoteList = ({ item, style }) => {
  return (
    <Box
      background={Colors.CS_WHITE_MODE}
      padding={[10]}
      margin={[10, 0, 0, 0]}
      style={[styles.container, style]}>
      <Text color={Colors.CS_GRAY} size={16} fontWeight="900">
        Cerebral
      </Text>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text numberOfLines={3} margin={[5, 0, 0, 0]}>
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
      </Text>
      <Text
        color={Colors.gray}
        textAlign="right"
        size={8}
        margin={[5, 0, 0, 0]}>
        12/01/2022
      </Text>
    </Box>
  );
};
const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.CS_DISABLE,
  },
  image: {
    width: '100%',
    height: 40,
    marginVertical: 5,
  },
});
export default NoteList;
