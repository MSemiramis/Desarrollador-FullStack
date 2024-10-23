import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    protected cc: number;
    

    constructor(marca : string, modelo : string, patente: string, cc : number){

       super(marca, modelo,patente);
        this.cc = cc ;
    }

    getCC(): number{
        return this.cc;

    }

    setCC( cc: number):void{
        this.cc = cc;
    }
}