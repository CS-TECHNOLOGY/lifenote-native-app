import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../assets';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function PatternLock(props) {
  const [isError, setIsError] = useState(false);
  const canTouch = useSharedValue(true);
  const patternPoints = useSharedValue();
  const selectedIndexes = useSharedValue([]);
  const endPoint = useSharedValue();
  const containerLayout = useSharedValue({ width: 0, height: 0, min: 0 });
  const R = useDerivedValue(
    () =>
      (containerLayout.value.min / props.rowCount - props.patternMargin * 2) /
      2,
  );
  const cvc = useAnimatedStyle(() => ({
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: `${
      Math.max(
        0,
        containerLayout.value.height / containerLayout.value.width - 1.25,
      ) * 50
    }%`,
    width: containerLayout.value.min,
    height: containerLayout.value.min,
  }));
  const msgX = useSharedValue(0);
  const msgColor = {
    color: isError ? props.errorColor : props.activeColor,
    fontSize: 15,
    lineHeight: 21,
  };
  const msgStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: msgX.value }] };
  });
  const onContainerLayout = ({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) =>
    (containerLayout.value = {
      width,
      height,
      min: Math.min(width, height),
    });
  const onPatternLayout = ({ nativeEvent: { layout } }) => {
    const points = [];
    for (let i = 0; i < props.rowCount; i++) {
      for (let j = 0; j < props.columnCount; j++) {
        points.push({
          x: layout.x + (layout.width / props.columnCount) * (j + 0.5),
          y: layout.y + (layout.height / props.rowCount) * (i + 0.5),
        });
      }
    }
    patternPoints.value = points;
  };
  const onEndJS = res => {
    if (props.onCheck) {
      canTouch.value = false;
      if (!props.onCheck(res)) {
        setIsError(true);
        const closeError = () => setIsError(false);
        runOnUI(() => {
          cancelAnimation(msgX);
          msgX.value = withSpring(
            msgX.value === 0 ? 0.1 : 0,
            {
              stiffness: 2000,
              damping: 10,
              mass: 1,
              velocity: 2000,
            },
            finished => {
              runOnJS(closeError)();
              canTouch.value = true;
              selectedIndexes.value = [];
            },
          );
        })();
      } else {
        setIsError(false);
        setTimeout(() => {
          selectedIndexes.value = [];
          canTouch.value = true;
        }, 1000);
      }
    }
  };
  const panHandler = useAnimatedGestureHandler({
    onStart: evt => {
      if (
        canTouch.value &&
        patternPoints.value &&
        selectedIndexes.value.length === 0
      ) {
        const selected = [];
        patternPoints.value.every((p, idx) => {
          if (
            (p.x - evt.x) * (p.x - evt.x) + (p.y - evt.y) * (p.y - evt.y) <
            R.value * R.value
          ) {
            selected.push(idx);
            return false;
          }
          return true;
        });
        selectedIndexes.value = selected;
      }
    },
    onActive: evt => {
      if (
        canTouch.value &&
        patternPoints.value &&
        selectedIndexes.value.length > 0
      ) {
        patternPoints.value.every((p, idx) => {
          if (
            (p.x - evt.x) * (p.x - evt.x) + (p.y - evt.y) * (p.y - evt.y) <
            R.value * R.value
          ) {
            if (selectedIndexes.value.indexOf(idx) < 0) {
              selectedIndexes.value = [...selectedIndexes.value, idx];
            }
            return false;
          }
          return true;
        });
        endPoint.value = { x: evt.x, y: evt.y };
      }
    },
    onEnd: evt => {
      if (!canTouch.value) {
        return;
      }
      endPoint.value = null;
      if (selectedIndexes.value.length > 0) {
        runOnJS(onEndJS)(selectedIndexes.value.join(''));
      }
    },
  });
  const animatedProps = useAnimatedProps(() => {
    let d = '';
    selectedIndexes.value.forEach(idx => {
      d += !d ? ' M' : ' L';
      d += ` ${patternPoints.value[idx].x},${patternPoints.value[idx].y}`;
    });
    if (d && endPoint.value) {
      d += ` L${endPoint.value.x},${endPoint.value.y}`;
    }
    if (!d) {
      d = 'M-1,-1';
    }
    return { d };
  });

  return (
    <PanGestureHandler onGestureEvent={panHandler}>
      <Animated.View style={styles.container} onLayout={onContainerLayout}>
        <TapGestureHandler onGestureEvent={panHandler}>
          <Animated.View style={styles.container}>
            <View style={styles.viewMessage}>
              <Animated.Text style={[msgColor, msgStyle]}>
                {props.message}
              </Animated.Text>
            </View>
            <Animated.View style={cvc} onLayout={onPatternLayout}>
              {Array(props.rowCount * props.columnCount)
                .fill(0)
                .map((_, idx) => {
                  const viewContainer = {
                    borderWidth: 2,
                    width: 2 * R.value,
                    height: 2 * R.value,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Colors.CS_GRAY,
                    borderRadius: 2 * R.value,
                    margin: props.patternMargin,
                    transform: [{ rotate: '45deg' }],
                  };
                  const viewContent = {
                    width: R.value * 0.8,
                    height: R.value * 0.8,
                    borderRadius: R.value * 0.8,
                    backgroundColor: Colors.CS_SKY_BLUE,
                  };
                  return (
                    <Animated.View key={`${idx}_${idx}`} style={viewContainer}>
                      <View style={viewContent} />
                    </Animated.View>
                  );
                })}
            </Animated.View>
            <Svg style={styles.svg} width="100%" height="100%">
              <AnimatedPath
                fill="none"
                strokeWidth={3}
                animatedProps={animatedProps}
                stroke={isError ? props.errorColor : props.activeColor}
              />
            </Svg>
          </Animated.View>
        </TapGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
}

PatternLock.defaultProps = {
  message: '',
  rowCount: 3,
  columnCount: 3,
  patternMargin: 25,
  inactiveColor: Colors.CS_DISABLE,
  activeColor: Colors.CS_SKY_BLUE,
  errorColor: Colors.CS_ERROR,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  viewMessage: {
    flex: 0.8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  svg: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
