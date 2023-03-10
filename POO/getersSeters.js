"use strict";
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 23;
console.log(pessoa1);
// atributos e metodos estaticos
// eu n preciso instanciar a classe a uma variavel
class Matematica {
    static areaCirculo(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirculo(5));
