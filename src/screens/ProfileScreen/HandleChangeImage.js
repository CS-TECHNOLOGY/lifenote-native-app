import React from 'react';
import { Colors } from '../../assets';
import { Box, InputItem, Text } from '../../components';
import styles from './styles';

const HandleChangeImage = ({ changeAvatar, control, errors }) => {
  return (
    <>
      <Box
        pressable
        background={Colors.CS_WHITE}
        style={styles.btnChangeImageContainer}
        shadowDepth={1}
        onPress={changeAvatar}>
        <Text color={Colors.CS_CHANGE_IMAGE} fontWeight={'500'} size={16}>
          Change Image
        </Text>
      </Box>
      <Box width="100%" height={'100%'}>
        <InputItem
          control={control}
          name="name"
          errors={errors.name}
          label="Full Name"
          margin={[20, 0, 0, 0]}
          placeholder="name"
        />
        <InputItem
          control={control}
          name="email"
          errors={errors.email}
          label="Email Address"
          margin={[20, 0, 0, 0]}
          placeholder="email"
        />
        <Text
          margin={[15, 0, 0, 0]}
          size={15}
          color={Colors.CS_GRAY}
          fontWeight="400">
          Changing email address information means you need to re-login to the
          apps.
        </Text>
      </Box>
    </>
  );
};

export default React.memo(HandleChangeImage);
