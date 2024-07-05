/* Implementa una función que tome un arreglo de números como parámetro y devuelva
 el resultado de multiplicar todos los elementos.*/
var tamanio = 4;
var arreglo = [1, 2, 3, 4];
var producto = 1;
function multiplicarArreglo(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];
    }
    return producto;
}
producto = multiplicarArreglo(arreglo);
console.log(producto);
