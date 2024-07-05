/* Implementa una función que tome un arreglo de números como parámetro y devuelva
 el resultado de multiplicar todos los elementos.*/

let tamanio : number = 4
let arreglo: number[]= [1,2,3,4]; 
let producto: number = 1;


function multiplicarArreglo (arreglo:number[]):number{

    for (let i = 0; i<arreglo.length; i++){
       producto *= arreglo[i];
    }

    return producto;
    
}

producto = multiplicarArreglo(arreglo);
console.log(producto);