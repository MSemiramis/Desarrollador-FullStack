/*Calcula la suma de dos arreglos elemento por elemento. */

let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [10, 20, 30, 40, 50];

function sumarArreglos(arr1: number[], arr2: number[]): number[] {
    // Verificamos si los arreglos tienen la misma longitud
    if (arr1.length !== arr2.length) {
        throw new Error("Los arreglos deben tener la misma longitud");
    }

    // Creamos un nuevo arreglo para almacenar los resultados, con la misma longitud que los arreglos de entrada
    const resultado: number[] = new Array(arr1.length);

    // Recorremos ambos arreglos con un bucle for
    for (let i = 0; i < arr1.length; i++) {
        // Sumamos los elementos correspondientes y los asignamos al arreglo resultado
        resultado[i] = arr1[i] + arr2[i];
    }

    // Retornamos el nuevo arreglo con las sumas
    return resultado;
}
// Ejemplo de uso

let sumaArreglos = sumarArreglos(arreglo1, arreglo2);

console.log(`La suma de los arreglos es: ${sumaArreglos}`);
