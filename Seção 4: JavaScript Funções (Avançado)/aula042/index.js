// Funções

falaOi();
// Declaração de função (Function hoisting -> de modo que eleve a declaração, podendo chamar antes e depois de definir a função)
function falaOi() {
    console.log("Oie");
}


// Firts-class objects (Objetos de primeira classe -> Pode ser tratar as funções como dados)
// Function expression
const souUmDado = function () {
    console.log("Sou um dado");
};

souUmDado();

// Outro exemplo, é executar funcao dentro de funcao por parametro
function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);


// ############################################################################################################

// Arrow function
// function expression soq bem mais curta
const funcaoArrow = () => {
    console.log('SOu um arrow function');
};

funcaoArrow();


// ############################################################################################################

// Dentro de um objeto
const obj = {
    falar() {   // Posso criar a função assim tambem
    // falar: function() {
        console.log("Falar");
    }
};

obj.falar();