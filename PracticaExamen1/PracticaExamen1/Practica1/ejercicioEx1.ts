
function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for ( let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

const numeros: number[] = [1, 2, 3, 4, 5];
const resultado: number = sumarArreglo(numeros);
console.log(resultado); // Salida: 15