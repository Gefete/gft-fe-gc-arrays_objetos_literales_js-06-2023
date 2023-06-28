/* 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún 
elemento y lo saque por consola. */

javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript2 = ["Objetos", "Arrays", "ParseInt"];

// Solo esta pensado para encontrar la primera coincidencia y terminar
const repetido = (array1, array2) => {
    let element;
    for (let i = 0; i < array2.length; i++) {
        /* Si quisieramos llevar un registro de todos los repetidos y 
        posiciones crearia 1 array que guarde posicion y contenido, 
        se removeria el "break" ya que va a parar el bucle a la primera coincidencia*/
        if (array1.find(e => e === array2[i]) != undefined) {
            element=array2[i];
            console.log(`Elemento repetido en el 2n array pasado por parametro, en la posicion [${i}] : "${element}"`)
            break;
        }
    }
};

let ar = "Arrays";
repetido(javascript1, javascript2);
/* console.log(repetido); */