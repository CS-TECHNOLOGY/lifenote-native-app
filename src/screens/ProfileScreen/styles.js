import { StyleSheet, Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7f8c8d',
    marginTop: 24,
  },
  btnChangeImageContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#6A3EA1',
    height: 38,
    width: 171,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    paddingBottom: getBottomSpace() + normalize(20),
    paddingHorizontal: normalize(15),
    height: '100%',
    alignItems: 'center',
  },
});
export default styles;
