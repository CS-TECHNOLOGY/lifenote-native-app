import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';
import { getBottomSpace } from '../../hooks/useIPhone';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
    paddingBottom: getBottomSpace() + normalize(20),
  },
  forgot: {
    textDecorationLine: 'underline',
  },
  buttonLogin: {
    color: Colors.CS_WHITE,
  },
});
export default styles;
