# Seção 3: JavaScript - Lógica de programação

## Aula 21 - Operadores de Comparação

Nesta aula, vimos os operadores de comparação que retornam um valor booleano. Os principais são:

  * `>` (maior que)
  * `>=` (maior ou igual a)
  * `<` (menor que)
  * `<=` (menor ou igual que)
  * `==` (igualdade, checa só o valor - faz coerção de tipos)
  * `===` (igualdade estrita, checa valor e tipo - recomendado)
  * `!=` (diferente, checa só o valor)
  * `!==` (diferente estrito, checa valor e tipo - recomendado)

A principal diferença entre `==` e `===` é a checagem de tipo:

```jsx
const num1 = '10';    //string
const num2 = 10;    //number
const comp2 = num1 === num2; //vai retornar false
console.log(comp2);
```

-----

## Aula 22 - Operadores Lógicos

Aprendemos os operadores lógicos `&&` (AND), `||` (OR) e `!` (NOT).

  * **`&&` (AND):** Todas as expressões precisam ser verdadeiras para retornar `true`.
  * **`||` (OR):** Apenas uma expressão precisa ser verdadeira para retornar `true`.
  * **`!` (NOT):** Inverte o valor booleano.

<!-- end list -->

```jsx
const expressaoAnd = true && false && true && true; // false
const expressaoOr = true || false || true || true; // true
console.log(!true) // false
```

-----

## Aula 23 - Avaliação de Curto-Circuito (Short-Circuit)

Vimos que o JavaScript para a avaliação de operadores lógicos assim que encontra o resultado.

Isso introduz o conceito de valores "Falsy" (que avaliam para falso):

  * `false`
  * `0`
  * `''` `""` \`\` (strings vazias)
  * `null` / `undefined`
  * `NaN`

Para `&&`, ele retorna o primeiro valor "falsy" que encontrar. Se todos forem verdadeiros, retorna o último valor.
Para `||`, ele retorna o primeiro valor "truthy" (verdadeiro) que encontrar.

Isso é muito útil para definir valores padrão:

```jsx
const corUsuario = null; // ou 'vermelho'
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // Se corUsuario for null, 'preto' é usado
```

-----

## Aula 24 e 25 - Condicionais (if, else if, else)

Revisão da estrutura de blocos condicionais. O código JS executa o primeiro bloco `if` ou `else if` que for verdadeiro e ignora o resto.

```jsx
const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('Número entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log("Numero entre 5 e 8");
} else if (1 === 1){    // Verdadeira   -> Vai executar esse por ser o primeiro
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11){    // Verdadeira, mas não é executada
    console.log('O numero esta entre 9 e 11');
} else {
    console.log('O número não esta entre 0 e 11.');
}
```

-----

## Aula 26 - Operador Ternário

É uma forma compacta de escrever um `if/else` simples.

A estrutura é: `(condicao) ? 'Valor para verdadeiro' : 'Valor para Falso'`

```jsx
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario); // 'Usuário normal'
```

-----

## Aula 27 - Objeto Date

Aprendemos a lidar com datas usando a função construtora `new Date()`.

  * `new Date()`: Cria data atual.
  * `new Date(0)`: Ponto zero (Timestamp Unix) - 01/01/1970.
  * Podemos pegar valores específicos:
      * `data.getDate()` (Dia)
      * `data.getMonth()` (Mês, **começa do zero** [0-11])
      * `data.getFullYear()` (Ano)
      * `data.getHours()` (Hora)
      * `data.getMinutes()` (Minuto)
      * `data.getSeconds()` (Segundo)
      * `data.getDay()` (Dia da semana, 0 = Domingo, 6 = Sábado)

Para formatar, criamos funções auxiliares como `zeroAEsquerda`.

```jsx
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
```

-----

## Aula 28 - Switch / Case

Uma alternativa ao `if/else if` quando precisamos checar múltiplos valores de *uma mesma variável*.

```jsx
function getDayWeekText (diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        // ... outros casos
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}
```

-----

## Aula 29 - Escopo (Var vs Let)

A grande diferença é que `let` tem **escopo de bloco** (`{ ... }`), enquanto `var` tem **escopo de função**.

`Var` também sofre de *hoisting*, onde a declaração é "içada" para o topo do escopo (mas não o valor), podendo resultar em `undefined` se chamada antes da atribuição. `Let` não permite isso, gerando um erro.

```jsx
const verdadeira = true;

