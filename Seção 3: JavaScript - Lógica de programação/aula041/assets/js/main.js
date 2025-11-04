// Selecionar itens primeiro
const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaElementoLi() {
    // Função para criar elemento <li>

    const li = document.createElement('li');
    return li;
}


/*Adicionando para pegar o elemento do input quando pressionado o enter
Tem outras keys para utilizar, por exemplo:
- keyup: pega o evento quando solta alguma tecla
- keypress: pega o evento quando clica alguma tecla
- keydown: quando vc pressiona a tecla e ainda esta pressionada (hold)*/
inputTarefa.addEventListener('keypress', function(e) {
    // Checando se clicou no enter, a partir do código da tecla
    if (e.keyCode === 13){
        // console.log("Enter pressionado");
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value) ;
    }
});


function limpaInput() {
    inputTarefa.value = '';

    // Mandando o javascript mater o foco nesse input (colocar o cursor lá)
    inputTarefa.focus();
}


function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    // vamos utilizar o setAttribute, vai funcionar para qualquer atributo. Bem mais versátil, podendo adicionar até o atributo title que seja
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}


function criaTarefa(textoInput) {
    // Função para criar tarefas

    const li = criaElementoLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);

    // Salvar as tarefas para quando atualizar a pagina, manter as informações
    salvarTarefas();
}


// capturando evento de clique no botão de adicionar tarefa
btnTarefa.addEventListener('click', function() {
    // checando se tem algo no input, não deixando retornar vazio
    if (!inputTarefa.value) return;

    // Função para criar tarefa (sempre bom distribuir as ações em funções)
    criaTarefa(inputTarefa.value) ;
});


document.addEventListener('click', function(e) {
    // pegar aonde ta sendo clicado no documento
    const el = e.target;

    // Quando clicar, o elemento pai terá que ser apagado.
    if (el.classList.contains('apagar')) {
        // el.parentElement -> pega o elemento 'pai' do botão apagar.
        el.parentElement.remove();

        // Para atualizar o Array para o JSON
        salvarTarefas();
    }
});


// Função para salvar tarefas no proprio navegador
function salvarTarefas() {
    // pegando todos os <li> do elemento de classe '.tarefas'
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        // tirando o texto "apagar" que ta retornando no botão. só queremos as tarefas. O trim() é para remover os espaços.
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();

        listaDeTarefas.push(tarefaTexto);
    }

    // Vamos utilizar um JSON para guardar esses dados. E vamos converter esse JSON numa string. Tem que fazer essa conversão para salvar.
    const tarefasJSON = JSON.stringify(listaDeTarefas);

    // Salvando os dados no navegador. Pela classe.
    localStorage.setItem('tarefas', tarefasJSON);
}


function adicionarTarefasSalvas() {
    // Pegar os dados do Storage do navegador
    const tarefas = localStorage.getItem('tarefas');

    // Convertendo de JSON para um Array novamente
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();