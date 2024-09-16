"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola. */
var fs = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var contenidoPrecios = "";
var contenidoProductos = "";
for (var i = 0; i < precios.length; i++) {
    contenidoPrecios += "".concat(precios[i], " ");
}
for (var i = 0; i < productos.length; i++) {
    contenidoProductos += "".concat(productos[i], " "); // comillas invertidas alt+96
}
// Guardo los datos en un txt
fs.writeFileSync('./precios.txt', contenidoPrecios);
fs.writeFileSync('./productos.txt', contenidoProductos);
console.log('Datos guardados en archivos.');
// Leo los datos 
var datosPrecios = fs.readFileSync('./precios.txt', 'utf8');
var datosProductos = fs.readFileSync('./productos.txt', 'utf8');
console.log('Precios leídos:', datosPrecios);
console.log('Productos leídos:', datosProductos);
