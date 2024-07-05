/* Encuentra el número más grande en una lista*/
var listDeNumeros = [1, 2, 3, 4, 5];
function encontrarNumeroMasGrande(numeros) {
    // Verificamos si la lista está vacía para manejar el caso adecuadamente
    if (numeros.length === 0) {
        throw new Error("La lista de números no puede estar vacía");
    }
    // Inicializamos el número más grande con el primer elemento de la lista
    var numeroMasGrande = numeros[0];
    // Recorremos la lista empezando desde el segundo elemento
    for (var i = 1; i < numeros.length; i++) {
        // Si encontramos un número más grande, actualizamos numeroMasGrande
        if (numeros[i] > numeroMasGrande) {
            numeroMasGrande = numeros[i];
        }
    }
    // Retornamos el número más grande encontrado
    return numeroMasGrande;
}
// Ejemplo de uso
var numeroMasGrande = encontrarNumeroMasGrande(listDeNumeros);
console.log("El n\u00FAmero m\u00E1s grande es: ".concat(numeroMasGrande));
