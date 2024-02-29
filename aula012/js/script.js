// Dentro do objeto Window temos esse tipo de função Js, no navegador.
// Todas as funções abaixo, funcioná direto no html, devido esse objeto window
// ao rodar o html, servirá de atalho para window.alert('');

// Mostrará um alerta pro usuário apenas, retorna por padrão um valor undefined
alert('Com a nossa mensagem.');

// Diferente do alert, esse da um resultado booleano, tendo opção de OK(true) e Cancelar(false)
window.confirm('Deseja realmente apagar?');

// Pedindo pro usuario digitar algo, onde vai retornar o que o usuário digitar pra vc
window.prompt('Digite seu nome: ');

//___________________________________________________________________________________________________________________________

//criando variável tbm
let confirma = window.confirm('Realmente deseja apagar?');

// testei com o if por conta própria
if (confirma == true){
    alert('eita, deu true');
    let name = window.prompt("Digite seu nome");
    if(name == "Cleiton"){
        alert('Fubokaaaaaaaa');
    }
}else{
    alert('eita, tu cancelou');
}