"use strict";
// Arrow Functions
const subtracao = (n1, n2) => {
    return n1 - n2;
};
console.log(subtracao(7, 4));
const saudacao = () => console.log("Olá");
saudacao();
// Parametros Padrão
function contagemRegressiva(inicio = 5) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
contagemRegressiva(10);
