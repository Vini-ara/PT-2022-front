import Button from './Buttons/Button';
import { Input } from './Inputs';
import { listaPerguntas } from './perguntas';

export default function Formulario() {
  // border-blue-form flex flex-col p-4 border-[1rem] rounded border-solid w-1/2
  return (
    <div className="border-[1rem] border-blue-form solid overflow-hidden w-1/2 p-2">
      <div className="text-center bg-blue-form">MEU PDI</div>
      <form className="p-6">
        {listaPerguntas.map((pergunta, index) => (
          <Input styles="border-2 border-solid" key={index}>
            {pergunta.pergunta}
          </Input>
        ))}
      </form>
      <div className="flex justify-end">
        <Button styles="text-base	h-1/2 w-1/6 bg-primary text-white">
          {' '}
          Salvar
        </Button>
      </div>
    </div>
  );
}
