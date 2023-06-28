/* 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente 
a tres de esas propiedades. */

/* Fuentes: https://www.freecodecamp.org/espanol/news/desestructuracion-de-arreglos-y-objetos-en-javascript/ */

let persona = {
    "nombre" : "Aaron",
    "apellidos" : "Soto Ruiz", 
    "edad" : 23,
    "dirección" : "23-alcalde",
    "ciudad" : "Tarragona", 
    "país" : "España", 
    "peso" : 60
};

let { apellidos, edad, peso } = persona;

console.log(`apellido: ${apellidos}, edad: ${edad}, peso: ${peso}`);
