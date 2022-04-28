/*Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.*/

function triangulo() {
    let ladoA = parseFloat(document.getElementById("ladoA").value)
    let ladoB = parseFloat(document.getElementById("ladoB").value)
    let ladoC = parseFloat(document.getElementById("ladoC").value)
    let resultadoQ5 = document.getElementById("resultadoQ5")

    if (((ladoA + ladoB) > ladoC) && ((ladoA + ladoC) > ladoB) && ((ladoB + ladoC) > ladoA)) {
        if (ladoA == ladoB && ladoB == ladoC) {
            resultadoQ5.innerHTML = `<p> É um triângulo equilatero.</p>`
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            resultadoQ5.innerHTML = `<p> É um triângulo isósceles.</p>`
        } else {
            resultadoQ5.innerHTML = `<p> É um triângulo escaleno.</p>`
        }

    } else {
        resultadoQ5.innerHTML = `<p> Não é um triângulo.</p>`
    }
}


let q5 = document.getElementById("q5")
q5.innerHTML = `
<div id="q5">
    <h2> Questão 5: </h2>
    <div class= "triangulo">
        <div class= ladoA>
            <label for ="ladoA"> Lado A: </label>
            <input type = "number" id="ladoA" placeholder = "Primeiro lado" required> 
        </div>
        <div class= ladoB>
            <label for ="ladoB"> Lado B: </label>
            <input type ="number" id="ladoB" placeholder = "Segundo lado" required> 
        </div>
        <div class= ladoC>
            <label for ="ladoC"> Lado C: </label>
            <input type ="number" id="ladoC" placeholder = "Terceiro lado" required> 
        </div>  
    </div>
    <div>
        <button type="button" class="bt" onclick="triangulo()">Calcular</button>     
    </div>
    <div id="resultadoQ5">
    </div>
</div>`