if (verdadeira) {
    let nome1 = 'Gomes'; // Escopo do IF
    var nome2 = 'Gomes'; // Escopo global (ou da função)
    
    if (verdadeira) {
        var nome2 = 'Sá'; // Redeclarou a mesma nome2
        let nome1 = 'FILIPE?' // Escopo deste IF
    }
}
// console.log(nome1); // Daria erro, 'nome1' não existe aqui
console.log(nome2); // 'Sá' (vazou do escopo do IF)
```

-----

## Aula 30 - Atribuição via Desestruturação (Arrays)

Permite extrair valores de arrays para variáveis de forma limpa.

```jsx
const numeros_1 = [123, 345, 456, 567, 678];
// Pega os dois primeiros e o resto
const [primeiroNumero, segundoNumero, ...resto] = numeros_1;
console.log(primeiroNumero, segundoNumero); // 123 345
console.log(resto); // [456, 567, 678]

// Pular valores
const numeros_2 = [123, 345, 456, 567];
const [um, , tres, ] = numeros_2;
console.log(um, tres); // 123 456

// Pegar de arrays aninhados (matriz)
const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = matrix;
console.log(seis); // 6
```

-----

## Aula 31 - Atribuição via Desestruturação (Objetos)

Similar aos arrays, mas para extrair chaves de objetos.

```jsx
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 22,
    endereco: {
        rua: 'João de Lucas',
        numero: 50
    }
};

// Extração simples
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome); // Matheus Gomes

// Renomear variável e definir valor padrão
const { nome: teste = "Não existe", ...resto } = pessoa;
console.log(teste); // Matheus (nome existe)
console.log(resto); // { sobrenome: 'Gomes', ... }

// Extração aninhada
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero); // João de Lucas 50
```

-----

## Aula 32 - `for` (Clássico)

Estrutura de repetição clássica:

1.  **Criação da variável:** `let i = 0`
2.  **Condição de parada:** `i <= 5`
3.  **Incremento/Decremento:** `i++`

É muito usado para percorrer arrays:

```jsx
const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
```

-----

## Aula 33 - DOM (Document Object Model)

Uma aula teórica sobre a interface que o JavaScript usa para interagir com o HTML. O `window` é o objeto principal, que contém o `document`.

Aprendemos que podemos usar a API do DOM para selecionar e manipular elementos, como `document.createElement()` e `container.querySelector('h1')`.

-----

## Aula 34 - `for...in`

Este loop é feito para ler os **índices** de um array ou as **chaves** de um objeto.

```jsx
// Em Arrays (lê os índices)
const frutas = ['Pera', 'Maça', 'Uva'];
for (let i in frutas) {
    console.log(i)  // 0, 1, 2
}

// Em Objetos (lê as chaves)
const pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 23
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]); // nome Matheus, sobrenome Gomes...
}
```

-----

## Aula 35 - `for...of`

Diferente do `for...in`, o `for...of` lê os **valores** de objetos iteráveis (como Arrays e Strings).

**Importante:** Não funciona diretamente em objetos comuns, pois não são "iteráveis".

```jsx
const nomes = ['Matheus', 'Gomes'];

for (let valor of nomes){
    console.log(valor); // Matheus, Gomes
}

// Também foi introduzido o forEach
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});
```

-----

## Aula 36 - `while` e `do...while`

Loops baseados em condição.

  * **`while`:** Checa a condição *antes* de executar. Pode nunca executar.
  * **`do...while`:** Executa o bloco *pelo menos uma vez* e checa a condição *depois*.

<!-- end list -->

```jsx
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let rand = 10;

