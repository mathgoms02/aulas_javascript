// Operador Ternário utilziando (? :)
// Estrutura -> (condicao) ? 'Valor para verdadeiro' : 'Valor para Falso'
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

// fazer o if mais compacto

// Utilizando cores padrões
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)