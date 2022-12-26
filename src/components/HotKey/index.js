import React, { forwardRef, useCallback } from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { getDefaultHeaderHeight, normalize } from '../../configs/commons';
import { getBottomSpace, isIphoneX } from '../../hooks/useIPhone';
import { Colors } from '../../assets';

const SIZE = normalize(50);
const CLOSE_SIZE = normalize(20);
const CONTAINER_SIZE = SIZE + CLOSE_SIZE / 2;
const PADDING_HORIZONTAL = normalize(15);
const PADDING_BOTTOM = Platform.select({
  android: normalize(24),
  ios: isIphoneX() ? normalize(24) : normalize(26.5),
});
const BOTTOM_TABBAR_HEIGHT = normalize(63);
const BOTTOM_TABBAR_MARGIN_BOTTOM = Platform.select({
  android: 0,
  ios: isIphoneX() ? getBottomSpace() : 0,
});

export const HotkeyPosition = {
  LEFT: 'left',
  RIGHT: 'right',
  UNKNOWN: 'unknown',
};

export const HotkeyType = {
  LOTTIE: 'lottie',
  IMAGE: 'image',
};

function HotkeyImage({ uri, src }) {
  return (
    <FastImage
      source={src ? src : { uri: uri }}
      style={styles.hotKey}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

const Hotkey = forwardRef(({ data, onClick }, ref) => {
  const { hotkey_start_position, src, uri } = data;

  const clamp = (value, lowerBound, upperBound) => {
    'worklet';
    return Math.min(Math.max(lowerBound, value), upperBound);
  };

  const insets = useSafeAreaInsets();
  const { width: windowWidth, height: windowHeight } = useSafeAreaFrame();

  const PADDING_TOP = getDefaultHeaderHeight(false, insets.top) - normalize(40);

  const screenWidth = windowWidth - SIZE - PADDING_HORIZONTAL;
  const screenHeight =
    windowHeight -
    SIZE -
    BOTTOM_TABBAR_HEIGHT -
    BOTTOM_TABBAR_MARGIN_BOTTOM -
    PADDING_BOTTOM;

  const transX = useSharedValue(
    hotkey_start_position === HotkeyPosition.LEFT
      ? PADDING_HORIZONTAL
      : screenWidth,
  );
  const transY = useSharedValue(screenHeight);

  React.useEffect(() => {
    if (transY.value > screenHeight) {
      transY.value = screenHeight;
    }
  }, [screenHeight, transY]);

  const gestureHandler = useAnimatedGestureHandler(
    {
      onStart: (_, ctx) => {
        ctx.startX = transX.value;
        ctx.startY = transY.value;
      },
      onActive: (event, ctx) => {
        transX.value = clamp(
          ctx.startX + event.translationX,
          -SIZE / 3,
          screenWidth + SIZE / 3,
        );
        transY.value = clamp(
          ctx.startY + event.translationY,
          PADDING_TOP,
          screenHeight,
        );
      },
      onEnd: event => {
        const targetX = clamp(transX.value, PADDING_HORIZONTAL, screenWidth);
        const targetY = clamp(transY.value, PADDING_TOP, screenHeight);
        const left = targetX;
        const right = screenWidth - targetX;
        const minDistance = Math.min(left, right);
        let snapX = targetX;
        let snapY = targetY;
        switch (minDistance) {
          case left:
            snapX = PADDING_HORIZONTAL;
            break;
          case right:
            snapX = screenWidth;
            break;
        }
        transX.value = withSpring(snapX, {
          velocity: event.velocityX,
        });
        transY.value = withSpring(snapY, {
          velocity: event.velocityY,
        });
      },
    },
    [screenHeight],
  );

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: transX.value,
        },
        {
          translateY: transY.value,
        },
      ],
    };
  });

  const onHotkeyPress = useCallback(async () => {
    onClick && onClick();
  }, [onClick]);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.headContainer, stylez]}>
        <View style={styles.headContent}>
          <Pressable onPress={onHotkeyPress} style={styles.head}>
            <HotkeyImage uri={uri} src={src} />
          </Pressable>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
});

let styles = StyleSheet.create({
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headContainer: {
    position: 'absolute',
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    zIndex: 999,
  },
  headContent: {
    width: SIZE,
    height: SIZE,
    marginTop: normalize(10),
    backgroundColor: Colors.CS_CHANGE_IMAGE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotKey: {
    width: SIZE - 20,
    height: SIZE - 20,
    borderRadius: (SIZE - 20) / 2,
  },
});

export default React.memo(Hotkey);
