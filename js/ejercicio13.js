/* 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola 
el nombre, el tiempo y una lista de los ingredientes. */

let receta = {
    "nombre" : "churros caseros" ,
    "tiempo" : 0.30 ,
    "ingredientes" : ["250 g. harina de trigo todo uso (también se puede hacer con harina de panadería)", 
    "1 cucharadita de sal (8 gramos aproximadamente)", 
    "Aceite de oliva suave para freír o aceite de girasol", 
    "Una churrera manual o una manga pastelera con boca fina",
    "250 g. de agua",
    "Azúcar para espolvorear",
    "Papel absorbente de cocina"
]
}

const inforeceta = (obj) => {
    console.log(obj.nombre);
    console.log(`${obj.tiempo}
    Ingredientes:`);
    for (let i = 0; i < obj.ingredientes.length; i++) {
        console.log(`* ${obj.ingredientes[i]}`);
    }
}

inforeceta(receta);