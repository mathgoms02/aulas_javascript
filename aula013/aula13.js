// Exercício de variável
// Tranformar A = B | B = C | C = A 

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let temp = '';

// temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

console.log(varA, varB, varC);

// método que ele usou, diferente

// [varA, varB, varC] = [varB, varC, varA]