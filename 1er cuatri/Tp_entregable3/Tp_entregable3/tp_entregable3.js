/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
var arregloNumeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
var numMayor = 0;
function numeroMayor(arregloNum) {
    var mayor = arregloNum[0];
    for (var i = 1; i < arregloNum.length; i++) {
        if (arregloNum[i] > mayor) {
            mayor = arregloNum[i];
        }
    }
    if (mayor % 2 == 0) {
        console.log("El numero mas grande es par");
    }
    else {
        console.log("El numero mas grande es impar");
    }
    return mayor;
}
numMayor = numeroMayor(arregloNumeros);
console.log("El numero mas grande del arreglo es: ".concat(numMayor));
