import Button from "./button"
import Label from "./label"


export default function Formulario () {
    return (
        <div id ="container Formulario"> 
        <div className="bg-cyan-800 w-96 h-10" >
        <h1 className =" box-content flex flex-col justify-center items-center text-xs px-4 border-cyan-700  border-4 border-solid" > Meu plano de desenvolvimento individual </h1>
        </div>
        <form  className="border-cyan-700 container mx-auto border-t-8 border-x-4 border-b-4 rounded-r border-solid " >
        <p  className = "text-xs px-4 mt-2"> O que eu espero da CJR?</p>
        <div id ="1"> <Label /> </div> 
        <p  className = "text-xs px-4"> Quem sou eu?</p>
        <div id="2" > <Label /> </div>
        <p  className = "text-xs px-4"> Quais são meus pontos fortes?</p>
        <div id ="3"> <Label /> </div>
        <p  className = "text-xs px-4"> Quais são meus pontos a melhorar?</p>
        <div id ="4"> <Label /> </div>
        <p  className = "text-xs px-4"> Quem eu quero ser?</p>
        <div > <Label /> </div>
        <p  className = "text-xs px-4"> Qual o maior desafio que eu poderia fazer, sendo eu mesmo?</p>
        <div id ="5"> <Label /> </div>
        <p  className = "text-xs px-4"> O que falta para chegar onde quero ?</p>
        <div id ="6"> <Label /> </div>
        <p  className = "text-xs px-4"> Qual sua comida favorita ?</p>
        <div id="7"> <Label /> </div>
        <p  className = "text-xs px-4"> Gosta de pagode ?</p>
        <div id="8"> <Label /> </div>
        <Button styles="bg-primary text-white border-primary"> Salvar
        </Button>
        </form>
        </div>
    )
} 