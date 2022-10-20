import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
  },
  forgot: {
    textDecorationLine: 'underline',
  },
  buttonLogin: {
    color: Colors.CS_WHITE,
  },
});
export default styles;
