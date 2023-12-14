import {Veiculo} from "./classVeiculo";
import {Carro} from "./subclassCarro";
import {Motocicleta} from "./subclassMoto";

let listaVeiculos = new Array <Veiculo>();

// optei por clonar os objetos já na criação do array, para não precisar criar tantos objetos

let carro = new Carro ("C3", "Citröen", 4, "vermelho", 5, 120);
listaVeiculos.push(carro);

let cloneCarro1 = new Carro ("Idea Advendure", "Fiat", 5, "vermelho", 5, 130);
listaVeiculos.push(cloneCarro1);

let cloneCarro2 = new Carro ("Fit", "Honda", 4, "cinza", 5, 116);
listaVeiculos.push(cloneCarro2);

let moto = new Motocicleta ("Bros", "Honda", 2, "preta", 150);
listaVeiculos.push(moto);

let cloneMoto1 = new Motocicleta ("EV1", "Voltz", 2, "amarela", 50);
listaVeiculos.push(cloneMoto1);

let cloneMoto2 = new Motocicleta ("NMax", "Yamaha", 2, "vermelha", 125);
listaVeiculos.push(cloneMoto2);

listaVeiculos.forEach(e => {
    console.log(e.represent());
});