//OBJETOS (Básico)
//_____________________________________________________________________________________________________________

// // Forma Leiga
// const nome01 = 'Matheus';
// const sobrenome01 = 'Gomes';
// const idade01 = 22;
// const nome02 = 'Matheus';
// const sobrenome02 = 'Gomes';
// const idade02 = 22;

//_____________________________________________________________________________________________________________

// // forma certa de criar OBJETOS. Obs: usamos as {} para os objetos.
// const pessoa1 = {
    //     nome: 'Matheus',
    //     sobrenome: 'Gomes',
    //     idade: 22
    // };
    
    // console.log(pessoa1.nome);
    // console.log(pessoa1.sobrenome);

//_____________________________________________________________________________________________________________

// // ainda sim, vamos precisar ter muito trabalho, então o certo é fazer uma função. E criaremos uma fabrica de pessoas 
// function criaPesosa (nome, sobrenome, idade){
    //     return {
        //         nome: nome,
        //         sobrenome: sobrenome,
        //         idade: idade
        //     };
        // }
        
        // const pessoa1 = criaPesosa('Matheus', 'Gomes', 22);
        // const pessoa2 = criaPesosa('Maria', 'Helena', 5);
        // const pessoa3 = criaPesosa('Roberto', 'Ribeiro', 12);
        // const pessoa4 = criaPesosa('Thiago', 'SIlva', 42);
        // const pessoa5 = criaPesosa('João', 'Brito', 34);
        
        // console.log(pessoa1.idade);

//_____________________________________________________________________________________________________________

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

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
