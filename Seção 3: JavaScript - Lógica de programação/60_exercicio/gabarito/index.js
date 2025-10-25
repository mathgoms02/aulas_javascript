// Algumas formas

function max(x, y){
    if (x > y){
        return x;
    }
    return y;
}

// Utilizando operador ternário também, igual vc fez
// Mas vou fazer arrow function

const max_number = (x, y) => (x >= y ? x : y);

console.log(max_number(10, 30));