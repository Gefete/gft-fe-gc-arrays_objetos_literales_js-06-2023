/* 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
uno para pares y otro para impares. A continuación, saca por consola ambos arrays
resultantes concatenados. */

// Variables
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function
const division = [array.filter((param1) => {
    return param1 % 2 ==0
}), array.filter((param1) => {
    return param1 % 2 > 0
})];

console.log(division);


/* 
    Originalmente se implemento esta funcion
    y tras investigar como funcionaba filter
    por un ejemplo de w3Schools 
    https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter
    se opto por el resultado final

    const division = (param1) => {
    let pares = [];
    let impares = [];
    
    for (let i = 0; i < param1.length; i++) {
        if (param1[i] % 2 == 0) {
            pares.push(param1[i]);
        }else if(param1[i] % 2 > 0){
            impares.push(param1[i]);
        }
    }
    console.log(pares, impares);
}

// Call Function
division(array);
 */