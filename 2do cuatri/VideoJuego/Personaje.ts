export abstract class Personaje{

    nombre:String;
    nivel: number;
    puntosDeVida:number;


    constructor(nombre:String, nivel: number, puntosDeVida:number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        

    }

    abstract atacar(enemigo :Personaje):void;
    abstract defender():void;

    //Si gana evoluciona en nivel y le sumamos 10 a la vida
    evolucionar(): void {
        this.nivel++;
        this.puntosDeVida += 10; 
        console.log(`${this.nombre} ha subido al nivel ${this.nivel} y ahora tiene ${this.puntosDeVida} puntos de vida.`);
    }

    
    recibirDanio(danio: number): void {
        this.puntosDeVida -= danio;
        console.log(`${this.nombre} ha recibido ${danio} de daño. Vida restante: ${this.puntosDeVida}`);
    }

    
    tienevida(): boolean {
        return this.puntosDeVida > 0;
    }
}


    

