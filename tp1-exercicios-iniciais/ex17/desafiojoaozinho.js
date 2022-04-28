function calculaFatorial(fatorial){
    let resultado = fatorial;
    let primeiroMultipicador = fatorial - 1;
    for (let i = primeiroMultipicador; i > 1; i--) {
    resultado *= i;
    }
    return resultado
}
calculaFatorial(15)

let entrada = "5 "+
              "8 "+
              "13 "+
              "10 "+
              "15 "
              
let entradas = entrada.split(" ")
for (let e in entradas){
    e = parseInt(e)
    let numero = parseInt(entradas[e])
    if (numero){
        console.log(`Instância ${e + 1}`)
        let resultadoFatorial = calculaFatorial(numero)
        resultadoFatorial = resultadoFatorial.toString()
        resultadoFatorial = resultadoFatorial.replaceAll("0", "")
        console.log(resultadoFatorial[resultadoFatorial.length-1])
    }
}
console.log("")