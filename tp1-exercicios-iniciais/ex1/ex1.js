let soma = 0

for(i=0; i<4; i++){
    let nota = parseFloat(window.prompt(`Digite a ${i+1}ª nota: `))
    soma = soma+nota
}

console.log(`A média das notas digitadas é ${soma/4}`)