/*Implementa una función que tome dos números como parámetros y devuelva el número más pequeño.*/
var numPequeño = 0;
function encontrarElMasPequeño(num1, num2) {
    if (num1 > num2) {
        return num2;
    }
    else {
        return num1;
    }
}
numPequeño = encontrarElMasPequeño(7, 5);
console.log(numPequeño);
