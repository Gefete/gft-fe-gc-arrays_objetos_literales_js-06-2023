/* 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del 
array y lo saque por consola. */



// Functions
const longarray = (params) => {
    console.log(params.length);
}

const aleatorio = (params) => {
    // Returns a random integer from 1 to 10:
    let numberselect = Math.floor(Math.random() * params.length);
    console.log(params[numberselect]);
}

// Variables
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// Call function
longarray(array);
aleatorio(array);
