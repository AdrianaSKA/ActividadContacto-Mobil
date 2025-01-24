
export const Ejercicio1 = () => {

    const calcularArea = (lado: number): number => {
      return lado * lado;
    }

    return (
        <div>
            <h3>Ejercicio 1</h3>
            <p>El area del cuadrado es: {calcularArea(7)} </p>
        </div>
    )
}