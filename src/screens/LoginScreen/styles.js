import { StyleSheet, Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  forgot: {
    textDecorationLine: 'underline',
  },
  buttonLogin: {
    color: Colors.CS_WHITE,
  },
  button: {
    backgroundColor: Colors.CS_PURPLE,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },

  bottomContainer: {
    justifyContent: 'center',
    height: height / 2,
    backgroundColor: 'transparent',
    opacity: 1,
  },
  formInputContainer: {
    ...StyleSheet.absoluteFill,
    zIndex: -2,
  },
  content: {
    backgroundColor: 'white',
    paddingBottom: getBottomSpace() + normalize(20),
    paddingHorizontal: normalize(15),
    paddingTop: 150,
  },
});
export default styles;
