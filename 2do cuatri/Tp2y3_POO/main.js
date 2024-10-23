"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var registro = new RegistroAutomotor_1.RegistroAutomotor();
//Crear vehículos y agregar
var auto1 = new Auto_1.Auto("Toyota", "Corolla", "ABC123", "Sedán");
var auto2 = new Auto_1.Auto("Peugeot", "308", "LPS444", "Sedán 5 puertas");
var moto1 = new Moto_1.Moto("Honda", "CBR", "XYZ987", 600);
var moto2 = new Moto_1.Moto("Bajal", "Domina", "DRZ123", 400);
var camion1 = new Camion_1.Camion("Volvo", "FH16", "LMN456", 3);
var camion2 = new Camion_1.Camion("Iveco", "XRT", "FXT457", 2);
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(moto2);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(camion2);
//Lista vehículos
console.log("Vehículos en el registro:");
console.log(registro.listarVehiculos());
//Modificar vehículo
console.log("Modificando el vehículo con patente 'XYZ987'...");
var modificado = registro.modificarVehiculo("Yamaha", "R1", "XYZ987");
if (modificado) {
    console.log("Vehículo modificado con éxito.");
}
else {
    console.log("Vehículo no encontrado.");
}
//Lista vehículos después de la modificación
console.log("Vehículos después de la modificación:");
console.log(registro.listarVehiculos());
// Baja de un vehículo
console.log("Dando de baja el vehículo con patente 'ABC123'...");
var dadoDeBaja = registro.darBajaVehiculo("ABC123");
if (dadoDeBaja) {
    console.log("Vehículo dado de baja con éxito.");
}
else {
    console.log("Vehículo no encontrado.");
}
//Lista vehículos después de dar de baja
console.log("Vehículos después de la baja:");
console.log(registro.listarVehiculos());
