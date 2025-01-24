
export const Ejercicio3 = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    
    const dividir = (arreglo: number[]) : number[] => 
        arreglo.map(valor => valor / 5);


    
    return (
        <div>
            <h3>Ejercicio 3</h3>
            <p>EL arreglo dividido por 5 es: {dividir(arreglo).join(', ')} </p>
        </div>
    )
}
