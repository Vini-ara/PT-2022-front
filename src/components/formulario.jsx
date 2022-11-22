import Button from "./button"
import Label from "./label"
import {listaPerguntas} from './perguntas'

export default function Formulario () {
    return (
        <div className="border-cyan-600 flex flex-col space-x-2 container mx-auto border-t-8 border-x-8 border-b-8 rounded border-solid "> 
        <div className="bg-cyan-600 w-94 h-6 outline-offset-8 flex flex-col justify-center items-center text-sm text-white " > Meu plano de desenvolvimento individual
        </div>
        <form className="pt-2" >
        {listaPerguntas.map((pergunta) => (
            <Label styles = "border-inherit border-2 border-solid ">{pergunta.pergunta}</Label>
        ))}
        </form>
        <div>
        <Button styles="bg-facebook text-white border-facebook"> Salvar
        </Button>
        </div>
        </div>
         )
} 