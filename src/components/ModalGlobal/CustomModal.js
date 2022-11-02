import React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const CustomModal = ({
  children,
  isVisible,
  onClose,
  style,
  animationIn,
  animationOut,
  testID,
  avoidKeyboard,
  deviceHeight,
  modalStyle,
  ...rest
}) => {
  const _onClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal
      deviceWidth={width}
      deviceHeight={deviceHeight ? deviceHeight : height}
      avoidKeyboard={avoidKeyboard}
      statusBarTranslucent
      backdropTransitionOutTiming={0}
      onBackButtonPress={_onClose}
      onBackdropPress={_onClose}
      animationIn={animationIn || 'slideInUp'}
      animationOut={animationOut || 'slideOutDown'}
      isVisible={isVisible}
      backdropOpacity={0.3}
      style={[styles.containerTwo, modalStyle]}
      testID={testID || 'modal_component'}
      {...rest}>
      <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
    </Modal>
  );
};

export default CustomModal;
