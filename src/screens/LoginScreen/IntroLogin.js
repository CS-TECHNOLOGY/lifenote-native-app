import React from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../../components';
import AnimatedLottieView from 'lottie-react-native';
import { Colors, Lottie } from '../../assets';
import styles from './styles';

const IntroLogin = ({
  lottiePosition,
  imageAnimatedStyle,
  width,
  height,
  buttonsAnimatedStyle,
  loginHandler,
  registerHandler,
}) => {
  return (
    <>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Box onPress={() => (lottiePosition.value = 1)} pressable>
          <AnimatedLottieView
            style={{ width: width, height: height }}
            source={Lottie.TRAIN}
            autoPlay={true}
          />
        </Box>
      </Animated.View>
      <Animated.View style={[styles.bottomContainer, buttonsAnimatedStyle]}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Box pressable style={styles.button} onPress={loginHandler}>
            <Text
              size={20}
              color={Colors.CS_WHITE}
              letterSpacing={0.5}
              fontWeight="600">
              Login
            </Text>
          </Box>
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <Box pressable style={styles.button} onPress={registerHandler}>
            <Text
              size={20}
              color={Colors.CS_WHITE}
              letterSpacing={0.5}
              fontWeight="600">
              Register
            </Text>
          </Box>
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default React.memo(IntroLogin);
