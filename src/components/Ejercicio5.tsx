import { useState } from "react"


export const Ejercicio5 = () => {
    
    const [valor, setValor] = useState<number>(0);

    const contador = (numero: number) : void => {
        setValor(valor + numero);
    }



    return (
        <div>
            <h3>Ejercicio 5 </h3>
            <p>Acumulador: </p>
            <div className="mx-5"> {valor} </div>            
            <button 
                className="btn btn-primaty"
                onClick={() => contador(5)}>+5</button>
            &nbsp;
            <button 
                className="btn btn-primaty"
                onClick={() => contador(-5)}>-5</button>
        </div>
    )
}
