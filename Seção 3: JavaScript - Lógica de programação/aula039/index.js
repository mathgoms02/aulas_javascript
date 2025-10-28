// Tratamento e lançamento de erros (try, catch, finally)
try{
    // executada quando não há erros
}catch(e){
    // Executado quando acontece um erro
}finally{
    // Sempre
}

// Exemplo de uso
try{
    console.log("Abrir um arquivo");
    console.log(a);
    console.log("Manipulei o arquivo e gerei erro");
    console.log("Fechei o arquivo");
}catch(e){
    console.log("Tratando um erro");
}finally{
    console.log("FINALLY: Eu sempre sou executado");
}

console.log("####################3");
// __________________________________________________________________________________________________________________


// Mais exemplos
function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date");
    }

    if (!data){
        data = new Date();
    }

    // Retornando o Time no nosso TimeString e com dois digitos
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970 12:58:12');
    // const hora = retornaHora();      // Pegar hora atual
    // const hora = retornaHora(data);  // Pegar hora marcada
    const hora = retornaHora(11);       // Gerando o erro
    console.log(hora);
}catch(e){
    // Tratar erro
}finally{
    console.log("Tenha um bom dia!")
}