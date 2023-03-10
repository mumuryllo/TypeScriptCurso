// Classes e Atributos

class Data {

    // visibilidade publica padrão
    dia:number
    mes:number
    ano:number

    constructor(dia:number,mes:number,ano:number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

class DataEsperta {

    // visibilidade publica padrão
   
   

    constructor(public dia:number=1,public mes:number=1,public ano:number=1){
       
    }
}

const aniversario = new Data(10,2,2000)
aniversario.dia = 15
console.log(aniversario)

const casamento = new DataEsperta
casamento.ano = 2025
console.log(casamento)

class Produto {
    constructor(
        public nome:string, public preco:number,
        public desconto:number = 0
    ){

    }

     public resumo():string {
        return `${this.nome} custa R$ ${this.preco} com desconto de ${this.desconto * 100}%`
     }

}

const prod1 = new Produto('Caneta',4.20)
prod1.desconto = 0.07
console.log(prod1.resumo())
