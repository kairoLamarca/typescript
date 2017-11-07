"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
// let carroA = new Carro('Veloster', 3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);
// carroA.acelerar();
// carroA.acelerar();
// console.log(carroA);
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
// let concessionaria = new Concessionaria('Av Paulista');
// console.log(concessionaria);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('José', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
/* Criar Carros */
var carroA = new Carro('DogeJourney', 4);
var carroB = new Carro('Valoster', 3);
var carroC = new Carro('Cerato', 4);
/* Montar a lista de carros da concessionaria */
//let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av paulista', listaDeCarros);
/* Exibir a lista de carros */
console.log(concessionaria.mostrarListaDeCarros());
