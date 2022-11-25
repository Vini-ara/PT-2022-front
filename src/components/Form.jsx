import Button from './Buttons/Button';
import { Input } from './Inputs';
import { listaPerguntas } from './perguntas';

export default function Formulario() {
  return (
    <div className="border-[1rem] border-blue-form solid overflow-hidden w-1/2 p-0 rounded-xl">
      <div className="flex justify-center text-gray-50 text-[2rem] bg-blue-form w-auto p-1">
        Meu plano de desenvolvimento individual
      </div>
      <form className="p-8">
        {listaPerguntas.map((pergunta, index) => (
          <Input styles="border-2 border-solid" key={index}>
            {pergunta.pergunta}
          </Input>
        ))}
        <div className="flex justify-end">
          <Button styles="h-1/2 w-32 bg-primary text-white text-[1.3rem]">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
}
