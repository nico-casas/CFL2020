let readline = require ("readline-sync");
let primerNumero = readline.questionInt ("Ingrese un numero: ");
let segundoNumero = readline.questionInt ("Ingrese otro numero: ");

let contador;
let multiplicacion;

for (contador=1; contador <= segundoNumero; contador ++){
    multiplicacion= primerNumero*contador
    console.log (primerNumero + " x " + contador + " = " + multiplicacion )
    
}