let readline = require ("readline-sync");

let vector1 = new Array(3);
let vector2 = new Array(3);
let vector3 = new Array(3);
let vector4 = new Array(3);

let vectorMult = new Array(3)

let cargarArreglo = (arreglo) =>{
    let indice;
    for (indice = 0; indice < arreglo.length; indice++ ){
        arreglo[indice]= readline.questionInt ("Ingrese el valor del arreglo : ")
    }
}

let multiplicarVectores = (arreglo,vec1,vec2,vec3,vec4) => {
    let indice;
    for (indice=0; indice < arreglo.length; indice++)
    arreglo[indice]=vec1[indice]*vec2[indice]*vec3[indice]*vec4[indice]
}

cargarArreglo (vector1);
cargarArreglo (vector2);
cargarArreglo (vector3);
cargarArreglo (vector4);

multiplicarVectores(vectorMult,vector1,vector2,vector3,vector4);

console.log (vectorMult)

