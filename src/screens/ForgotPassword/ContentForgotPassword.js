import React from 'react';
import { ButtonCustomize, InputItem, Text } from '../../components';
import { isEqual } from 'react-fast-compare';
import { Colors } from '../../assets';

const ContentForgotPassword = ({ control, errors, onSendCode }) => {
  return (
    <>
      <Text
        margin={[300, 0, 0, 0]}
        size={32}
        color={'#180E25'}
        fontWeight="700">
        Forgot Password
      </Text>
      <Text margin={[15, 0, 0, 0]} size={15} color={'#827D89'} fontWeight="400">
        Insert your email address to receive a code for creating a new password
      </Text>
      <InputItem
        control={control}
        name="email"
        errors={errors.fullName}
        placeholder="cs_tech@gmail.com"
        label="Email address"
        margin={[50, 0, 60, 0]}
      />
      <ButtonCustomize
        label={'Send Code'}
        background={Colors.CS_PURPLE}
        styleLabel={{ color: Colors.CS_WHITE }}
        tintColorRight={Colors.CS_BLACK}
        onPress={onSendCode}
        rightItem={false}
      />
    </>
  );
};

export default React.memo(ContentForgotPassword, isEqual);
