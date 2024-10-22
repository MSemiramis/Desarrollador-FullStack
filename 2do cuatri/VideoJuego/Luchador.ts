import { Personaje } from "./Personaje";
export class Luchador extends Personaje{

    daniofisico: number;
    escudo:number;

    constructor(nombre: string, nivel: number, puntosDeVida:number,daniofisico:number,escudo:number) {
        super(nombre, nivel, puntosDeVida,); 
        this.daniofisico = daniofisico;
        this.escudo= escudo;
    }

    atacar(enemigo:Personaje): void {
        console.log(`${this.nombre} ataca con su espada de daño ${this.daniofisico} .`);
        enemigo.recibirDanio(this.daniofisico);
    }

    defender(): void {
        console.log(`${this.nombre} utiliza un escudo ${this.escudo}.`);
    }

}