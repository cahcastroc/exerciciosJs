/*Faça um programa que peça a temperatura em graus Fahrenheit, transforme e mostre a
temperatura em graus Celsius.
C = 5 * ((F-32) / 9)*/

let tempF = parseFloat(window.prompt("Digite e temperatura em Fahrenheit: "))
let tempC = 5 * ((tempF-32)/9)
console.log(`A temperatura em graus Celsius é ${tempC}º`)
