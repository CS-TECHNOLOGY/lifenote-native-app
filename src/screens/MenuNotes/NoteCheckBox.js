import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Colors, Images } from '../../assets';
import { Box, ImageIcon, Text } from '../../components';
const RenderCheckBox = ({ text }) => (
  <Box margin={[5, 0, 0, 0]} flexDirection="row" align="center">
    <Box
      background={Colors.TRANSPARENT}
      justify="center"
      align="center"
      style={styles.checkBox}
    />
    <Text
      color={Colors.CS_GRAY}
      numberOfLines={1}
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
const NoteCheckBox = ({ style, item }) => {
  return (
    <Box
      background={Colors.CS_WHITE_MODE}
      margin={[10, 0, 0, 0]}
      style={[styles.container, style]}>
      <Box padding={[10]} style={styles.opacity}>
        <Text
          color={Colors.CS_GRAY}
          size={16}
          textAlign="left"
          fontWeight={'900'}>
          Cerebral
        </Text>
        <Text numberOfLines={3} margin={[5, 0, 0, 0]}>
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
        </Text>
        <Text
          color={Colors.CS_GRAY}
          size={8}
          textAlign="right"
          margin={[5, 0, 0, 0]}>
          12/01/2022
        </Text>
      </Box>
      <TouchableNativeFeedback onPress={() => null}>
        <Box
          justify="center"
          align="center"
          width={'100%'}
          height={'100%'}
          style={styles.lock}>
          <ImageIcon size={30} source={Images.PASSWORD} />
        </Box>
      </TouchableNativeFeedback>
    </Box>
  );
};
const styles = StyleSheet.create({
  checkBox: {
    borderWidth: 1,
    width: 12,
    height: 12,
  },
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.CS_DISABLE,
  },
  opacity: {
    opacity: 0.5,
  },
  lock: {
    position: 'absolute',
  },
});
export default NoteCheckBox;
