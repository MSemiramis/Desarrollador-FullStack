
import { Personaje } from "./Personaje";

export class Arquero extends Personaje{

    danioflecha: number;
    velocidad:number;

    constructor(nombre: string, nivel: number, puntosDeVida:number,danioflecha:number,velocidad:number) {
        super(nombre, nivel, puntosDeVida,); 
        this.danioflecha = danioflecha;
        this.velocidad = velocidad;
    }

    atacar(enemigo:Personaje): void {
        console.log(`${this.nombre} ataca con sus flechas de daño ${this.danioflecha} .`);
        enemigo.recibirDanio(this.danioflecha);
    }

    defender(): void {
        console.log(`${this.nombre} son muy veloces para esquivar ataques ${this.velocidad}.`);
    }

    
}