let readline = require ("readline-sync");

let numeros = new Array (5);

let indice;
for (indice =0; indice < 5 ; indice++){
    numeros[indice]= readline.questionInt ("Ingrese un valor: ");
}

for (indice =0; indice < 5 ; indice++){
    console.log ("El valor en la posicion ", indice, " es ", numeros[indice], ".");
}
