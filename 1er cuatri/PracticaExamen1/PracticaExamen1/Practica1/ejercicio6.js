/*Escribe una función que tome un número como parámetro y devuelva true si es primo, o false si no lo es.*/
var num = 4;
function numeroPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(numeroPrimo(num));
