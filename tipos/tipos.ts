let nome = 'Muryllo'

// eu não poso mudar o tipo
// nome =28

// numbers

let idade = 23
idade = 23.5
console.log(idade)

// boolean
let possuiHobies = true
console.log(possuiHobies)

// tipos explicitos
let minhaIdade
minhaIdade = 23
console.log(typeof minhaIdade)
minhaIdade = "Idade é 23 "
console.log(typeof minhaIdade)

// array any -qualquer tipo
let hobbies: any [] =[" Cozinhar "," Desenhar "," Programar "]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies =[100,300,500]
console.log(hobbies)

// tipo tupla - é uma array pre definida de tipos

// seguir a ordem dos tipos

let endereco: [string,number] = ["Rua Antonio Pralon",41]
console.log(endereco)

// enums - valores que nunca vão mudar

enum Cor{
    Cinza, // 0
    Verde, // 1
    Azul // 2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// tipos em funções

function retornaNome(): string {
    return nome;
}
console.log(retornaNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function mutiplicar(a:number,b:number,c:number):number {
    return a*b*c
}
console.log(mutiplicar(5,10,20))

//objetos
let usuario: {name:string,age:number} = {
    name: 'Muryllo',
    age: 23
}

console.log(usuario)

// alias
type Funcionario = {
    supervisores:string [] ,
    baterPonto: (horas:number) =>string
}

let funcionario: Funcionario = {
    supervisores: ['Muryllo','Leia','Fabio'],
    baterPonto(horario:number):string {
        if(horario <=8){
            return 'Ponto Normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

// never
function falha(msg: string):never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha("Precisa ter um nome")
        }
        if(this.preco <=0){
            falha('Preço inválido ')
        }
    }
}

produto.validarProduto()