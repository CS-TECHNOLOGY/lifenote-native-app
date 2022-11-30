import React, { useState } from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { Colors } from '../../assets';
import { Box, NavBar } from '../../components';
import { normalize } from '../../configs/commons';
import { dataJson } from './data';
import NoteItem from './NoteItem';
import { StyleSheet } from 'react-native';

const NoteList = () => {
  const [data, setData] = useState(dataJson);

  return (
    <Box width="100%" height="100%" background={Colors.CS_BACK_GROUND}>
      <NavBar
        label=""
        COLOR_TITLE={Colors.CS_PURPLE}
        title="Note List"
        border={true}
      />
      <Animated.FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={({ item, index }) => (
          <NoteItem item={item} index={index} data={data} setData={setData} />
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: normalize(15),
    paddingBottom: getBottomSpace() + normalize(20),
  },
});
export default NoteList;
