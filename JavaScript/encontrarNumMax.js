let readline = require ("readline-sync");

let numero = readline.questionInt ("Ingrese un numero: ");
let numeroMax = numero

while (numero != 0){
    numero = readline.questionInt("Ingrese otro numero: ");
    if (numero > numeroMax){
        numeroMax = numero    
    }
}
console.log (numeroMax)