// O do...while garante que o 'rand' seja calculado antes da checagem
do {
    rand = random(0, 50);
    console.log(rand);
} while (rand !== 10);
```

-----

## Aula 37 - `break` e `continue`

Usados dentro de loops para controlar o fluxo:

  * **`continue`:** Pula para a próxima iteração do loop, ignorando o resto do código no bloco atual.
  * **`break`:** Encerra o loop (o laço mais próximo) imediatamente.

<!-- end list -->

```jsx
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    if (numero === 2 || numero === 5){
        continue; // Pula o 2 e o 5
    }
    
    if (numero === 7){
        console.log("7 encontrado, saindo...");
        break; // Para o loop
    }
    console.log(numero); // 1, 3, 4, 6
}
```

-----

## Aula 38 e 39 - Tratamento de Erros (try, catch, throw, finally)

Blocos para lidar com erros sem quebrar a aplicação.

  * **`try`:** Contém o código que *pode* gerar um erro.
  * **`catch(e)`:** É executado *se* um erro ocorrer. O `e` é o objeto do erro.
  * **`finally`:** É executado *sempre*, independentemente de haver erro ou não (ex: fechar um arquivo ou conexão).
  * **`throw`:** Permite *lançar* nossos próprios erros.

<!-- end list -->

```jsx
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números'); // Lança um erro
    }
    return x + y;
}

try{
    console.log(soma(1, '2')); // Vai dar erro
}catch(e){
    console.log("Ocorreu um erro: " + e.message); // Trata o erro
}finally{
    console.log("Tenha um bom dia!"); // Executa sempre
}
```

-----

## Aula 40 - Funções de Tempo (`setInterval` e `setTimeout`)

Permitem agendar a execução de código.

  * **`setTimeout(funcao, tempo_ms)`:** Executa a `funcao` *uma vez* após o `tempo_ms`.
  * **`setInterval(funcao, tempo_ms)`:** Executa a `funcao` *repetidamente* a cada `tempo_ms`.
  * `clearInterval(variavel_timer)`: Para um `setInterval`.

<!-- end list -->

```jsx
// Joga a função para uma variável
const timer = setInterval(function () {
    console.log(new Date().toLocaleTimeString('pt-BR'));
}, 1000);

