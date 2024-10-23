import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    protected tipo : string;
    

    constructor(marca : string, modelo : string, patente: string, tipo : string){

       super(marca, modelo,patente);
        this.tipo = tipo ;
    }

    getTipo(): string{
        return this.tipo;

    }

    setTipo( tipo: string):void{
        this.tipo= tipo;
    }
}