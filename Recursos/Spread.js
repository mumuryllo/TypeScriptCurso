"use strict";
// Spread espalhar o Array
// Rest junta os parametros de array
const numeros = [1, 10, 99, -5];
console.log(...numeros);
const turmaA = ['Anderson', 'Vanessa', 'Giovani'];
const turmaB = ['Wallace', 'Jade', 'André', ...turmaA];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const retornar = retornaArray(1, 2, 3, 4, 5);
console.log(retornar);
// Destructing (array)
const caracteristicas = ['Motor Zetec 1.0 ', 2022];
const [motor, ano] = caracteristicas;
console.log(motor, ano);
// Destructing objetos
const item = {
    nome: 'Notebook 128GB',
    preco: 2250.80
};
const { nome: n, preco: p } = item;
console.log(n, p);
