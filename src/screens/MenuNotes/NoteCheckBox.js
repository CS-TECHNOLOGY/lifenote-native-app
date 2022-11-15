import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { Images } from '../../assets';
import { ImageIcon } from '../../components';
const RenderCheckBox = ({ text }) => (
  <View
    style={{
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: 12,
        height: 12,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
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
const NoteCheckBox = ({ style, item }) => {
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
        },
        style,
      ]}>
      <View
        style={{
          padding: 10,
          opacity: 0.5,
        }}>
        <Text
          style={{
            color: '#444',
            fontSize: 16,
            textAlign: 'left',
            fontWeight: '900',
          }}>
          Cerebral
        </Text>
        <Text numberOfLines={3} style={{ marginTop: 5 }}>
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
          <RenderCheckBox text={item.text} />
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
      <TouchableNativeFeedback onPress={() => null}>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <ImageIcon size={30} source={Images.GOOGLE} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default NoteCheckBox;
