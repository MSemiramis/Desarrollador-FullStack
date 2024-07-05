/*Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos*/

let tamanioArrego : number = 4
let arregloNumeros: number[]= [1,2,3,4]; 
let suma: number = 0;
let promedio:number;

function SumarArreglo (arregloNumeros:number[]):number{

    for (let i = 0; i<arregloNumeros.length; i++){
       suma += arregloNumeros[i];
    }
    promedio = suma / arregloNumeros.length;
    return promedio;
    
}

promedio = SumarArreglo(arregloNumeros);
console.log(promedio);