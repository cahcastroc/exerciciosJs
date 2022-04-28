
function contadorEdivisores (limite){
let qtd = 0

    for (let i= 2; i<limite; i++) {
        if (i%2==0 && i%3==0){
            console.log(i)
            qtd += 1
        }
    }
    return `A quantidade de números existentes nessa condição é ${qtd}`
}


console.log(contadorEdivisores(1000000))