import React from 'react';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import DefaultModal from './DefaultModal';

const contentModal = ({
  type,
  onDone,
  onClose,
  title,
  content,
  textLeft,
  textRight,
}) => {
  switch (type) {
    case 'success':
      // eslint-disable-next-line react/react-in-jsx-scope
      return <SuccessModal onPress={onClose} />;
    case 'error':
      // eslint-disable-next-line react/react-in-jsx-scope
      return <ErrorModal onPress={onClose} />;
    default:
      return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <DefaultModal
          onPress={onDone}
          onClose={onClose}
          title={title}
          content={content}
          textLeft={textLeft}
          textRight={textRight}
        />
      );
  }
};
export default contentModal;
