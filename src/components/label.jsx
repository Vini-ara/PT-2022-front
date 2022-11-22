  

export default function Label({children, styles, ...props}){
    return(
     <div className="my-2 flex flex-col"> 
     <label className="text-xs my-1"> {children} </label>
     <input className= {`${styles} w-60 font-sans text-xs ` }  type="text"  name="name"  placeholder=" Digite sua resposta " {...props} /> 
     </div>
    )
   }