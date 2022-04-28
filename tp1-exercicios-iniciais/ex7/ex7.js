/*Faça um programa que imprima “Bom dia”, “Boa tarde” ou “Boa noite” dependendo da hora
do dia. Dica: use a classe Date.*/

let hora = new Date().getHours()


if (hora > 6 && hora <= 12){
    console.log("Bom dia!")
}else if (hora > 12 && hora <=18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}


