import React from 'react';

import { Colors, Lottie } from '../../../assets';
import { Box, ImageLottie, Text, ButtonCustomize } from '../../../components';
import { normalize } from '../../../configs/commons';
import { StyleSheet } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from '../../../hooks/useIPhone';

const Intro = ({ onDone }) => {
  return (
    <Box
      padding={[getStatusBarHeight() + 50, 15, 0, 15]}
      background={Colors.CS_BACK_GROUND}
      flex={1}
      align="center">
      <ImageLottie name={Lottie.INTRO_THREE} width={'100%'} height={450} />
      <Text
        margin={[0, 30]}
        textAlign="center"
        color={Colors.CS_GRAY}
        size={17}
        fontWeight={'100'}
        style={styles.greeting}>
        {'Your notes on your phone, your love and your life'}
      </Text>
      <ButtonCustomize
        label={'Start !'}
        background={Colors.CS_PURPLE}
        styleLabel={styles.label}
        rightItem={false}
        style={styles.button}
        onPress={onDone}
      />
    </Box>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '60%',
    position: 'absolute',
    bottom: getBottomSpace() + normalize(100),
    borderWidth: 1,
    borderColor: Colors.CS_PURPLE,
    borderRadius: normalize(10),
  },
  greeting: {
    fontStyle: 'italic',
  },
  label: {
    color: Colors.CS_WHITE,
    letterSpacing: 2,
    fontStyle: 'italic',
  },
});
export default React.memo(Intro);
