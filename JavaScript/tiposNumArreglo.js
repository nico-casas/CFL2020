let readline = require ("readline-sync");

let n = readline.questionInt ("Que cantidad de elmentos desea ingressar? ");

let elementos = new Array(n);
let indice;

for (indice=1; indice <=n; indice ++){
    elementos[indice] = readline.questionInt ("ingrese un numero: ");
}

let sumaPositivos=0;
let sumaNegativos=0;
let sumaDeCeros=0;

for (indice=1; indice <= n; indice ++){
    if (elementos[indice] == 0){
    sumaDeCeros = sumaDeCeros + 1;
    }
    if (elementos[indice] > 0){
    sumaPositivos = sumaPositivos + 1    
    }
    if (elementos[indice] < 0){
    sumaNegativos = sumaNegativos + 1
    }
}

console.log ("Los numeros positivos son: ", sumaPositivos);
console.log ("Los numeros negativos son: ", sumaNegativos);
console.log ("La cantidad de ceros son: ", sumaDeCeros);