/* 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
nombre completo (nombre y apellidos) de la persona a modo de string. */

let persona = {
    "nombre" : "Aaron",
    "apellidos" : "Soto Ruiz", 
    "edad" : 23,
    "dirección" : "23-alcalde",
    "ciudad" : "Tarragona", 
    "país" : "España", 
    "peso" : 60
};

const nombreCompl = (person) => {
    console.log(`${person.nombre} ${person.apellidos}`)
}

nombreCompl(persona);