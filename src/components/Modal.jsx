import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalComponente({ children, isOpen }) {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
        {children}
      </Modal>
    </div>
  );
}
