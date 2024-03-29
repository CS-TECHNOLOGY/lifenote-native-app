import React from 'react';
import { Platform } from 'react-native';
import { Colors, Images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Box from '../Box';
import ImageIcon from '../ImageIcon';
import Text from '../Text';
import { getDefaultHeaderHeight } from '../../configs/commons';
import { getStatusBarHeight } from '../../hooks/useIPhone';
const isEqual = require('react-fast-compare');

const COLOR = Colors.CS_PURPLE;
const COLOR_TITLE_DEFAULT = Colors.CS_DARK_RED;
const hitSlop = { top: 15, left: 15, bottom: 15, right: 15 };
const NavBar = React.memo(
  ({
    componentRight,
    leftCustomize,
    componentLeft,
    componentCenter,
    title,
    handleLeftBack,
    leftIcon = true,
    label = 'Back',
    border = true,
    COLOR_TITLE = COLOR_TITLE_DEFAULT,
  }) => {
    const navigation = useNavigation();
    const goBack = () => {
      navigation.goBack();
    };
    return (
      <Box
        width={'100%'}
        height={getDefaultHeaderHeight()}
        align="center"
        flexDirection="row"
        background={Colors.TRANSPARENT}
        style={[border && styles.viewHeight]}
        margin={[Platform.OS === 'ios' ? getStatusBarHeight() : 0, 0, 0, 0]}>
        <Box
          style={
            !title && label
              ? styles.widthHorizontalFull
              : styles.widthHorizontal
          }
          padding={[0, 15, 0, 0]}
          justify="flex-start"
          flexDirection="row"
          align="center"
          height={'100%'}
          pressable
          onPress={handleLeftBack ? handleLeftBack : goBack}
          hitSlop={hitSlop}>
          {componentLeft ? (
            componentLeft()
          ) : (
            <Box flexDirection="row" align="center">
              {leftIcon && (
                <>
                  <ImageIcon
                    name={leftCustomize ? leftCustomize : Images.GO_BACK}
                    size={12}
                    tintColor={COLOR}
                    pressable
                    margin={[0, 0, 0, 5]}
                    onPress={handleLeftBack ? handleLeftBack : goBack}
                  />
                  <Text
                    color={COLOR}
                    style={styles.sizeTitle}
                    textAlign="center">
                    {label}
                  </Text>
                </>
              )}
            </Box>
          )}
        </Box>
        {title ? (
          <Box
            style={styles.widthCenter}
            justify="center"
            align="center"
            height={'100%'}>
            {componentCenter ? (
              componentLeft()
            ) : (
              <Text
                color={COLOR_TITLE}
                style={styles.sizeTitle}
                textAlign="center">
                {title}
              </Text>
            )}
          </Box>
        ) : null}

        <Box
          style={styles.widthHorizontal}
          flexDirection="row"
          justify="flex-end"
          align="center"
          height={'100%'}>
          {componentRight && componentRight()}
        </Box>
      </Box>
    );
  },
  isEqual,
);

export default NavBar;
