/*Crie um componente que tenha duas caixas de texto que só aceitam números e tenha os rótulos (label) valor mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda possuir um botão calcular que quando acionado deve contar e imprimir quantos números existem entre valor mínimo e valor máximo (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível calcular se faltar algum dos números.*/


function calcular(valorMinimo, valorMaximo) {
    valorMinimo = parseInt(document.getElementById('valorMinimo').value)
    valorMaximo = parseInt(document.getElementById('valorMaximo').value)
    numeros = []
    if (valorMinimo > valorMaximo) {
        window.alert("O valor mínimo deve ser MENOR que o valor máximo")

    } else {
        let qtd = 0

        for (let i = valorMinimo + 1; i < valorMaximo - 1; i++) {
            if (i % 2 == 0 && i % 3 == 0) {
                numeros.push(i)
                qtd += 1
                let resultadoQ1 = document.getElementById("resultadoQ1")
                resultadoQ1.innerHTML = `<p> Números entre ${valorMinimo} e ${valorMaximo} e que são múltiplos de 2 e 3 simultaneamente: ${numeros} . <br> Quantidade de números existentes nessa condição: ${qtd} . </p>`

            }
        }
    }
}

let q1 = document.getElementById("q1")
q1.innerHTML = `
<div id ="q1"> <h2> Questão 1: </h2>
    <div class="minMax">
        <div class = "valorMinimo>
            <label for = "valorMinimo"> Insira o primeiro Valor: </label>
            <input type = "number" id ="valorMinimo" placeholder = "Digite um numero" required>
        </div>   
        <div class="valorMaximo"> 
        <label for = "valorMaximo"> Insira o segundo Valor: </label>
        <input type = "number" id ="valorMaximo" placeholder = "Digite um numero" required> 
        </div>
    </div>
    <div>
        <button type="button" class="bt" onclick="calcular()">Calcular</button>     
    </div>
    <div id = "resultadoQ1">
    </div>
</div>`