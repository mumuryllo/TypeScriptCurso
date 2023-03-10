class Pessoa {
    private _idade: number =0

    get idade(): number {
        return this._idade
    }

    set idade(valor:number){
       if(valor >=0 && valor <= 120){
           this._idade = valor
       }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 23
console.log(pessoa1)

// atributos e metodos estaticos
// eu n preciso instanciar a classe a uma variavel

class Matematica{
   static PI: number = 3.1416

   static areaCirculo(raio:number):number {
        return this.PI * raio * raio
    }

}

console.log(Matematica.areaCirculo(5))

