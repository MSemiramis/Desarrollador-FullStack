import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    protected ejes: number;
    

    constructor(marca : string, modelo : string, patente: string, ejes : number){

       super(marca, modelo,patente);
        this.ejes = ejes ;
    }

    getEjes(): number{
        return this.ejes;

    }

    setEjes( ejes: number):void{
        this.ejes = ejes;
    }
}