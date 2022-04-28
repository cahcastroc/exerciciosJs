function voltar(){
    location.reload()
}


function confirmarIdade(idade) {

   idade = document.getElementById("idade").value

    let textoAdulto = ` <div class ="adulto">
                    <h1> Olá, você é maior de idade </h1>
                    <h2>Seja bem- vindo na sua página customizada!</h2>
                    <button onclick="voltar()"> Voltar </button> 
                    </div>`


    let textoInfantil = `<div class ="crianca">
                    <h1> Olá, você é menor de idade </h1>
                    <h2>Seja bem- vindo na sua página customizada!</h2>
                    <button onclick="voltar()"> Voltar </button>
                    </div>`

    let validacaoIdade = (idade >= 18) ? textoAdulto : textoInfantil;

    let titulo = document.getElementById("titulo")

    titulo.innerHTML = (validacaoIdade)

}