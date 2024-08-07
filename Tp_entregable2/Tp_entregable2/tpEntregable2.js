"use strict";
/*Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Sólo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese un numero: ");
var exponente = rls.questionInt("Ingrese un exponente mayor o igual a 0: ");
var resultado = 0;
calcularPotencia(base, exponente);
function calcularPotencia(base, exponente) {
    resultado = calcularResultadoPotencia(base, exponente);
    console.log(resultado);
}
function calcularResultadoPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return Math.pow(base, exponente);
}
/*
import * as rls from 'readline-sync';

let base: number = rls.questionInt("Ingrese un numero: ");
let exponente: number = rls.questionInt("Ingrese un exponente mayor o igual a 0: ");
let resultado: number = 0;

calcularPotencia(base, exponente);

function calcularPotencia(base: number, exponente: number){
    while(base > 0 || exponente >= 0 ){
        resultado = calcularResultadoPotencia(base, exponente)
    }
      
}

function calcularResultadoPotencia(base: number, exponente: number): number{
    return base ** exponente;

}*/
