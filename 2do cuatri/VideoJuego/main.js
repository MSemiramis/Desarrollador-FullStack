"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arquero_1 = require("./Arquero");
var Luchador_1 = require("./Luchador");
var Mago_1 = require("./Mago");
function combate(personaje1, personaje2) {
    console.log("\u00A1Comienza el combate entre ".concat(personaje1.nombre, " y ").concat(personaje2.nombre, "!"));
    while (personaje1.tienevida() && personaje2.tienevida()) {
        personaje1.atacar(personaje2); // Personaje 1 ataca
        if (!personaje2.tienevida())
            break; // Verificar si el personaje 2 ha muerto
        personaje2.defender(); // Personaje 2 se defiende
        personaje2.atacar(personaje1); // Personaje 2 ataca
        if (!personaje1.tienevida())
            break; // Verificar si el personaje 1 ha muerto
    }
    var ganador = personaje1.tienevida() ? personaje1 : personaje2;
    console.log("El ganador es: ".concat(ganador.nombre));
    // Evoluciona el ganador
    ganador.evolucionar();
}
function main() {
    var luchador = new Luchador_1.Luchador("Leñador", 1, 100, 30, 20);
    var arquero = new Arquero_1.Arquero("Robin hood", 1, 80, 25, 15);
    var mago = new Mago_1.Mago("Merlin", 1, 60, 40, 25);
    // Simular combates
    combate(luchador, arquero);
    combate(arquero, mago);
    combate(mago, luchador);
}
main();
