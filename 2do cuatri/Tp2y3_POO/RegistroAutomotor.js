"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (Vehiculo) {
        this.vehiculos.push(Vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (marca, modelo, patente) {
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getPatente() === patente) {
                this.vehiculos[i].setMarca(marca);
                this.vehiculos[i].setModelo(modelo);
                return true;
            }
        }
        return false;
    };
    RegistroAutomotor.prototype.darBajaVehiculo = function (patente) {
        var encontrado = false;
        var nuevosVehiculos = [];
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getPatente() === patente) {
                encontrado = true;
            }
            else {
                nuevosVehiculos.push(this.vehiculos[i]);
            }
        }
        this.vehiculos = nuevosVehiculos;
        return encontrado;
    };
    RegistroAutomotor.prototype.listarVehiculos = function () {
        return this.vehiculos.map(function (v) { return ({
            marca: v.getMarca(),
            modelo: v.getModelo(),
            patente: v.getPatente(),
        }); });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
