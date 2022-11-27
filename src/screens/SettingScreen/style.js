import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
  basicInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: normalize(64),
    height: normalize(64),
  },
  emailIcon: {
    width: normalize(11),
    height: normalize(9),
  },
  boxEmail: {
    alignItems: 'center',
  },
  btnEditProfile: {
    borderColor: colors.CS_PURPLE,
    borderWidth: 1,
  },
  line: {
    marginTop: normalize(24),
    marginBottom: normalize(24),
    width: '100%',
    borderBottomColor: colors.CS_SOFT_PEACH,
    borderBottomWidth: 1,
  },
});
export default styles;
