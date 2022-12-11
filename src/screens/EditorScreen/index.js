import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { RichEditor } from 'react-native-pell-rich-editor';
import { Colors, Images } from '../../assets';
import { BottomSheet, Box, ImageIcon, NavBar } from '../../components';
import styles from './styles';

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

  return (
    <Box width="100%" height="100%" background={Colors.TRANSPARENT}>
      <NavBar
        title={'NOTE'}
        COLOR_TITLE={Colors.CS_PURPLE}
        // handleLeftBack={openClose}

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
        <RichEditor
          ref={richText}
          editorStyle={{ backgroundColor: Colors.TRANSPARENT }}
          onChange={richTextHandle}
          placeholder="Untitled :)"
          androidHardwareAccelerationDisabled={true}
          style={styles.richTextEditorStyle}
        />
        {/* <RichToolbar
          editor={richText}
          selectedIconTint="#873c1e"
          iconTint="#312921"
          actions={[
            actions.insertImage,
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
            actions.setStrikethrough,
            actions.setUnderline,
          ]}
          style={styles.richTextToolbarStyle}
        /> */}
      </Box>
      <BottomSheet ref={ref}>
        <View />
      </BottomSheet>
    </Box>
  );
};

export default EditorScreen;
