"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
var Personaje_1 = require("./Personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, nivel, puntosDeVida, daniofisico, escudo) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.daniofisico = daniofisico;
        _this.escudo = escudo;
        return _this;
    }
    Luchador.prototype.atacar = function (enemigo) {
        console.log("".concat(this.nombre, " ataca con su espada de da\u00F1o ").concat(this.daniofisico, " ."));
        enemigo.recibirDanio(this.daniofisico);
    };
    Luchador.prototype.defender = function () {
        console.log("".concat(this.nombre, " utiliza un escudo ").concat(this.escudo, "."));
    };
    return Luchador;
}(Personaje_1.Personaje));
exports.Luchador = Luchador;
