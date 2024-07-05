/* Encuentra el número de elementos pares en una lista.*/
function contarElementosPares(numeros) {
    // Inicializamos un contador para los números pares
    var contadorPares = 0;
    // Recorremos la lista con un bucle for
    for (var i = 0; i < numeros.length; i++) {
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
var listaDeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numeroDePares = contarElementosPares(listaDeNum);
console.log("El n\u00FAmero de elementos pares es: ".concat(numeroDePares));
