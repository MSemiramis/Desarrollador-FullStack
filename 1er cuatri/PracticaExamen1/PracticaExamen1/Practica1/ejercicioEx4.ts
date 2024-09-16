
let contadorA: number = 0;
let contadorE: number = 0;
let contadorO: number = 0;
let resultado:number[];

function contarVocales(arregloCadena: string): number[] {

    for (let i = 0; i < arregloCadena.length; i++) {
            let caracter = arregloCadena[i].toUpperCase();
        if (caracter === 'A') {
            contadorA++;
        } else if (caracter === 'E') {
            contadorE++;
        } else if (caracter === 'O') {
            contadorO++;
        }
    }
    let contadores: number[] = [contadorA, contadorE, contadorO];
    return contadores;
}

resultado = contarVocales("ESTAMOS RESOLVIENDO EL PARCIAL DE PROG");
console.log(resultado);
