"use strict";
/*•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numeroIngresado = readlineSync.questionInt("Ingrese un número: ");
if (numeroIngresado == 0) {
    console.log("El numero ingresado es 0");
}
else {
    if (numeroIngresado % 2 == 0) {
        console.log("El numero ingresado es par");
    }
    else {
        if (numeroIngresado % 2 == 1) {
            console.log("El numero ingresado es impar");
        }
    }
}
