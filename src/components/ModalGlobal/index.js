import React, {
  useImperativeHandle,
  useState,
  useCallback,
  forwardRef,
} from 'react';
import CustomModal from './CustomModal';
import styles from './styles';
import contentModal from './contentModal';

const GlobalModal = forwardRef(({}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  useImperativeHandle(ref, () => ({
    show: async ({
      type,
      title,
      content,
      textLeft,
      textRight,
      closeAll,
      onDone,
    }) => {
      setIsVisible(true);
      setMessages([
        {
          key: 'global_modal',
          type,
          onDone,
          title,
          textLeft,
          textRight,
          closeAll,
          content,
        },
      ]);
    },
    close: () => {
      setIsVisible(false);
    },
  }));

  const dismiss = useCallback(() => {
    setIsVisible(false);
    setMessages([]);
  }, []);

  return messages?.map(
    ({
      type,
      onDone,
      title,
      content,
      textLeft,
      textRight,
      closeAll = false,
    }) => (
      <CustomModal
        key={item => item.global_modal}
        onClose={closeAll ? dismiss : null}
        modalStyle={styles.modal}
        style={styles.modalContentContainer}
        isVisible={isVisible}>
        {contentModal({
          type: type,
          onDone: () => {
            onDone && onDone();
            setIsVisible(false);
            setMessages([]);
          },
          onClose: dismiss,
          title: title,
          textLeft: textLeft,
          textRight: textRight,
          content: content,
        })}
      </CustomModal>
    ),
  );
});

export default GlobalModal;
