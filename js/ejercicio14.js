/* 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
saca por consola todas las recetas de tu array */

// Objetos
let rect1 = {
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
};

let rect2 = {
    "nombre" : "Macarrones con atún y tomate" ,
    "tiempo" : 0.30 ,
    "ingredientes" : ["400 gr de macarrones", 
    "800 g. de tomate triturado", 
    "200 g. de atún al natural en conserva", 
    "Sal",
    "1 cebolla grande",
    "1 cucharadita de azúcar (opcional)",
    "Aceite de oliva virgen extra",
    "Queso rallado tipo Gouda, Edam u otro que funda bien"
]
};

let rect3 = {
    "nombre" : "ensalada de pasta" ,
    "tiempo" : 0.20 ,
    "ingredientes" : ["250 g. de pasta en este caso Mafalda corta Garofalo", 
    "4 tomates", 
    "4 huevos camperos", 
    "Unas 20 hojas de albahaca fresca (la mitad para mezclar y la otra mitad para decorar)",
    "40 ml. de vinagre de manzana",
    "40 g. de rúcula",
    "150 g. de queso Mozarella",
    "175 g. de aceitunas sin hueso (rellenas de lo que queráis, por ejemplo anchoa)",
    "40 ml. aceite de oliva virgen extra",
    "Sal (al gusto de cada casa)"
]
};

let recetas = [rect1, rect2, rect3];

// Funciones
const inforeceta = (obj) => {
    console.log(obj.nombre);
    console.log(`${obj.tiempo}
    Ingredientes:`);
    for (let i = 0; i < obj.ingredientes.length; i++) {
        console.log(`* ${obj.ingredientes[i]}`);
    }
}

const recetasInfoExport = (recetas) => {
    for (let i = 0; i < recetas.length; i++) {
        inforeceta(recetas[i]);
        console.log("----");
    }
}

// Call function
recetasInfoExport(recetas);