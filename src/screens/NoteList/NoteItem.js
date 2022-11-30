import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Colors, Images } from '../../assets';
import { normalize } from '../../configs/commons';
import { Text, Box, ImageIcon } from '../../components';

const NoteItem = ({ item, index, data, setData }) => {
  const deleteItem = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <Swipeable
      renderRightActions={() => (
        <Box style={styles.container}>
          <Box
            pressable
            style={styles.option}
            justify="center"
            align="center"
            background={Colors.CS_RED}
            onPress={deleteItem}>
            <ImageIcon
              name={Images.DELETE}
              tintColor={Colors.CS_WHITE_MODE}
              resizeMode="contain"
              style={styles.icon}
            />
          </Box>
          <Box
            pressable
            style={styles.option}
            justify="center"
            align="center"
            background={Colors.CS_BLUE}>
            <ImageIcon
              name={Images.EDIT}
              tintColor={Colors.CS_WHITE_MODE}
              resizeMode="contain"
              style={styles.icon}
            />
          </Box>
        </Box>
      )}>
      <Animated.View style={styles.item}>
        <Box
          padding={[0, 0, 5, 0]}
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.CS_DISABLE,
          }}
          flexDirection="row"
          justify="space-between"
          align="baseline">
          <Text
            margin={[5, 0, 0, 0]}
            size={15}
            fontWeight="600"
            numberOfLines={1}
            color={Colors.CS_BLACK}
            style={styles.title}>
            {item.title}
          </Text>
          <Text
            style={styles.date}
            margin={[5, 0, 0, 0]}
            size={10}
            fontWeight="300"
            numberOfLines={1}
            color={Colors.CS_GRAY}
            textAlign="right">
            30/11/2022
          </Text>
        </Box>
        <Text
          numberOfLines={2}
          margin={[5, 0, 0, 0]}
          size={12}
          fontWeight="300"
          color={Colors.CS_GRAY}>
          {item.description}
          {item.description}
          {item.description}
          {item.description}
          {item.description}
        </Text>
      </Animated.View>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
    marginTop: normalize(20),
    marginLeft: 20,
  },
  option: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  icon: {
    width: 20,
    height: 20,
  },
  item: {
    width: '100%',
    marginTop: normalize(20),
    height: 100,
    backgroundColor: Colors.CS_WHITE_MODE,
    padding: 15,
    borderRadius: 10,
  },
  title: {
    width: '80%',
  },
  date: {
    width: '20%',
  },
});
export default NoteItem;
