"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
//import { ConcessionariaDao } from './ConcessionariaDao';
var Concessionaria_1 = require("./Concessionaria");
//import { PessoaDao } from './PessoaDao';
var Pessoa_1 = require("./Pessoa");
//let dao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
//dao.inserir(concessionaria);
//let dao2: PessoaDao = new PessoaDao();
var pessoa = new Pessoa_1.default('', '');
//dao2.atualizar(pessoa);
var dao3 = new Dao_1.Dao();
var dao4 = new Dao_1.Dao();
dao3.inserir(concessionaria);
dao4.remover(5);
