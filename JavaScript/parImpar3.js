let readline = require ("readline-Sync");
let numeroIngresado = readline.question ("Ingrese un numero por favor: ");
let numeroDiv = numeroIngresado % 2;

while (numeroIngresado <= 0){
    numeroIngresado = readline.question("Ingrese un numero valido: ");
    numeroDiv = numeroIngresado % 2;
}
if (numeroDiv == 0){
    console.log ("Su numero es par.");
}else{
    console.log ("Su numero es impar.");
    }

