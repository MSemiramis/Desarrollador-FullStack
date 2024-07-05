/* Encuentra el número de veces que aparece un elemento en una lista. */

/* ANY me toma cualquier valor sea numero, string
function contarApariciones(lista: any[], elemento: any): number {
    // Inicializamos un contador para las apariciones del elemento
    let contador = 0;

    // Recorremos la lista con un bucle for
    for (let i = 0; i < lista.length; i++) {
        // Comprobamos si el elemento actual es igual al elemento objetivo
        if (lista[i] === elemento) {
            // Incrementamos el contador si hay una coincidencia
            contador++;
        }
    }

    // Retornamos el contador de apariciones
    return contador;
}

// Ejemplo de uso
const listaDeElementos = [1, 2, 3, 4, 5, 2, 2, 7, 2, 10];
const elementoBuscado = 2;
const numeroDeApariciones = contarApariciones(listaDeElementos, elementoBuscado);
console.log(`El número de veces que aparece el elemento ${elementoBuscado} es: ${numeroDeApariciones}`); */

/*Lista de numeros */

function contarApariciones(lista: number[], elemento: number): number {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso
const listaDeNumeros = [1, 2, 3, 4, 5, 2, 2, 7, 2, 10];
const numeroBuscado = 2;
const numeroDeApariciones = contarApariciones(listaDeNumeros, numeroBuscado);
console.log(`El número de veces que aparece el número ${numeroBuscado} es: ${numeroDeApariciones}`);

/*Lista de texto
function contarApariciones(lista: string[], elemento: string): number {
    let contador = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso
const listaDeStrings = ["manzana", "banana", "manzana", "naranja", "manzana", "banana"];
const stringBuscado = "manzana";
const numeroDeApariciones = contarApariciones(listaDeStrings, stringBuscado);
console.log(`El número de veces que aparece la palabra "${stringBuscado}" es: ${numeroDeApariciones}`);
*/

