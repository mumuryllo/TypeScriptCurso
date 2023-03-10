"use strict";
let nome = 'Muryllo';
// eu não poso mudar o tipo
// nome =28
// numbers
let idade = 23;
idade = 23.5;
console.log(idade);
// boolean
let possuiHobies = true;
console.log(possuiHobies);
// tipos explicitos
let minhaIdade;
minhaIdade = 23;
console.log(typeof minhaIdade);
minhaIdade = "Idade é 23 ";
console.log(typeof minhaIdade);
// array any -qualquer tipo
let hobbies = [" Cozinhar ", " Desenhar ", " Programar "];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 300, 500];
console.log(hobbies);
// tipo tupla - é uma array pre definida de tipos
// seguir a ordem dos tipos
let endereco = ["Rua Antonio Pralon", 41];
console.log(endereco);
// enums - valores que nunca vão mudar
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// tipos em funções
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function mutiplicar(a, b, c) {
    return a * b * c;
}
console.log(mutiplicar(5, 10, 20));
//objetos
let usuario = {
    name: 'Muryllo',
    age: 23
};
console.log(usuario);
let funcionario = {
    supervisores: ['Muryllo', 'Leia', 'Fabio'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha('Preço inválido ');
        }
    }
};
produto.validarProduto();
