# Seção 2: JavaScript Básico - Para iniciantes

## Aula 1 - Primeiras impressões

Essa aula foi bem introdutória, mostrou algumas coisa que já sabemos. Como criar o arquivo, como dar printar, como nomear o arquivo, etc.

---

## Aula 3 - Repo no Git

Bem simples também, mostrou como dar printar números, printar vários itens de uma vez. Explicou sobre os números serem tratados como Number em JS.

---

## Aula 4 - Comentários de código

Aprendemos a comentar

---

## Aula 5 - Navegador vs Node (HTML + JS)

Aprendemos a linkar o nosso script em JS para um html, e aprendemos a dar um alerta na página html: 

```jsx
alert('Olá mundo');
```

---

## Aula 6 - Variáveis com let

Foi mostrado como criar variáveis, onde utilizamos o `let` para nessa aula, e entendemos que declarar com let, nos possibilita a “trocar o valor” dele, atribuir outro valor durante o código. 

```jsx
let outro_nome;
outro_nome = 'Pedro'
console.log(outro_nome);
```

---

## Aula 7 - Mais variaveis com let e operações

Utilizamos mais vezes o `let` agora com números possibilitando fazer calculos utilizando váriaveis e atribuindo resultados aos mesmos 

```jsx
let nome = 'Matheus';
let sobrenome = 'Gomes';
let idade = 21;
let peso = 54;
let alturaEmMetros = 1.7;
let imc;
imc = peso / (alturaEmMetros*alturaEmMetros);

let anoNascimento;
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa',peso,'kg.');
console.log('Tem', alturaEmMetros, 'e seu IMC é de', imc);
console.log('Nasceu em',anoNascimento+'.')
```

Outra coisa extremamente util nessa aula, foi a apresentação dos **template strings.** Que segue o mesmo conceito do f-string do python: 

```jsx
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg.`);
```

---

## Aula 9 - Let vs Var

Explicado a utilização de outro método de criação de variável, agora utilizando o var. A principal diferença entre o var e o let é que o var podemos redeclarar, já o let não podemos, apenas mudamos o valor da mesma. 

```jsx
var nome = 'Matheus';
var nome = 'Gomes';

console.log(nome);
```

---

## Aula 10 - Tipos de Dados Primitivos

Foi falado sobre tipos de dados primitivos, onde nos foi apresentado os tipos de dados que temos. São eles:

- String - Palavras, vc já sabe
- Number - todo tipo de número, não importa se é int ou float
- null - Valores nulos, não apontam pra nenhum lugar da memória
- booleano - Valores lógicos, true ou false

```jsx
//STRING
const nome = 'Matheus';
const nome1 = "Matheus";
const nome2 = `Matheus`;

//NUMBER
const num1 = 10;
const num2 = 10.52;

//UNDEFINED
let indefinido; //náo aponta pra lugar nenhum da memória

//NULL
let sobrenome = null; //valor Nulo, também não aponta pra lugar nenhum na memória

//BOOLEANO
const aprovado = true; //true or false (lógico)

console.log(typeof(nome));
console.log(typeof(num1));
console.log(typeof(indefinido));
console.log(typeof(sobrenome),'# Não se encaixa em objeto, é um bug??');
console.log(typeof(aprovado));
```

---

## Aula 11 - Operadores Aritméticos

Nessa aula, fomos para operadores aritméticos, aprendemos a fazer operações como soma, subtração, multiplicação, divisão, entre outros.

- `+` → Adição e Concatenação
- `-` → Subtração
- `/` → Divisão
- `*` → Multiplicação
- `%` → Resto da divisão
- `**` → Potência

Também podemos incrementar, antes e depois da linha ser executada: 

```jsx
let contador = 1;
console.log(contador++); // printa, depois adiciona
console.log(contador);
console.log(++contador); //adiciona, depois printa
```

Incrementar com +=, podemos incrementar até mais: 

```jsx
let contador1 = 0;
const passo = 2;
contador1 += passo; // pular de dois em dois
console.log(contador1);
contador1 += passo; // pular de dois em dois
console.log(contador1);
```

Vemos também como converter valores utilizando parseInt, parseFloat e Number, dessa forma: 

```jsx
// convertendo
const num4 = parseInt('5'); //converti o 5 em numérico int
const num5 = parseFloat('5.2'); //converti o 5 em numérico float
const num6 = Number('5.2'); //converti o 5 em numérico
```

---

## Aula 12 - alert, confirm e prompt

Aqui é mais voltado para a parte web. Onde temos alguns exemplos de pop ups da web. Temos o `alert`, onde podemos soltar um alerta na página usando um pop up acima. 

```jsx
alert('Alerta aqui hein');
```

Também podemos usar o `confirm`, onde ele vai gerar um boleano, terá a opção de Ok (True) e Cancelar (False): 

```jsx
window.confirm('Deseja realmente apagar?');
```

Por fim, podemos usar o prompt para pegar algum input do usuário: 

```jsx
window.prompt('Digite seu nome: ');
```

Aqui um exemplo de uso básico: 

```jsx
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
```

---

## Aula 13 - Mais sobre Strings

Aqui falamos mais internamente as strings. Primeiro, falamos da possibilidade de usarmos o control barra para colocar caracteres especificos que não iriam normalmente. 

```jsx
let umaString = 'It\'s time';
```

Também possibilidades de pegar um caracter de uma strings, utilizando a forma que já conhecemos do python utilizando colchetes, e utilizando o `chatAt()`. 

```jsx
console.log(outraString[4]);        // Printou o caracter na posição 4
console.log(outraString.charAt(4))  // mesma coisa
```

Concatenação, sabemos que utilizamos o ‘+’ para concatenar, e outras formas, mas também temos o concat(), dessa forma: 

```jsx
// Concatenando strings
let nome = 'Matheus';
let sobrenome = 'Gomes'

