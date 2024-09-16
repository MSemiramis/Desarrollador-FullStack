var contadorA = 0;
var contadorE = 0;
var contadorO = 0;
var resultado;
function contarVocales(arregloCadena) {
    for (var i = 0; i < arregloCadena.length; i++) {
        var caracter = arregloCadena[i].toUpperCase();
        if (caracter === 'A') {
            contadorA++;
        }
        else if (caracter === 'E') {
            contadorE++;
        }
        else if (caracter === 'O') {
            contadorO++;
        }
    }
    var contadores = [contadorA, contadorE, contadorO];
    return contadores;
}
resultado = contarVocales("ESTAMOS RESOLVIENDO EL PARCIAL DE PROG");
console.log(resultado);
