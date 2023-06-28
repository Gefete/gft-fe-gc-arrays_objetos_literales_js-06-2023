/* 12. Crea un array que contenga al menos tres objetos con las mismas 
propiedades (al menos tres) y distintos valores. Crea una función que 
saque por consola el valor de una de las propiedades para todos los objetos. */

// Objetos
let per1 = {
    "nombre" : "Gerard",
    "apellido" : "Fernández",
    "edad" : 25
};
let per2 = {
    "nombre" : "Pedro",
    "apellido" : "Muñoz",
    "edad" : 20
};
let per3 = {
    "nombre" : "Juan",
    "apellido" : "Soto",
    "edad" : 27
};

//  Array
let arper = [per1, per2, per3];

// Function
const obtenerNombre = (array) => {
    for (let i = 0; i < array.length; i++) {
        let {nombre} = array[i];
        console.log(nombre);
    }
};

// Call Function
obtenerNombre(arper);