console.log(nome.concat(' ',sobrenome));
```

Como sabemos, cada string tem sua própria indexação para pegar os caracteres dentro da string e tals. Podemos também pegar o index das strings, dessa forma: 

```jsx
let umaString = 'It\'s time';

// verificando indexação
console.log(umaString.indexOf('time'));
console.log(umaString.indexOf('t'));
console.log(umaString.lastIndexOf('t', 3)); // pega de trás pra frente, a partir do index 3
```

Temos também expressões regulares, coisa que raramente eu sei fazer. Podemos utilizar o `match` e o `search`. 

```jsx
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/g)); // pedindo para encontrar o x
```

Algumas outras funções como o replace, replace com expressão regular, capturar tamanho da string e partir a string. 

```jsx
console.log(umaString.replace("time", "show"));
console.log(umaString.replace(/t/g, "#")); // replace utilizando expressão regular, substituindo todos os t

console.log(umaString.length); // tamanho da string
console.log(umaString.slice(2, 6)); // parte a string
console.log(umaString.slice(-2)); // parte a string utilizando index negativo
```

---

## Aula 14 - Um pouco mais sobre numbers

Vemos mais algumas coisas sobre Numbers. Algumas transformações, tratamento, tipos, etc. Primeiro, aqui está como transformamos em binário, utilizando o `toString(2)` dessa forma: 

```jsx
let num1 = 1500;

// mudando para binário
console.log(num1.toString(2));  // 10111011100
```

Também podemos converter numero para string, utilizando ainda o `toString()` para isso: 

```jsx
console.log(typeof(num1.toString()));
```

Para transformação de dados, temos a opção de ajustar as casas decimais de um float gigante, aqui vamos usar o `toFixed()`: 

```jsx
let num3 = 65.6595165432164654
console.log(num3.toFixed(2));   //ajustar casas decimais
```

Aqui estamos verificando o tipo de dado. Normalmente utilizamos o is… e o tipo de dado, por exemplo, `isInteger()` ou `isNaN()`: 

```jsx
// Verificar tipo de dado?
console.log(Number.isInteger(num1)); //true

// Tratando NaN
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); //true
```

Temos o IEEE 754-2008, que é um padrão de aritmética de ponto flutuante para os computadores, regras de arredondamento e tals. Então temos algumas coisas a considerar: 

```jsx
// IEEE 754-2008
let num4 = 0.7;
let num5 = 0.1;

num4 += num5;   //0.8
num4 += num5;   //0.9
num4 += num5;   //1.0
num4 += num5;   //1.1
num4 += num5;   //1.2
num4 += num5;   //1.3
num4 += num5;   //1.4
num4 += num5;   //1.5
num4 += num5;   //1.6
num4 += num5;   //1.7
num4 += num5;   //1.8
num4 += num5;   //1.9
num4 += num5;   //2.0
console.log(num4);

// Utilizando o toFixed() não é a melhor opção por não retornar o tipo certo, então adicionamos um parseFloat()
num4 = parseFloat(num4.toFixed(2));
console.log(num4);
```

---

## Aula 15 - Utilizando Math

O Math veio para facilitar quando o negócio é tratar numeros. Temos várias coisas que podemos fazer.

Começar criando a variavel para brincar com o Math. 

```jsx
let num1 = 9.65432;
```

Podemos arredondar números float, e decidir se é arredondar para baixo ou para cima. 

```jsx
// arredondar para baixo
let num2 = Math.floor(num1);
console.log(num2);

