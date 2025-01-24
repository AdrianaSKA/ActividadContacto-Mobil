

export const Ejercicio4 = () => {

    interface Alumno {
        nombre: string,
        edad: number,
        calificacion: number,
    }
    
    const alumnos: Alumno[] = [
        {
            nombre: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedio = (alumnos: Alumno[]): number => {
        const calificTotal = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        return calificTotal / alumnos.length;
    };

    return (
        <div>
            <h3>Ejercicio 4</h3>
            <h5>Lista de alumnos:</h5>
            <code>
                <pre>
                    {JSON.stringify(alumnos, null, 2)}
                </pre>
            </code>

            <p>El promedio de las calificaciones de todos los alumnos es: {calcularPromedio(alumnos)} </p>
        </div>
    )
}
