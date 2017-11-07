import Carro from './Carro';//import { Carro } from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

let pessoa = new Pessoa('José', 'Veloster');
//console.log(pessoa.dizerCarroPreferido());

/* --- Criar Carros --- */
let carroA = new Carro('DogeJourney', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);

/* --- Montar a lista de carros da concessionaria --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av paulista', listaDeCarros);

/* --- Exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro --- */
let cliente = new Pessoa('João', 'Veloster');
//console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    //console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
})

console.log(cliente.dizerCarroQueTem());