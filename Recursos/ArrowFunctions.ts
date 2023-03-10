// Arrow Functions

const subtracao = (n1: number, n2: number):number=>{
  return  n1 -n2
}
console.log(subtracao(7,4))

const saudacao = () => console.log("Olá")
saudacao()

// Parametros Padrão
function contagemRegressiva(inicio:number = 5): void {
    console.log(inicio)
    while(inicio>0){
        inicio --
        console.log(inicio)
    }
    console.log("Fim")
}

contagemRegressiva()
contagemRegressiva(10)