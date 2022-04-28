/*Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir um botão calcular que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.*/



function gerar() {
    let qtd = parseInt(document.getElementById("qtd").value)
    let min = parseInt(document.getElementById("min").value)
    let max = parseInt(document.getElementById("max").value)
    let resultadoQ4 = document.getElementById("resultadoQ4")
    let numeros = []
    let cont = 1

    if (min>max){
        alert ("Valor mínimo inválido")
    } else if (qtd < (max + min)) {
         while (cont <= qtd) {
            min = Math.ceil(min)
            max = Math.floor(max)
            let n = Math.floor(Math.random() *  (max - min+1)) + min
             if (numeros.indexOf(n) == -1) { //Para verificar se não é número repetido
                numeros.push(n)
                numeros = numeros.sort((a, b) => a - b) //Ordenar em ordem crescente com arrow function

                cont++
            }}     
    } else {
        alert("Valor inválido para a quantidade de números")
    }

    resultadoQ4.innerHTML += `<p>${numeros}</p>`
}

let q4 = document.getElementById("q4")
q4.innerHTML = `
<div id ="q4"> <h2> Questão 4: </h2>
    <div class="qtdMinMax">
        <label for = "qtd"> Quantidade de números: </label>
        <input type = "number" id ="qtd" placeholder = "Quantidade de números" required> 
        <label for = "valorMinimo"> Valor mínimo: </label>
        <input type = "number" id ="min" placeholder = "Valor mínimo do intervalo desejado" required>    
        <label for = "valorMaximo"> Valor máximo: </label>
        <input type = "number" id ="max" placeholder = "Valor máximo do intervalo desejado" required> 
    
    </div>
    <div>
        <button type="button" class="bt" onclick="gerar()">Calcular</button>     
    </div>
    <div id="resultadoQ4">
    </div>
 </div>`