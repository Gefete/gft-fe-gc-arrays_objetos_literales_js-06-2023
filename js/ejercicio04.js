/*  Crea una string, pásala a array y saca por consola la versión invertida de la original.
Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH" */

// Variable
let array = "Hola".split('');

// Result
array.reverse();
console.log(array.join(''));
