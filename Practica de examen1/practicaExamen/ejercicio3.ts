/*Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.*/

let arregloNum: number[] = [1,2,3,4,8]; 
let numeroMayor: number = arregloNum[0];

function numeroMasGrande (arregloNum:number[]):number{

    for (let i = 0; i<arregloNum.length; i++){

       if (arregloNum[i] > numeroMayor){
            numeroMayor = arregloNum[i];
       }
    }

    return numeroMayor;
    
}

numeroMayor = numeroMasGrande(arregloNum);
console.log(numeroMayor);
