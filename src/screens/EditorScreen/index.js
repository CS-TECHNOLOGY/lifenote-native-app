import React, { useCallback, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { Colors, Images } from '../../assets';
import { BottomSheet, Box, ImageIcon, NavBar, Text } from '../../components';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import HotKey from '../../components/HotKey';

const HEIGHT_IMAGE = 180;
const HotkeyAnimated = Animated.createAnimatedComponent(HotKey);

const EditorScreen = () => {
  const richText = useRef();
  const ref = useRef(null);
  const [descHTML, setDescHTML] = useState('');

  const richTextHandle = descriptionText => {
    if (descriptionText) {
      setDescHTML(descriptionText);
    } else {
      setDescHTML('');
    }
  };

  const onClick = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);
  const openGalleryClickProfile = () => {
    ImagePicker.openPicker({
      width: HEIGHT_IMAGE,
      height: HEIGHT_IMAGE,
      cropping: true,
    })
      .then(image => {
        onPressAddImage(image);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onPressAddImage = async image => {
    await ImgToBase64.getBase64String(image.path)
      .then(base64String => {
        const str = `data:${image.mime};base64,${base64String}`;
        richText.current?.insertImage(str);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Box width="100%" height="100%" background={Colors.CS_WHITE}>
      <NavBar
        title={'NOTE'}
        COLOR_TITLE={Colors.CS_PURPLE}
        componentLeft={() => (
          <Box width={'100%'} height={'100%'} justify="center">
            <ImageIcon
              source={Images.GO_BACK}
              size={14}
              tintColor={Colors.CS_PURPLE}
            />
          </Box>
        )}
      />
      <Box width="100%" height="100%" background={Colors.TRANSPARENT}>
        <TextInput
          style={styles.title}
          placeholder="New Title"
          numberOfLines={1}
        />
        <Text
          size={14}
          color={Colors.CS_GRAY}
          margin={[10, 15, 20, 15]}
          numberOfLines={10}>
          Octobor 13, 22:00 Tue | 300 words
        </Text>
        <ScrollView scrollEnabled={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}>
            <RichEditor
              scrollEnabled={true}
              ref={richText}
              editorStyle={{ backgroundColor: Colors.CS_WHITE }}
              onChange={richTextHandle}
              placeholder="Description"
              androidHardwareAccelerationDisabled={true}
              style={styles.richTextEditorStyle}
              usecontainer={true}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </Box>
      <BottomSheet ref={ref}>
        <RichToolbar
          editor={richText}
          selectedIconTint={Colors.CSS_BROWN}
          iconTint={Colors.CS_BLACK}
          actions={[
            Platform.OS === 'android' && actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
          ]}
          onPressAddImage={openGalleryClickProfile}
        />
      </BottomSheet>
      <HotkeyAnimated
        entering={FadeIn}
        exiting={FadeOut}
        data={{
          src: Images.PENCIL,
        }}
        onClick={onClick}
      />
    </Box>
  );
};

export default EditorScreen;
