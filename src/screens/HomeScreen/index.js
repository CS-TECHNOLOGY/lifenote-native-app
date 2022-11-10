import React, { useRef, useState } from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Colors, Images } from '../../assets';
import { Box, ImageIcon, Text } from '../../components';
import TabButton from './TabButton';
import renderScreen from './renderScreen';
import { normalize } from '../../configs/commons';

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const newRadius = showMenu ? normalize(15) : 0;
  const drawers = [
    {
      title: 'Home',
      key: 'home_key',
      image: Images.ATTACH_EMAIL,
    },
    {
      title: 'Profile',
      key: 'profile_key',
      image: Images.ACCOUNT_CIRCLE,
    },
    {
      title: 'Security',
      key: 'security_key',
      image: Images.SECURITY,
    },
    {
      title: 'Noted',
      key: 'noted_key',
      image: Images.TEXT_SNIPPET,
    },
    {
      title: 'Notification',
      key: 'notification_key',
      image: Images.NOTIFICATIONS_ACTIVE,
    },
    {
      title: 'LogOut',
      key: 'logout_key',
      image: Images.LOGOUT,
    },
  ];
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
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <Box pressable onPress={openClose}>
            <ImageIcon
              source={showMenu ? Images.ARROW_RIGHT : Images.GO_BACK}
              size={20}
              tintColor={Colors.CS_BLACK}
              margin={[40, 0, 0, 0]}
            />
          </Box>
          <Text size={30} fontWeight="700" padding={[30, 0, 0, 0]}>
            {currentTab}
          </Text>
          <View pointerEvents={showMenu ? 'none' : 'auto'}>
            <ScrollView
              bounces={false}
              contentContainerStyle={{ paddingBottom: normalize(100) }}>
              {renderScreen(currentTab)}
            </ScrollView>
          </View>
        </Animated.View>
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
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(20),
  },
  scroll: {
    flexGrow: 1,
    marginTop: normalize(50),
  },
});
