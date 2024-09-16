/* Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola. */
import * as fs from "node:fs";

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];

let contenidoPrecios: string = "" ;
let contenidoProductos : string = "";

for (let i = 0; i < precios.length; i++) {
    contenidoPrecios += `${precios[i]} `;

}

for (let i = 0; i < productos.length; i++) {
    contenidoProductos += `${productos[i]} `; // comillas invertidas alt+96
    
}

// Guardo los datos en un txt
fs.writeFileSync('./precios.txt', contenidoPrecios);
fs.writeFileSync('./productos.txt', contenidoProductos);

console.log('Datos guardados en archivos.');

// Leo los datos 
const datosPrecios:string = fs.readFileSync('./precios.txt', 'utf8');
const datosProductos: string = fs.readFileSync('./productos.txt', 'utf8');

console.log('Precios leídos:', datosPrecios);
console.log('Productos leídos:', datosProductos);


