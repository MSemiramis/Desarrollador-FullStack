"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }
    //Si gana evoluciona en nivel y le sumamos 10 a la vida
    Personaje.prototype.evolucionar = function () {
        this.nivel++;
        this.puntosDeVida += 10;
        console.log("".concat(this.nombre, " ha subido al nivel ").concat(this.nivel, " y ahora tiene ").concat(this.puntosDeVida, " puntos de vida."));
    };
    Personaje.prototype.recibirDanio = function (danio) {
        this.puntosDeVida -= danio;
        console.log("".concat(this.nombre, " ha recibido ").concat(danio, " de da\u00F1o. Vida restante: ").concat(this.puntosDeVida));
    };
    Personaje.prototype.tienevida = function () {
        return this.puntosDeVida > 0;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
