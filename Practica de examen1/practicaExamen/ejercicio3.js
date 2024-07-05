/*Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.*/
var arregloNum = [1, 2, 3, 4, 8];
var numeroMayor = arregloNum[0];
function numeroMasGrande(arregloNum) {
    for (var i = 0; i < arregloNum.length; i++) {
        if (arregloNum[i] > numeroMayor) {
            numeroMayor = arregloNum[i];
        }
    }
    return numeroMayor;
}
numeroMayor = numeroMasGrande(arregloNum);
console.log(numeroMayor);
