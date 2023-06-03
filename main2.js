const form = document.getElementById('form_contato');
const nomeContato = document.getElementById('nome_contato');
const telefone = document.getElementById('telefone_contato');
const corpoDaTabela = document.querySelector('tbody');
let linhas=''
const somaContatos=[]
let numerosDeContatos = document.getElementById('calcula_contatos');



//adicionaLinha recebe corpoDatabela, que pegou com document.queryselector a tag tbody, com queryselector pego tota a tag
//em seguida uso let pq pode ser mudado, ai pedo o <tr> ai uso linha += que e a mesma coisa de usar linha = linha + td
//ai uso .value para pegar o valor 
//e innerhtml para adicionar o valor de linha np html


function adicionaLinha(){
    let linha = '<tr>';
    linha = linha + `<td>${nomeContato.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'
    linhas = linhas + linha
    corpoDaTabela.innerHTML=linhas
    somaContatos.push(telefone)
}

// function limpacadastro tira o nome quando adicionado

function limpacadastro(){
    nomeContato.value = ''
    telefone.value =''
}

// form.addEventListene o que vai acontecer quando clicar em cadastrar

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    limpacadastro()
    atualizaNumerosContatos()
}); 

//function atualizaNumerosContatos() adicionamos uma aray que armazenou 

function atualizaNumerosContatos(){
    numerosDeContatos.textContent = somaContatos.length
}