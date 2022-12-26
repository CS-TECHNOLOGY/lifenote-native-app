import { StyleSheet } from 'react-native';
import { Colors } from '../../assets';
import { normalize } from '../../configs/commons';

const styles = StyleSheet.create({
  richTextEditorStyle: {
    width: '100%',
    fontSize: normalize(20),
    minHeight: 200,
    maxHeight: 500,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderColor: Colors.CS_PURPLE,
  },
  content: {
    flex: 1,
    paddingHorizontal: normalize(5),
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.CS_PURPLE,
    backgroundColor: Colors.TRANSPARENT,
    padding: normalize(15),
    fontSize: normalize(20),
    fontWeight: '500',
  },
});
export default styles;
