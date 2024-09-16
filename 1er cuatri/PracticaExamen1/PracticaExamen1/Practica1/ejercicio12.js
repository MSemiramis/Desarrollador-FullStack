/* Encuentra el número más pequeño en una lista.*/
var listaDeNumero = [1, 2, 3, 4, 5];
function encontrarNumeroMasPequeno(numeros) {
    // Verificamos si la lista está vacía para manejar el caso adecuadamente
    if (numeros.length === 0) {
        throw new Error("La lista de números no puede estar vacía");
    }
    // Inicializamos el número más pequeño con el primer elemento de la lista
    var numeroMasPequeno = numeros[0];
    // Recorremos la lista empezando desde el segundo elemento
    for (var i = 1; i < numeros.length; i++) {
        // Si encontramos un número más pequeño, actualizamos numeroMasPequeno
        if (numeros[i] < numeroMasPequeno) {
            numeroMasPequeno = numeros[i];
        }
    }
    // Retornamos el número más pequeño encontrado
    return numeroMasPequeno;
}
// Ejemplo de uso
var numeroMasPequeno = encontrarNumeroMasPequeno(listaDeNumero);
console.log("El n\u00FAmero m\u00E1s peque\u00F1o es: ".concat(numeroMasPequeno));
