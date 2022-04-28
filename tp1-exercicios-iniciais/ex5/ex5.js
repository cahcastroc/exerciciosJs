//Faça um programa que verifique se uma letra digitada é vogal ou consoante.

const vogais = ["a","e","i","o","u"]

let letra = window.prompt("Digite uma letra: ")

if (vogais.includes(letra.toLowerCase())){
    console.log(`A letra digitada (${letra}) é uma vogal`)
}else{
    console.log(`A letra digitada (${letra}) é uma consoante`)
}
