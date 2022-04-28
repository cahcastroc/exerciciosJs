
let soma = 0

for (let i= 0; i<5; i++){
    let numero = parseFloat(prompt(`Insira o ${i+1}º nº: `))
    soma += numero
}

let media = soma/5

console.log(`A soma dos números inseridos é ${soma} e a média é ${media}.`)