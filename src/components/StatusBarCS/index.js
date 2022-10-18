import { useFocusEffect } from '@react-navigation/native';
import { Platform, StatusBar as SB } from 'react-native';
import { Colors } from '../../assets';

//barStyle: "dark-content" || 'light-content'
const StatusBarCS = ({
  barStyle = 'dark-content',
  bgColor = Colors.CS_BACK_GROUND,
}) => {
  useFocusEffect(() => {
    if (bgColor && Platform.OS === 'android') {
      SB.setBackgroundColor(bgColor);
    }
    SB.setBarStyle(barStyle);
  });
  return null;
};

export default StatusBarCS;
