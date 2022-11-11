import React, { useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { Colors, Images } from '../../assets';
import { ButtonCustomize, ImageIcon, Text } from '../../components';
import { PatternLock } from '../../components/PatternLock';
import { normalize } from '../../configs/commons';

const screen = Dimensions.get('screen');
const screenHeight = Math.max(screen.width, screen.height);

export default function SecurityScreen() {
  const [msg, setMsg] = useState();
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');
  const [modalY] = useState(new Animated.Value(screenHeight));

  const ms = StyleSheet.flatten([
    { transform: [{ translateY: modalY }] },
    styles.modal,
  ]);
  const modal = {
    open: () =>
      Animated.timing(modalY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(),
    close: () =>
      Animated.timing(modalY, {
        toValue: screenHeight,
        duration: 250,
        useNativeDriver: true,
      }).start(),
  };
  const onSet = () => {
    setCode('');
    setStatus('setting');
    setMsg('Set pattern lock');
    modal.open();
  };
  const onVerify = () => {
    setStatus('verifying');
    setMsg('Draw An Unlock Pattern To Verify');
    modal.open();
  };
  const onCheck = res => {
    if (status === 'setting') {
      if (!code) {
        setCode(res);
        setMsg('Repeat Setting Pattern');
        return true;
      } else if (code === res) {
        setMsg('Success');
        setTimeout(modal.close, 1000);
        return true;
      } else {
        setMsg('Repeat Error,Set Again');
        return false;
      }
    } else {
      if (code === res) {
        setMsg('Success');
        setTimeout(modal.close, 1000);
        return true;
      } else {
        setMsg('Input Error,Please Try Again');
        return false;
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text textAlign="center" color={Colors.CS_GRAY} margin={[0, 0, 10, 0]}>
        The Pattern Lock feature aims at protecting your privacy.
      </Text>
      <Button onPress={onSet} title="Set pattern lock" />
      <Button onPress={onVerify} title="Verify" />
      <Button onPress={onVerify} title="Remove pattern" />
      <Button onPress={onVerify} title="Forgot pattern" />
      <Animated.View style={ms}>
        <SafeAreaView style={styles.sfv}>
          <ImageIcon
            name={Images.CHEVERON_LEFT_NEW}
            tintColor={Colors.CS_BLUE}
            size={30}
            onPress={modal.close}
            margin={[10]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            pressable
          />
          <PatternLock
            message={msg}
            onCheck={onCheck}
            inactiveColor={Colors.CS_DISABLE}
            activeColor={Colors.CS_SKY_BLUE}
            errorColor={Colors.CS_ERROR}
          />
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}

const Button = ({ title, onPress }) => {
  return (
    <ButtonCustomize
      margin={[10, 0]}
      label={title}
      background={Colors.CS_PURPLE}
      styleLabel={{ color: Colors.CS_WHITE }}
      LeftItem={false}
      onPress={onPress}
      rightItem={false}
      style={{ width: '60%' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: normalize(15),
    backgroundColor: Colors.CS_BACK_GROUND,
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    backgroundColor: Colors.CS_DARK,
    width: '80%',
    height: '60%',
    borderRadius: normalize(10),
  },
  sfv: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: Platform.select({ android: 30, web: 20, ios: 30 }),
  },
  btnc: {
    marginLeft: 16,
    fontSize: 18,
    color: '#007AFF',
  },
});