// arredondar para cima
let num3 = Math.ceil(num1);
console.log(num2);
```

Também temos a opção de arredondar para o número próximo (caso esteja na metade, vai arredondar para cima). 

```jsx
// arredondar para o mais proximo (metade, arredonda para cima)
let num4 = Math.round(num1);
console.log(num2);
```

Podemos retornar o maior item de uma lista de números. 

```jsx
// Retornar maior número de uma sequencia
console.log(Math.max(4,5,6,5,8,2,5,2,56,4,5,456,5,65,465,645,65,23,654));
```

Podemos gerar um número aleatório, com regras ou sem regras

```
// Gerar um número aleatório
console.log(Math.random());

// Gerar número aleatório entre 10 e 5
const aleatorio = Math.random() * (10 - 5) + 5;
```

Temos o PI em JavaScript também. 

```jsx
// valor de PI
console.log(Math.PI); //3.141592653589793
```

E outras expressões matemáticas, como Pontenciação e raiz quadrada. 

```jsx
// Potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// Raiz quadrada
console.log(num1 ** (1/2));
console.log(num1 ** 0.5);
```

Por fim, é bom informar que dividir por 0 aqui, não vai gerar erro. Ele vai gerar um `Infinity` value: 

```jsx
// Em JavaScript, dividir por 0 não gera erro
console.log(100 / 0);   //Infinity
```

---

## Aula 16 - Arrays (Básico)

Apresentado alguns arrays, vendo o básico como indexação, os valores dentro do array, o tamanho do array. 

```jsx
let alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)
console.log(alunos[2])

alunos[2] = 'Eduardo'
alunos[3] = 'Luiza'
console.log(alunos)

console.log(alunos.length)
```

### Adicionar Itens no Array

Algumas formas de adicionar itens no array, no final da lista. Podemos utilizar o length, que pega sempre o ultimo item do array + 1, por conta do zero.
Também podemos utilizar o `push()`, e como parametro, adicionar o item a ser .

```jsx
// adicionadno varios valores ao final do array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Romero';
alunos[alunos.length] = 'Luana';
console.log(alunos)

alunos.push('Fabio');
alunos.push('Romero');
alunos.push('Luana');
console.log(alunos)
```

Para adicionar no começo do array, podemos utilziar o `unshift()` e como parametro, o valor a ser adicionado. 

```jsx
// adicionado no começo
alunos.unshift('Romero');
alunos.unshift('Fabio');
console.log(alunos)
```

### Remover itens da lista

Para remover itens do fim da lista. podemos utilizar o famoso `pop()` sem o parametro mesmo. 

```jsx
// Removendo item do fim
const removido = alunos.pop();   // podemos adicionar o valor removido a uma variavel
console.log(removido);
console.log(alunos);
```

E para remover do começo da lista, podemos utilizar o `shift()`. 

```
const removido = alunos.shift();
console.log(removido);
console.log(alunos);
```

### Removendo a partir do índice

Esse aqui não tem segredo, utilizamos o `delete` direto, mas parece que esse aqui, remove o item e deixa como undefined. 

```jsx
// removendo a partir do indice
delete alunos[1];   // vai ficar com valor empty
console.log(alunos);
```

<aside>
💡

*Se puxarmos valores utilizando indexação bem maior do que tem no array, não vai retornar erro, vai retornar undefined.*

</aside>

### Repartindo o Array

Podemos utilizar o slide, e adicionar os parametros. O primeiro parametro é de onde vai começar e onde vai terminar. Se temos um array de 7, e utilizamos (0, 4) vai deixar só os valores de dos index de 0 a 4. 

```jsx
console.log("REPARTIDO: ", alunos.slice(0, 3));
```

### Tipagem

Apenas checando a tipagem, e falando sobre tipagem. 

```jsx
console.log(typeof alunos); // vai retornar object, e não array
console.log(alunos instanceof Array);   // assim, vai retornar como True, pq é um array
alunos = 123;
console.log(alunos instanceof Array); // testando não sendo um array
```

---

## Aula 17 - Funções em JavaScript

Criar funções em JavaScript é tranquilo, para a forma convecional utilizamos um formato assim: 

```jsx
function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Matheus');
console.log(variavel);
```

Temos a opção de criar uma função anonima, que seria uma função criada dentro de algo, tipo uma variavel ou um evento de botão, criar uma função anonima. 

```jsx
// função anonima
const raiz = function(n) {
    return n ** 0.5;
};

