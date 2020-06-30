let readline = require ("readline-sync");

let cantElementos = readline.questionInt ("Ingrese la cantidad de elementos: ");

let elementos = new Array(cantElementos);

let suma=0;
let indice;

for (indice =0; indice < cantElementos; indice++){
    elementos[indice] = readline.questionInt ("Ingrese el elemento ", indice, ": ");
}

for (indice = 0; indice < cantElementos; indice++){
    console.log ("El elemento ", indice, " es ", elementos[indice], ".");
}

for (indice = 0; indice < cantElementos; indice++){
    suma= suma + elementos[indice];
}
console.log (suma)