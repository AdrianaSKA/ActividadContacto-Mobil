

export const Ejercicio2 = () => {

    const arreglo = [5, 8, 2, 3];
    
    const sumarArreglo = (arreglo: number[]): number => 
        arreglo.reduce((acumulador, valor)=> acumulador + valor, 0);

    return (
        <div>
            <h3>Ejercicio 2</h3>
            <p>La suma de los elementos del arreglo es: {sumarArreglo(arreglo)} </p>
        </div>
    )
}
