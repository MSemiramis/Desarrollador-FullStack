var arreglo = [1, 2, 3, 4];
function obtenerPromedio(arr) {
    var suma = sumarArreglo(arr);
    var promedio = suma / arr.length;
    console.log(promedio);
    return promedio;
}
function sumarArreglo(arr) {
    var sumaArreglo = 0;
    for (var i = 0; i < arr.length; i++) {
        sumaArreglo += arr[i];
    }
    return sumaArreglo;
}
obtenerPromedio(arreglo);
