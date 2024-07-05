/*Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados.*/

let arreglo1: number[] = [1, 8, 7];
let arreglo2: number[] = [2, 9, 8, 5, 1, 19];
let arreglo3: number[] = [];

function unirArreglo(arregloF1: number[], arregloF2: number[]) {
    let dimensionArreglo: number = arregloF1.length + arregloF2.length;
    arreglo3 = new Array(dimensionArreglo);
    console.log("la dimension es: " + dimensionArreglo);

    for (let i = 0; i < arregloF1.length; i++) {
        arreglo3[i] = arregloF1[i];
        console.log(arreglo3[i]);
    }

    for (let i = arregloF1.length, j = 0; i < dimensionArreglo; i++, j++) {
        arreglo3[i] = arregloF2[j];
        console.log("arreglo2 " + arreglo3[i]);
    }
}

function leerArreglo(arregloFuncion: number[]) {
    console.log("Estos son los numeros del arreglo 3: ");
    for (let i = 0; i < arregloFuncion.length; i++) {
        console.log(arregloFuncion[i]);
    }
}

unirArreglo(arreglo1, arreglo2);
leerArreglo(arreglo3);
