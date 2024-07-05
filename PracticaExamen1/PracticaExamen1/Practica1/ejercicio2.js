/*Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos*/
var tamanioArrego = 4;
var arregloNumeros = [1, 2, 3, 4];
var suma = 0;
var promedio;
function SumarArreglo(arregloNumeros) {
    for (var i = 0; i < arregloNumeros.length; i++) {
        suma += arregloNumeros[i];
    }
    promedio = suma / arregloNumeros.length;
    return promedio;
}
promedio = SumarArreglo(arregloNumeros);
console.log(promedio);
