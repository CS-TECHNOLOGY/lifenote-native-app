import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  radius: {
    borderRadius: normalize(20),
  },
  containerTwo: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    borderTopLeftRadius: normalize(10),
    borderTopRightRadius: normalize(10),
    justifyContent: 'center',
  },
  modalContentContainer: {
    height: normalize(200),
    width: width - normalize(80),
    alignSelf: 'center',
    borderRadius: normalize(8),
    overflow: 'hidden',
    padding: normalize(10),
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: normalize(20),
  },
  modalContent: {
    flexGrow: 1,
    borderRadius: 4,
  },
  safeArea: {
    height: normalize(200),
    backgroundColor: Colors.CS_BACK_GROUND,
  },
});

export default styles;
