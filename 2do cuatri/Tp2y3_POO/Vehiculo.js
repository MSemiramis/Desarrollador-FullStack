"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
