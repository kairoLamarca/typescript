"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro"); //import { Carro } from './Carro';
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
var pessoa = new Pessoa_1.default('José', 'Veloster');
//console.log(pessoa.dizerCarroPreferido());
/* --- Criar Carros --- */
var carroA = new Carro_1.default('DogeJourney', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* --- Montar a lista de carros da concessionaria --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av paulista', listaDeCarros);
/* --- Exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
var cliente = new Pessoa_1.default('João', 'Veloster');
//console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    //console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
