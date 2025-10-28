// Tratamento e lançamento de erros (try, catch, thow)
// Não mostrar os erros para o usuário final. Colocar num arquivo de logs.
try{
    console.log(nãoExisto);
} catch(e){
    console.log("Variavel não existe");
    // console.log(e);
}

console.log("##########");
// __________________________________________________________________________________________________________________

// Aqui é para forçar um erro para o usuário, Tipo um raise do Python
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        // throw('x e y precisam ser números'); // Assim, ele vai retornar só a string quando estiver dentro de um Try Catch
        throw new ReferenceError('x e y precisam ser números'); // Assim, ele retornar a string e o erro JavaScript
    }
    return x + y;
}

// console.log(soma(1,2));
// console.log(soma(1,'2'));


try{
    console.log(soma(1,2));
    console.log(soma(1,'2'));
}catch(e){
    console.log(e);
}