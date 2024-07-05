/* Encuentra el número más pequeño en una lista.*/ 

let listaDeNumero = [1, 2, 3, 4, 5];

function encontrarNumeroMasPequeno(numeros: number[]): number {
    // Verificamos si la lista está vacía para manejar el caso adecuadamente
    if (numeros.length === 0) {
        throw new Error("La lista de números no puede estar vacía");
    }

    // Inicializamos el número más pequeño con el primer elemento de la lista
    let numeroMasPequeno = numeros[0];

    // Recorremos la lista empezando desde el segundo elemento
    for (let i = 1; i < numeros.length; i++) {
        // Si encontramos un número más pequeño, actualizamos numeroMasPequeno
        if (numeros[i] < numeroMasPequeno) {
            numeroMasPequeno = numeros[i];
        }
    }

    // Retornamos el número más pequeño encontrado
    return numeroMasPequeno;
}

// Ejemplo de uso

let numeroMasPequeno = encontrarNumeroMasPequeno(listaDeNumero);
console.log(`El número más pequeño es: ${numeroMasPequeno}`);
