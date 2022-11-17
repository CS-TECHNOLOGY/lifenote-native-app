import React, { useRef, useState } from 'react';
import { Animated, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Colors, Images } from '../../assets';
import { Box, ImageIcon, NavBar, Text } from '../../components';
import TabButton from './TabButton';
import renderScreen from './renderScreen';
import { normalize } from '../../configs/commons';
import drawers from './data';

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState('Menu');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const newRadius = showMenu ? normalize(15) : 0;
  const openClose = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -25 : -25,
      duration: 300,
      useNativeDriver: true,
    }).start();

    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box justify="flex-start" padding={[15]}>
        <ImageIcon
          name={Images.ACCOUNT_CIRCLE}
          size={60}
          margin={[10, 0, 0, 0]}
        />
        <Text
          size={20}
          fontWeight="700"
          color={Colors.CS_WHITE}
          margin={[20, 0, 0, 0]}
          numberOfLines={1}>
          Đặng Quyết Huynh
        </Text>
        <ScrollView style={styles.scroll}>
          {drawers.slice(0, drawers.length - 1).map(item => (
            <TabButton
              currentTab={currentTab}
              image={item.image}
              setCurrentTab={setCurrentTab}
              title={item.title}
              key={item.key.toString()}
              closeMenu={openClose}
            />
          ))}
        </ScrollView>
        <Box>
          {drawers.slice(drawers.length - 1, drawers.length).map(item => (
            <TabButton
              currentTab={currentTab}
              image={item.image}
              setCurrentTab={setCurrentTab}
              title={item.title}
              key={item.key.toString()}
            />
          ))}
        </Box>
      </Box>
      <Animated.View
        style={[
          styles.screen,
          {
            borderRadius: newRadius,
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
          },
        ]}>
        <NavBar
          title={currentTab}
          COLOR_TITLE={Colors.CS_PURPLE}
          handleLeftBack={openClose}
          componentLeft={() => (
            <Box width={'100%'} height={'100%'} justify="center">
              <ImageIcon
                source={!showMenu ? Images.MENU : Images.ARROW_RIGHT}
                size={27}
                tintColor={Colors.CS_PURPLE}
              />
            </Box>
          )}
        />
        <ScrollView
          pointerEvents={showMenu ? 'none' : 'auto'}
          bounces={false}
          style={styles.contentContainer}>
          {renderScreen(currentTab)}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CS_DARK,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  screen: {
    flexGrow: 1,
    backgroundColor: Colors.CS_WHITE,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  scroll: {
    flexGrow: 1,
    marginTop: normalize(50),
  },
  viewContent: {
    marginTop: normalize(30),
    paddingBottom: normalize(30),
  },
  contentContainer: {
    paddingBottom: normalize(30),
  },
});
