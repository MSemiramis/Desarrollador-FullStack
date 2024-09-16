function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
var numeros = [1, 2, 3, 4, 5];
var resultado = sumarArreglo(numeros);
console.log(resultado); // Salida: 15
