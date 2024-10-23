
export class Vehiculo {
    protected marca : string;
    protected modelo : string;
    protected patente: string;

    constructor(marca : string, modelo : string, patente: string){

        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    getMarca(): string{
        return this.marca;

    }

    setMarca( marca: string):void{
        this.marca = marca;
    }

    getModelo(): string{
        return this.modelo;

    }

    setModelo( modelo: string):void{
        this.modelo = modelo;
    }

    getPatente(): string{
        return this.patente;

    }

    setPatente( patente: string):void{
        this.patente = patente;
    }
    
}