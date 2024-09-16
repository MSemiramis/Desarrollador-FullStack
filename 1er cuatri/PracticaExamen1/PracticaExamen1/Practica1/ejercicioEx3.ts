
let arreglo  = [1, 2, 3, 4];

function obtenerPromedio(arr: number[]): number {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    console.log(promedio);
    return promedio;
}

function sumarArreglo(arr: number[]): number {
    let sumaArreglo: number = 0; 
    for (let i = 0; i < arr.length; i++) {
        sumaArreglo += arr[i];
    }
    return sumaArreglo;
}


obtenerPromedio(arreglo);
