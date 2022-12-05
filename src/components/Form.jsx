import { Input } from './Inputs';
import { api } from '../services/api/api';
import { useEffect, useState } from 'react';
import Button from './Buttons/Button';
import ModalComponente from './Modal';

export default function Formulario() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdi, setPdi] = useState([]);
  useEffect(() => {
    api.get('/question').then((response) => {
      const { data } = response;
      setPdi(data);
    });
  }, []);

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="border-[1rem] border-blue-form solid overflow-hidden w-1/2 p-0 rounded-xl m-auto">
      <div className="flex justify-center text-gray-50 text-[2rem] bg-blue-form w-auto p-1">
        Meu plano de desenvolvimento individual
      </div>
      <form className="p-8">
        {pdi?.map((pergunta) => (
          <Input styles="border-2 border-solid" key={pergunta.id}>
            {pergunta.description}
          </Input>
        ))}
        <div className="flex justify-end">
          <Button
            onClick={openModal}
            styles="h-1/2 w-32 bg-blue-header text-white text-[1.3rem]"
          >
            Salvar
          </Button>
        </div>
      </form>
      <ModalComponente isOpen={modalIsOpen}>
        <h1>OLA!</h1>
        <Button
          onClick={closeModal}
          styles="h-1/2 w-32 bg-blue-header text-white text-[1.3rem]"
        >
          Fechar
        </Button>
      </ModalComponente>
    </div>
  );
}
