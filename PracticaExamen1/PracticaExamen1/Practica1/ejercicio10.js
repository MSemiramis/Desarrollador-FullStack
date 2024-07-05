/* Encuentra el promedio de una lista de números.*/
var listaDeNumeros = [1, 2, 3, 4, 5];
function calcularPromedio(numeros) {
    // Verificamos si la lista está vacía para evitar dividir por cero
    if (numeros.length === 0) {
        throw new Error("La lista de números no puede estar vacía");
    }
    // Calculamos la suma de los números en la lista
    var suma = numeros.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
    // Calculamos el promedio dividiendo la suma por la cantidad de números
    var promedio = suma / numeros.length;
    // Retornamos el promedio
    return promedio;
}
// Ejemplo de uso
var promedio = calcularPromedio(listaDeNumeros);
console.log("El promedio es: ".concat(promedio));
