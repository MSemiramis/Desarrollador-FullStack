/*Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento
aparece en el arreglo.*/
var arregloNumero = [1, 2, 3, 4, 4, 5, 4, 9, 4];
var elemento = 4;
var result;
function contarElementos(arregloNumero, elemento) {
    var contador = 0;
    for (var i = 0; i < arregloNumero.length; i++) {
        if (arregloNumero[i] === elemento) {
            contador++;
        }
    }
    return contador;
}
result = contarElementos(arregloNumero, elemento);
console.log("El elemento" + elemento, "aparece " + result, "veces en el arreglo.");
