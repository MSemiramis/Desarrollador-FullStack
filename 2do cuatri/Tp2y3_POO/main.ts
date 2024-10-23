import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";


const registro = new RegistroAutomotor();

//Crear vehículos y agregar
const auto1 = new Auto("Toyota", "Corolla", "ABC123", "Sedán");
const auto2 = new Auto("Peugeot", "308", "LPS444", "Sedán 5 puertas");

const moto1 = new Moto("Honda", "CBR", "XYZ987", 600);
const moto2 = new Moto("Bajal", "Domina", "DRZ123", 400);

const camion1 = new Camion("Volvo", "FH16", "LMN456", 3);
const camion2 = new Camion("Iveco", "XRT", "FXT457", 2);


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
const modificado = registro.modificarVehiculo("Yamaha", "R1", "XYZ987");
if (modificado) {
    console.log("Vehículo modificado con éxito.");
} else {
    console.log("Vehículo no encontrado.");
}

//Lista vehículos después de la modificación
console.log("Vehículos después de la modificación:");
console.log(registro.listarVehiculos());

// Baja de un vehículo
console.log("Dando de baja el vehículo con patente 'ABC123'...");
const dadoDeBaja = registro.darBajaVehiculo("ABC123");
if (dadoDeBaja) {
    console.log("Vehículo dado de baja con éxito.");
} else {
    console.log("Vehículo no encontrado.");
}

//Lista vehículos después de dar de baja
console.log("Vehículos después de la baja:");
console.log(registro.listarVehiculos());

