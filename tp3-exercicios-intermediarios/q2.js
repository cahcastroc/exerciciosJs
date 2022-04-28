/*Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de. O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para a execução. (Dica: usar o objeto javascript Date)

O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.*/


function fatorial() {
    let inicio = new Date().getTime()
    let num = parseInt(document.getElementById("numFatorial").value)
    let fatorial = num
    for (let i = 1; i < num; i++) {
        fatorial *= i

    }
    let final = new Date().getTime()
    let tempo = (final - inicio)

    let resultadoQ2 = document.getElementById("resultadoQ2")
    resultadoQ2.innerHTML = `<p> ${num}! = ${fatorial} (${tempo} milisegundos)</p>`
}

let q2 = document.getElementById("q2")
q2.innerHTML = `
<div id ="q2"> <h2> Questão 2: </h2>

    <div> 
        <label for ="fatorial"> Calcular o fatorial de </label>
        <input type = "number" id ="numFatorial" placeholder = "Digite um número: ">
    </div>
    <div>
        <button type="button" class="bt" onclick="fatorial()">Calcular</button>     
    </div>
    <div id ="resultadoQ2">
    </div>
</div>`