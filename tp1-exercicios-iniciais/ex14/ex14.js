

let num1 = parseInt(prompt("Insira um nº: "))
let num2 = parseInt(prompt("Insira outro nº: "))

let soma = 0

for (let i = (num1+1); i<num2; i++){
    console.log(i)
    soma += i
}

console.log(`A soma dos nºs no intervalo de ${num1} e ${num2} é ${soma}.`)