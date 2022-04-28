let ladoA = parseFloat(window.prompt("Digite a medida do primeiro lado: "))
let ladoB = parseFloat(window.prompt("Digite a medida do segundo lado: "))
let ladoC = parseFloat(window.prompt("Digite a medida do terceiro lado: "))


if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
    if (ladoA == ladoB && ladoB ==ladoC){
        console.log("É um triângulo equilatero.")
    }else if (ladoA == ladoB || ladoA == ladoC || ladoB==ladoC) {
        console.log("É um triângulo isósceles.")
    }else{
        console.log("É um triângulo escaleno.")
    }

}else{
    console.log("Não é um triângulo.")
}    
