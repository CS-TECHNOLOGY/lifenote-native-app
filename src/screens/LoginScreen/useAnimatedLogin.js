import { useState, useCallback } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useForm } from 'react-hook-form';

export default function useAnimatedLogin() {
  const lottiePosition = useSharedValue(1);
  const STATUS_BAR_HEIGHT = getStatusBarHeight();
  const { height, width } = Dimensions.get('window');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(
    !isRegistering
      ? {
          defaultValues: {
            firstName: '',
            lastName: '',
          },
        }
      : {
          defaultValues: {
            fullName: '',
            email: '',
            password: '',
            rePassword: '',
          },
        },
  );

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      lottiePosition.value,
      [0, 1],
      [-height / 1.5 - STATUS_BAR_HEIGHT, 0],
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(lottiePosition.value, [0, 1], [1000, 0]);
    return {
      opacity: withTiming(lottiePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        lottiePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });
  const loginHandler = () => {
    lottiePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };

  const registerHandler = () => {
    lottiePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };

  const onRegister = useCallback(() => {
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  }, [isRegistering]);
  const onForgotPassword = useCallback(
    () => navigation.navigate('ForgotPasswordScreen'),
    [navigation],
  );
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error) {
      console.log('_error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const onSubmit = useCallback(data => console.log(data), []);

  return {
    imageAnimatedStyle,
    buttonsAnimatedStyle,
    formAnimatedStyle,
    registerHandler,
    loginHandler,
    width,
    height,
    lottiePosition,
    isRegistering,
    onRegister,
    onForgotPassword,
    signIn,
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}
