// AVALIAÇÃO DE CURTO CIRCUITO
/*
&&  ->  false && true   ->  false   (Vai retornar o valor MESMO)
||  ->  true  || false  ->  true    (vai retornar o valor verdadeiro)
*/
console.log('Matheus Gomes' && 0 && 'Maria');        // Pelo valor avaliado em falso, ele retorna zero que é o valor avaliado em falso
console.log('Matheus Gomes' && true && 'Maria');     // aqui, por exemplo, vai retornar Maria, por ser tudo verdadeiro


console.log(0 || false || null || 'Matheus Gomes' || true)

/*
VALORES AVALIADOS EM FALSO:
- false
- 0
- ''
- ""
- ``
- null / undefined
NaN
*/

function falaOi() {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());


const corUsuario = 'null';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);