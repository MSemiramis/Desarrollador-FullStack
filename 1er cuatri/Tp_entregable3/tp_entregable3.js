/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
var arregloNumeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var numMayor = arregloNumeros[0];
function numeroMayor(arregloNumeros) {
    for (var i = 1; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > numMayor) {
            numMayor = arregloNumeros[i];
        }
    }
    if (numMayor % 2 == 0) {
        console.log("El numero mas grande es par");
    }
    else {
        console.log("El numero mas grande es impar");
    }
    return numMayor;
}
console.log("El numero mas grande del arreglo es: ".concat(numMayor));
numMayor = numeroMayor(arregloNumeros);
