/* 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 
3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]
 */

// Functions
const arrayCombined = (array1, array2) => {
    let arraycomb = array1.splice(0,array1.length).concat(
        array2.splice(0,array2.length)
        );
    console.log(arraycomb);
}

// Variables
let arrayUno = [1, 2, 3];

let arrayDos = [4, 5, 6];

// Call Functions
arrayCombined(arrayUno, arrayDos);