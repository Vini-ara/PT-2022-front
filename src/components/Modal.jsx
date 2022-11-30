import {useState} from 'react';
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



export default function Modalcomponente({children,...props}){

const [modalIsOpen, setIsOpen] = useState(false);

function  openModal() { 
  setIsOpen(true);
}

function closeModal() {
   setIsOpen(false);
}
 
 return (
    <div>

       < children onClick={openModal} > OpenModal </ children> 
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"

       >
        

           <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button> 
         </form> 
      </Modal>
      
    </div>
  );
 }