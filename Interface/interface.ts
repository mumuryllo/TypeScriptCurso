interface Humano {
    nome:string

    // opcional -> ?
    idade?:number

    saudar(sobrenome:string):void
}

function saudacoes(pessoa: Humano){
    console.log('Ola , ' + pessoa.nome)
}

function mudarNome(pessoa:Humano){
    pessoa.nome = 'Mattheus'
}

const pessoa={
    nome: 'Muryllo',
    idade:23,
    saudar(sobrenome:string){
        console.log(this.nome + ' ' + sobrenome)
    }
}

saudacoes(pessoa)
mudarNome(pessoa)
saudacoes(pessoa)

pessoa.saudar('Soares')

// Usando Classes

class Cliente implements Humano {
    nome: string='Muryllo' 
    saudar(sobrenome:string){
        console.log(this.nome + ' ' + sobrenome)
    }
}

const meuCliente= new Cliente()
meuCliente.nome = 'Mumu'
saudacoes(meuCliente)
meuCliente.saudar('Soares')