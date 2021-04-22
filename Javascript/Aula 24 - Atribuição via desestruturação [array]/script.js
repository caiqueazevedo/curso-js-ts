let a = 'a';
let b = 'b';
let c = 'c';

const values = [b, c, a];
[a, b, c] = values;

//console.log(a, b, c)

// ----------------
// ...rest operator / spread operator

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [number01, number02, number03, ...rest] = arrayNumber; // ...rest operator - Recebe todo o restante do array 
//console.log(number01, number02, number03, rest)

//                            listas
//                    0          1          2      
//
//                      índices das listas
//                 0  1  2    0  1  2    0  1  2
//
//                            values
//                 1  2  3    4  5  6    7  9  9
const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [lista01, lista02, lista03] = numbers;

console.log('----- Listas -----')
console.log(lista01, lista02, lista03); // checando os valores de cada lista
console.log('----- Índice [2] da lista[0] -----')
console.log(lista01[2]); // checando o índice 2 da lista 1