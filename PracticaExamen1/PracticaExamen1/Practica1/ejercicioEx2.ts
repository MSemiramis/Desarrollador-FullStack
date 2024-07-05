function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
}


