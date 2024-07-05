/*Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.*/

let num : number = 4;

function numeroPrimo (num:number): boolean{

    if (num <= 1) {
        return false;
    }

    for ( let i = 2; i<= num /2; i++){ //iniciamos en i = 2 porque es el primer numero primo y aparte cualquier numero es divisible por 1 
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

console.log(numeroPrimo(num));
