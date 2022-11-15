import React from 'react';
import { Image, Text, View } from 'react-native';

const RenderNote = ({ text }) => (
  <View
    style={{
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: 5,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
    <Text
      numberOfLines={1}
      style={{
        color: '#444',
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '700',
        paddingHorizontal: 5,
      }}>
      {text}palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy
      sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport
      Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral
      palsy sport Cerebral palsy sport
    </Text>
  </View>
);
const NoteList = ({ item, style }) => {
  return (
    <View
      style={[
        {
          // margin: 5,
          backgroundColor: 'white',
          borderRadius: 5,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#dedede',
          // height: 60,
          marginTop: 10,
          padding: 10,
        },
        style,
      ]}>
      <Text
        style={{
          color: '#444',
          fontSize: 16,
          textAlign: 'left',
          fontWeight: '900',
        }}>
        Cerebral
      </Text>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 40, marginVertical: 5 }}
        resizeMode="cover"
      />
      <Text numberOfLines={3} style={{ marginTop: 5 }}>
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
        <RenderNote text={item.text} />
      </Text>
      <Text
        style={{
          fontSize: 8,
          color: 'gray',
          textAlign: 'right',

          marginTop: 5,
        }}>
        12/01/2022
      </Text>
    </View>
  );
};

export default NoteList;
