/* 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en 
su lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los 
últimos dos elementos. Obtén el índice del elemento "Funciones" */

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

/* console.log(javascript1); */

// elimina "DOM" del array.
javascript1.shift();

console.log(`Eliminado del "DOM", array -> ${javascript1}`);

// Añade en su lugar el elemento "Objetos".
javascript1.unshift("Objetos");

console.log(`Añadido del "Objetos", array -> ${javascript1}`);

// Elimina el elemento "Arrays".
javascript1.pop();

console.log(`Eliminado del "Arrays", array -> ${javascript1}`);

// Añade en su lugar el elemento "ArraysDifíciles".
javascript1.push("ArraysDifíciles");

console.log(`Añadido del "ArraysDifíciles", array -> ${javascript1}`);

// Haz una copia del array que solo incluya los últimos dos elementos.
let arrayCopia = javascript1.slice(2);

console.log(`copia del array que solo incluya los últimos dos elementos -> ${arrayCopia}`);

// Obtén el índice del elemento "Funciones"
let valor = javascript1.indexOf("Funciones");

console.log(`"Funciones" se encuentra en la posicion -> ${valor}`);
