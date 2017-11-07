class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}

// let carroA = new Carro('Veloster', 3);
// console.log(carroA);
// carroA.acelerar();
// console.log(carroA);
// carroA.acelerar();
// carroA.acelerar();
// console.log(carroA);

class Concessionaria {
    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }
}

// let concessionaria = new Concessionaria('Av Paulista');
// console.log(concessionaria);

class Pessoa {
    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: any): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): any {
        return this.carro;
    }
}

let pessoa = new Pessoa('José', 'Veloster');
console.log(pessoa.dizerCarroPreferido());

/* Criar Carros */
let carroA = new Carro('DogeJourney', 4);
let carroB = new Carro('Valoster', 3);
let carroC = new Carro('Cerato', 4);

/* Montar a lista de carros da concessionaria */
//let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av paulista', listaDeCarros);

/* Exibir a lista de carros */
console.log(concessionaria.mostrarListaDeCarros());