console.log(raiz(9));
```

E também, temos a arrom function, eu não entendi muito bem, mas acho que vou ver isso mais vezes. 

```jsx
// Arrow Function
const raiz_1 = n => n ** 0.5;

console.log(raiz_1(9));
console.log(raiz_1(16));
console.log(raiz_1(25));
```

---

## Aula 18 - Objetos básicos

Aqui, criamos objetos com aquele sentido mesmo de dicionários em python 

```jsx
// forma certa de criar OBJETOS. Obs: usamos as {} para os objetos.
const pessoa1 = {
        nome: 'Matheus',
        sobrenome: 'Gomes',
        idade: 22
    };
    
    console.log(pessoa1.nome);
    console.log(pessoa1.sobrenome);
```

Podemos criar funções dentro desses objetos. Ai podemos chamar a função pelo objeto, com aquele mesmo raciocinio de POO: 

```jsx
const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 22,

    // criando função dentro para a pessoa falar suas info (Não precisa da palavra function aqui dentro)
    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`Minha idade atual é:${this.idade}`)
    },

    //Cada vez que chamar esse método, irá acrescentar uma idade 
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();                 // Matheus Gomes está falando oi...
pessoa1.incrementaIdade();      // Minha idade atual é:22
pessoa1.fala();                 // Matheus Gomes está falando oi...  
pessoa1.incrementaIdade();      // Minha idade atual é:23
```

---

## Aula 19 - Valores primitivos e valores por referência

Como valores primitivos temos:

VALORES PRIMITIVOS - Valores copiados

- String
- Number
- Boolen
- Undefined
- NULL (bigint, symbol)

Referência (mutável) - passados por referência

- Array
- object
- function

Copiando, ele sempre vai apontar pro lugar na memória, então independente, se eu mudar o 'b', ele vai mudar 'a' e vice versa 

```jsx
let a = [1,2,3];
let b = a;
console.log(a,b);

a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
```

Mas podemos deixar ele independente 

```jsx
let a = [1,2,3];
let b = [...a]; // valor independente
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
```

---

## Aula 20 - Função, array e objeto

Aqui começamos a ver o Fullstack, onde precisamos de um html para começar os exercicios. Agora algumas observações.

Para a maioria das interações entre o JS e o HTML, utilizamos o document, ele referencia o corpo todo do HTML, o objeto HTML.

Se temos uma tag html, um forms por exemplo, com uma classe ‘forms’, chamamos no JavaScript utilizando querySelector() e como parametro a classe ou id: 

```html
<form class="form" id="form" action="" method="get"></form>
```

```jsx
const form = document.querySelector('.form'); // Para classes
const form = document.querySelector('#form'); // Para IDs
```

E assim, podemos criar eventos para o form criado, pq agora temos ele numa variavel, então para o submit teremos: 

```jsx
//recebeEventoForm seria a função responsável pelo envio do forms
form.addEventListener('submit', recebeEventoForm);
```

E no caso de queremos adicionar algum valor na tela? Utilizamos o innerHTML. Com ele, podemos utilizar texto e tags html, se for apenas texto, podemos utilizar o innerText, que vamos ver mais para frente. Então se eu tenho uma `div` resultado, vou pegar essa div utilizando o querySelector, e vou atribuir no innerHTML o valor que eu quero:

```html
<div class="resultado"></div>
```

```jsx
const resultado = document.querySelector('.resultado');
resultado.innerHTML += `<p>${nome.value} ${peso.value} ${altura.value}</p>`;
```

Nesse caso, utilizei o `+=` então, ele vai adicionar vários `<p>`, mas se eu quiser substituir, é só utilizar o simbolo de atribuição mesmo.

- **código completo**
    
    ```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercícios</title>
    </head>
    <body>
        <form class="form" action="" method="get">
            <p>Nome: <input type="text" class="nome"></p>
            <p>Sobrenome: <input type="text" class="sobrenome"></p>
            <p>Idade: <input type="text" class="idade"></p>
            <p>Peso: <input type="text" class="peso"></p>
            <p>Altura: <input type="text" class="altura"></p>
            <button>Enviar!</button>
        </form>
        <div class="resultado"></div>
        <script src="js/script.js"></script>
    </body>
    </html>
    ```
    
    ```
    function meuEscopo () {
        const form = document.querySelector('.form');
        const resultado = document.querySelector('.resultado');
        const pessoas = [];
    
        function recebeEventoForm(evento) {
            evento.preventDefault();
    
            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');
    
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });
            console.log(pessoas);
            resultado.innerHTML += `<p>${nome.value} ${peso.value} ${altura.value}</p>`;
        }
        form.addEventListener('submit', recebeEventoForm);
    }
    meuEscopo();
    ```