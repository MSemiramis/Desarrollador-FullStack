/*Crea una función que tome un elemento y un arreglo como parámetros, y devuelva la cantidad de veces que el elemento 
aparece en el arreglo.*/

let arregloNumero :number[]= [1,2,3,4,4,5,4,9,4]; 
let elemento :number = 4;
let result :number;

function contarElementos( arregloNumero:number[], elemento:number):number{
    let contador = 0;
    for (let i = 0; i <arregloNumero.length; i++){
        if (arregloNumero[i] === elemento){
            contador++;
        }
    }

    return contador;
}

result = contarElementos( arregloNumero, elemento);
console.log("El elemento" + elemento, "aparece " + result, "veces en el arreglo.");

