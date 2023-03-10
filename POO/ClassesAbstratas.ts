// abstrata - algo que n pode ser instanciado
// classes concretas herdam metodos abstratos obrigatoriamente

abstract class  Calculo {

 protected resultado:number =0

 abstract executar(...numeros: number[]):void

 getResultado():number{
    return this.resultado
 }

}

class Soma extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total,atual) => total+atual)
    }

}


class Multiplicar extends Calculo {
    
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total,atual) => total*atual)
    }

}

let c1= new Soma()
let c2 = new Multiplicar()

c1.executar(2,6,9,10,20)
c2.executar(2,6,9,10,20)

console.log(c1.getResultado())
console.log(c2.getResultado())