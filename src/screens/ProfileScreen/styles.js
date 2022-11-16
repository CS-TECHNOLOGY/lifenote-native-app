import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
  avatar: {
    width: normalize(90),
    height: normalize(90),
    borderRadius: normalize(45),
    backgroundColor: Colors.TRANSPARENT,
    marginTop: normalize(24),
    borderWidth: 1,
    borderColor: Colors.CS_PURPLE,
  },
  btnChangeImageContainer: {
    marginTop: normalize(16),
    borderWidth: 1,
    borderColor: Colors.CS_PURPLE,
    height: normalize(38),
    width: normalize(170),
    borderRadius: normalize(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingBottom: getBottomSpace() + normalize(20),
    paddingHorizontal: normalize(15),
    alignItems: 'center',
  },
  saveButton: {
    position: 'absolute',
    bottom: normalize(20) + getBottomSpace(),
  },
});
export default styles;
