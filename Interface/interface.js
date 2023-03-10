"use strict";
function saudacoes(pessoa) {
    console.log('Ola , ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Mattheus';
}
const pessoa = {
    nome: 'Muryllo',
    idade: 23,
    saudar(sobrenome) {
        console.log(this.nome + ' ' + sobrenome);
    }
};
saudacoes(pessoa);
mudarNome(pessoa);
saudacoes(pessoa);
pessoa.saudar('Soares');
// Usando Classes
class Cliente {
    constructor() {
        this.nome = 'Muryllo';
    }
    saudar(sobrenome) {
        console.log(this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Mumu';
saudacoes(meuCliente);
meuCliente.saudar('Soares');
