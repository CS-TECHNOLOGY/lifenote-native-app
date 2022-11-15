import React from 'react';
import { Text, View } from 'react-native';

const NoteDefault = ({ style, item }) => {
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
      <Text
        numberOfLines={Math.floor(Math.random() * 5) + 1}
        style={{
          color: '#444',
          fontSize: 14,
          textAlign: 'left',
          fontWeight: '700',
          marginVertical: 5,
        }}>
        {item.text}palsy sport Cerebral palsy sport Cerebral palsy sport
        Cerebral palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral
        palsy sport Cerebral palsy sport Cerebral palsy sport Cerebral palsy
        sport Cerebral palsy sport Cerebral palsy sport
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

export default NoteDefault;
