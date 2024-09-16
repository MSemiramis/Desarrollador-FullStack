/* Encuentra el número de elementos pares en una lista.*/

function contarElementosPares(numeros: number[]): number {
    // Inicializamos un contador para los números pares
    let contadorPares = 0;

    // Recorremos la lista con un bucle for
    for (let i = 0; i < numeros.length; i++) {
        // Comprobamos si el número es par
        if (numeros[i] % 2 === 0) {
            // Incrementamos el contador si el número es par
            contadorPares++;
        }
    }

    // Retornamos el contador de números pares
    return contadorPares;
}

// Ejemplo de uso
let listaDeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroDePares = contarElementosPares(listaDeNum);
console.log(`El número de elementos pares es: ${numeroDePares}`);
