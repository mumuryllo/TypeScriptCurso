"use strict";
// Classes e Atributos
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DataEsperta {
    // visibilidade publica padrão
    constructor(dia = 1, mes = 1, ano = 1) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(10, 2, 2000);
aniversario.dia = 15;
console.log(aniversario);
const casamento = new DataEsperta;
casamento.ano = 2025;
console.log(casamento);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} com desconto de ${this.desconto * 100}%`;
    }
}
const prod1 = new Produto('Caneta', 4.20);
prod1.desconto = 0.07;
console.log(prod1.resumo());
