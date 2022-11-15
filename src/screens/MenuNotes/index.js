import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import data from './data';
import { Box, Text } from '../../components';
import { normalize } from '../../configs/commons';
import NoteList from './NoteList';
import NoteCheckBox from './NoteCheckBox';
import NoteDefault from './NoteDefault';

export default function MenuNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(value => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  };

  const renderNote = ({ item, i }) => {
    const value = i % 3;
    const style = i % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 };
    switch (value) {
      case 1:
        return <NoteList item={item} style={style} />;
      case 2:
        return <NoteCheckBox item={item} style={style} />;
      default:
        return <NoteDefault item={item} style={style} />;
    }
  };
  return (
    <Box style={styles.contentContainer}>
      <Box pressable onPress={toggleOpen} activeOpacity={0.6}>
        <Text>{'Say hi'}</Text>
      </Box>
      <Box style={[styles.dropDown, isOpen ? styles.heightDown : undefined]}>
        {/* <Content /> */}
        {/* content dropdown*/}
      </Box>
      <MasonryList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => renderNote({ item: item, i: i })}
        keyExtractor={(item, i) => `${item.text}_${i}`}
        // refreshing={true}
        // onRefresh={}
        onEndReachedThreshold={0.1}
        // onEndReached={}
      />
    </Box>
  );
}
const styles = StyleSheet.create({
  dropDown: {
    overflow: 'hidden',
  },
  heightDown: {
    height: 0,
  },
  contentContainer: {
    marginHorizontal: normalize(15),
    display: 'flex',
  },
});
