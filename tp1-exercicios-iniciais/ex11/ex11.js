let numeros =[]

for (i=0;i<5;i++){
    let numero = parseInt(window.prompt(`Digite o ${i+1}º número: `))
    numeros.push(numero)
}

console.log(`O maior número é ${Math.max(...numeros)}`) 