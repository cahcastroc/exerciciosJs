/*Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve clacular
a média alcançada por aluno e apresentar:
a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
b) A mensagem “Reprovado”, se a média for menor do que sete.
c) A mensagem “Aprovado com distinção”, se a média for igual a dez.*/

let nota1 = parseFloat(window.prompt("Digite a primeira nota: "))
let nota2 = parseFloat(window.prompt("Digite a segunda nota: "))

let media = (nota1+nota2)/2

if (media>= 7 && media <10){
    console.log("Aprovado. ")
}else if (media<7){
    console.log("Reprovado.")
}else if(media ==10){
    console.log ("Aprovado com distinção.")
}
