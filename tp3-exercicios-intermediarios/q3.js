/*rie um componente que possua um botão criar relatório que quando acionado deve imprimir um relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela.

As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
Cada aluno deve ser representado por um registro composto por nr e nota
Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar um pouco veja classes;
Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.
Os registros devem ser armazenados em um array;
A impressão do relatório deve ter:
um título;
os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e
um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"*/



class relatorioAlunos {
    constructor(codigo, nota, media) {
        this.codigo = codigo
        this.nota = nota
        this.media = media
    }
       
}

function relatorioNotas() {
    q3.innerHTML += ` 
    <div>
        <table class ="table table-bordered" id = "tabela"> 
            <caption class=titulo> Rendimento dos alunos </caption>
            <thead>
            <tr>
                <th "col"> Nº aluno </th>
                <th "col"> Nota </th>
                <th "col"> Resultado </th>
            </tr>
            </thead>
            <tbody> `


    let relatorioTabela = document.getElementById("tabela")
    let rendimentos = []
    let aprovados = 0
    let reprovados = 0


    for (let i = 1; i <= 20; i++) {
        let alunos = new relatorioAlunos(codigo = i, nota = Math.floor(Math.random() * 100), media = nota > 60 ? "Aprovado" : "Reprovado")
        rendimentos.push(alunos)

        if (media == "Aprovado") {
            aprovados++
        } else {
            reprovados++
        }
        relatorioTabela.innerHTML += ` 
           
            <tr>
                <td>${alunos.codigo}</td>
                <td>${alunos.nota}</td>
                <td>${media}</td>                 
            </tr>`
            
    }


    let percentAp = ((aprovados * 100) / 20)
    let percentRp = ((reprovados * 100) / 20)
    relatorioTabela.innerHTML += `
            </tbody>
            <tfoot class="rodape">
                <tr> 
                    <td colspan ="2"> Aprovados: ${aprovados} - ${percentAp}% </td>
                    <td> Reprovados: ${reprovados} - ${percentRp}% </td>
                </tr>  
            </tfoot> 
        </table>
    </div>`

}

let q3 = document.getElementById("q3")
q3.innerHTML = `
    <div id ="q3"> 
        <h2> Questão 3: </h2>
        <div>
            <button type="button" class="bt" onclick="relatorioNotas()">Criar relatório</button>     
        </div>`






