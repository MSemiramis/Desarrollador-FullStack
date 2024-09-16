/*Escribe una función que tome un arreglo de números como parámetro y lo ordene de forma descendente.*/

let arregloNum :number[]= [1,8,3,2,7,5,9]; 
let arregloDesc :number[];

function arregloDescendente( arregloNum :number[]):number [] {
    for (let i = 0; i < arregloNum.length - 1; i++) {
        for (let j = 0; j < arregloNum.length - i - 1; j++) {
            if (arregloNum[j] < arregloNum[j + 1]) {
                // Intercambiamos los elementos si el elemento actual es menor que el siguiente
                let arregloTemporal = arregloNum[j];
                arregloNum[j] = arregloNum[j + 1];
                arregloNum[j + 1] = arregloTemporal;
            }
        }
    }

    return arregloNum;
}

arregloDesc = arregloDescendente(arregloNum);
console.log(arregloDesc);