// Para o timer após 10 segundos
setTimeout(function () {
    clearInterval(timer);
    console.log("Timer parado!");
}, 10000);
```

-----

## Aula 41 - Exercício: Lista de Tarefas

Neste projeto, criamos uma lista de tarefas (To-Do List). Principais aprendizados:

1.  **Event Listeners:** Usamos `btnTarefa.addEventListener('click', ...)` e `inputTarefa.addEventListener('keypress', ...)`.
2.  **Checar Tecla "Enter":** Vimos como checar se a tecla pressionada foi o Enter (código 13) `if (e.keyCode === 13)`.
3.  **Criar e Adicionar Elementos:** Usamos `document.createElement('li')` para criar o item e `tarefas.appendChild(li)` para adicioná-lo à lista `<ul>`.
4.  **Botão Apagar (Delegação):** Para apagar itens dinâmicos, usamos "delegação de eventos". Adicionamos um listener no `document` e checamos *o que* foi clicado (`e.target`). Se o alvo (`el`) contiver a classe `.apagar`, removemos o elemento pai (`el.parentElement.remove()`).
5.  **LocalStorage:** Para salvar as tarefas, usamos `localStorage.setItem('tarefas', tarefasJSON)`. Como o localStorage só guarda strings, convertemos o array de tarefas para JSON com `JSON.stringify(listaDeTarefas)`.
6.  **Carregar Tarefas:** Ao carregar a página, pegamos a string do localStorage (`localStorage.getItem('tarefas')`) e a convertemos de volta para um array com `JSON.parse(tarefas)`.

-----

## Exercício 44 - Cálculo de IMC

Neste exercício, criamos um formulário que calcula o IMC.

  * Capturamos o envio (submit) do formulário e usamos `event.preventDefault()` para impedir o recarregamento da página.
  * Pegamos os valores de peso e altura dos inputs e calculamos `peso / (altura**2)`.
  * Exibimos o resultado usando `result.innerHTML`.
  * O **gabarito** mostrou uma forma mais organizada:
    1.  Validando os inputs com `Number()` e checando se são `!peso` (inválidos).
    2.  Separando a lógica em funções: `getImc()`, `getNivelImc()` (usando um array), e `setResult()`.
    3.  Criando o parágrafo de resultado via JS (`document.createElement('p')`) e adicionando classes (`.paragrafo-resultado` ou `.bad`) dinamicamente.

-----

## Exercício 48 - Data na Página

O objetivo era formatar uma data completa.

  * Você usou `new Date()` e funções `switch` para converter os números de dia da semana e mês para texto (ex: 0 -\> 'Domingo').
  * O **gabarito 2** mostrou uma solução muito mais simples usando a internacionalização nativa do JS:
    ```jsx
    h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
    ```

-----

## Exercício 53 - Criando Elementos com DOM

Neste exercício, criamos elementos HTML dinamicamente a partir de um array de objetos.

  * Você usou `document.createElement(tag)` e `elemento.innerHTML = texto`.
  * O **gabarito** mostrou uma abordagem mais segura, usando `document.createTextNode(texto)`. Isso previne que um texto contendo HTML (ex: `<script>`) seja interpretado pelo navegador, sendo mais seguro que o `innerHTML`.

-----

## Exercício 57 - `NodeList` e Estilos

Aqui, o objetivo era aplicar estilos CSS de um elemento (o `body`) em outros (os parágrafos `p`).

  * Aprendemos que `document.querySelectorAll('p')` retorna um `NodeList`, que parece um array e pode ser iterado com `for...of`.
  * Aprendemos a pegar o CSS "computado" (o estilo real) de um elemento com `getComputedStyle(document.body)`.
  * No loop, aplicamos os estilos: `p.style.backgroundColor = backgroundColorBody` e `p.style.color = '#FFFFFF'`.

-----

## Exercício 60, 61, 62 - Funções de Lógica

Estes foram exercícios rápidos de lógica:

  * **60: `max_number`:** Você usou um operador ternário `return num1 >= num2 ? num1 : num2;`. O gabarito também mostrou uma versão com *arrow function*.
  * **61: `ePaisagem`:** Você resolveu com `return width > height;`, que é a solução mais direta e eficiente (o gabarito usou *arrow function* para o mesmo resultado).
  * **62: `FizzBuzz`:** Você implementou a lógica clássica, checando se é divisível por 3 e 5, depois por 3, depois por 5, e também checou se o tipo era `number`. O gabarito mostrou que é importante checar `FizzBuzz` (3 e 5) *primeiro*, para que a execução não pare antes no `Fizz` (3) ou `Buzz` (5).

-----

## Exercício 66 - Timer (Cronômetro)

O projeto final da seção, um cronômetro.

  * **Sua Solução:** Você usou `setInterval` para controlar variáveis separadas de `hour`, `minute` e `second`, incrementando-as manualmente. Você também usou `addEventListener` separado para cada botão.
  * **Solução do Gabarito:** O gabarito mostrou duas técnicas importantes:
    1.  **Lógica de Tempo:** Ao invés de 3 variáveis, usou apenas `let segundos = 0;`. Ele criou uma função `criaHoraDosSegundos(segundos)` que usa `new Date(segundos * 1000)` e `toLocaleTimeString('pt-BR', {timeZone: 'UTC'})` para formatar os segundos totais em `00:00:00`. Isso é mais limpo e evita bugs de cálculo de tempo.
    2.  **Delegação de Eventos:** Ao invés de 3 `addEventListener`, usou apenas um no `document`. Ele checa *qual* botão foi clicado com `e.target` (ex: `if (el.classList.contains('iniciar'))`). Isso é mais eficiente, especialmente se muitos botões fossem adicionados.
    3.  **Controle do Timer:** O gabarito sempre usa `clearInterval(timer)` *antes* de iniciar um novo `setInterval`. Isso evita que vários timers fiquem rodando ao mesmo tempo se o usuário clicar "Iniciar" várias vezes.