import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Personaje } from "./Personaje";

function combate(personaje1: Personaje, personaje2: Personaje): void {
    console.log(`¡Comienza el combate entre ${personaje1.nombre} y ${personaje2.nombre}!`);

    while (personaje1.tienevida() && personaje2.tienevida()) {
        personaje1.atacar(personaje2);
        if (!personaje2.tienevida()) break; 

        personaje2.defender(); //
        personaje2.atacar(personaje1); 
        if (!personaje1.tienevida()) break;
    }

    const ganador = personaje1.tienevida() ? personaje1 : personaje2;
    console.log(`El ganador es: ${ganador.nombre}`);
    
    //Evoluciona el ganador
    ganador.evolucionar();
}

function main() {
    const luchador = new Luchador("Leñador", 1, 100, 30, 20);
    const arquero = new Arquero("Robin hood", 1, 80, 25, 15);
    const mago = new Mago("Merlin", 1, 60, 40, 25);

    //Simular combates
    combate(luchador, arquero);
    combate(arquero, mago);
    combate(mago, luchador);
}


main();