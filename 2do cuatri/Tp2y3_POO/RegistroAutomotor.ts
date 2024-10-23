import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    protected vehiculos : Vehiculo[] = [];
    
    agregarVehiculo(Vehiculo : Vehiculo): void{
        this.vehiculos.push(Vehiculo);
    }

    modificarVehiculo(marca : string, modelo : string, patente: string):boolean{
        for(let i = 0; i<this.vehiculos.length; i++){
            if(this.vehiculos[i].getPatente()=== patente) {
                this.vehiculos[i].setMarca(marca);
                this.vehiculos[i].setModelo(modelo);
                return true;
            }
        }
        return false;
    }

    darBajaVehiculo(patente: string): boolean {
        let encontrado = false;
        const nuevosVehiculos: Vehiculo[] = [];
    
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getPatente() === patente) {
                encontrado = true; 
            } else {
                nuevosVehiculos.push(this.vehiculos[i]); 
            }
        }
    
        this.vehiculos = nuevosVehiculos; 
        return encontrado; 
    }

    listarVehiculos(): Array<{ marca: string; modelo: string; patente: string }> {
        return this.vehiculos.map(v => ({
            marca: v.getMarca(),
            modelo: v.getModelo(),
            patente: v.getPatente(),
        }));
    }
}