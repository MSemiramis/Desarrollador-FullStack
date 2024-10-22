import { Personaje } from "./Personaje";

export class Mago extends Personaje{

    poderMagico: number;
    escudoMagico:number;

    constructor(nombre: string, nivel: number, puntosDeVida:number,poderMagico:number, escudoMagico:number) {
        super(nombre, nivel, puntosDeVida,); 
        this.poderMagico = poderMagico;
        this.escudoMagico = escudoMagico;

    }

    atacar(enemigo:Personaje): void {
        console.log(`${this.nombre} lanza su hechizo ${this.poderMagico} .`);
        enemigo.recibirDanio(this.poderMagico);
    }

    defender(): void {
        console.log(`${this.nombre} utiliza un hechizo de escudo ${this.escudoMagico}.`);
    }

  
}

