let readline = require ("readline-sync");
let tamaño = readline.questionInt ("Ingrese el tamaño del arreglo: ");

let arregloV1 = new Array(tamaño);
let arregloV2 = new Array(tamaño);

let indice;

let cargarArreglo = (arreglo) =>{
        for (indice = 0; indice < arreglo.length; indice++){
        arreglo[indice]= readline.questionInt ("Ingrese el valor: ");
       }
}

let suma= 0

let calcularProductoEscalar = (arreglo1,arreglo2) => {
    for (indice = 0; indice < arreglo1.length; indice++){
    let multiplicacion = arreglo1[indice]*arreglo2[indice];
    suma = multiplicacion + suma
    }
}

cargarArreglo(arregloV1);
cargarArreglo(arregloV2);
calcularProductoEscalar (arregloV1,arregloV2)
console.log ("El resultado del producto escalar es: ",suma)