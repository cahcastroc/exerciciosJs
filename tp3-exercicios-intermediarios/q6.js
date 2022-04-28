/*Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).

No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2, se falhar ele deve alertar o usuário e voltar ao início do cenário 1. Se o usuário optar por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para início do cenário 1.

No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão (ou link) para deslogar, retornando ao início do cenário 1.

Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os registros de usuários  armazenados.*/


let storage = window.sessionStorage;
storage.setItem('camila.cerqueira@al.infnet.com', 'senha1');
storage.setItem('paulo@gmail.com', 'senha2');
storage.setItem('camila@al.infnet.com', 'senha1');

function validar() {
    let emailLogin = document.getElementById("email").value
    let senhaLogin = document.getElementById("senha").value

    let busca = storage.getItem(emailLogin);
    if (busca == null) {
        alert("Usuário não encontrado.")
    } else {
        if (senhaLogin == busca) {
            document.getElementsByClassName("validado")[0].style.visibility = "visible"
            document.getElementsByClassName("logout")[0].style.display = "none"
        } else {
            alert("Dados incorretos")
        }
    }
}

function exibirCadastro() {
    document.getElementsByClassName("novoCadastro")[0].style.visibility = "visible"
    document.getElementsByClassName("login")[0].style.visibility = "hidden"

}

function cadastrar() {

    let emailCadastro = document.getElementById("cadastroEmail").value
    let senhaCadastro = document.getElementById("cadastroSenha").value
    if (emailCadastro && senhaCadastro) {
        storage.setItem(emailCadastro, senhaCadastro);
        window.alert("Usuário cadastrado com sucesso!")

    }
}

function ocultarCadastro() {
    document.getElementsByClassName("novoCadastro")[0].style.visibility = "hidden"
    document.getElementsByClassName("login")[0].style.visibility = "visible"

}

function sair() {
    document.location.reload(true)
}


let q6 = document.getElementById("q6")
q6.innerHTML = `

<div id="q6">
    <h2> Questão 6: </h2>
         <div class="row logout">
            <div class="login col">
              <h3>Login</h3>
              <p class="erro"></p>
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="nome@email.com" required>
              </div>
              <div class="mb-3">
                <label for="senha" class="form-label">Senha:</label>
                <input type="password" class="form-control" id="senha" placeholder="senha" required>
              </div>
              <button type="button" class="bt" onclick="validar()">Login</button>              
              <button type="button" class="bt" onclick="exibirCadastro()">Novo Cadastro</button> 
            </div>
            <div class="novoCadastro">
                <h2>Novo Cadastro</h2>
                <div class="mb-3">
                <label for="cadastroEmail" class="form-label">Email:</label>
                <input type="email" class="form-control" id="cadastroEmail" placeholder="nome@email.com" required>
              </div>
              <div class="mb-3">
                <label for="cadastroSenha" class="form-label">Senha:</label>
                <input type="password" class="form-control" id="cadastroSenha" placeholder="Crie uma senha" required>
              </div>
              <div>
              <button type="button" class="bt" onclick="cadastrar()">Concluir</button>
            </div>
            <div>
            <button type="button" class="bt" onclick="sair()">Voltar</button> 
            </div>
          </div>
        </div>
        <div class="validado">
          <h2>Seja bem-vindo!</h2>
          <button type="button" class="bt" onclick="sair()">Sair</button>
</div>`
