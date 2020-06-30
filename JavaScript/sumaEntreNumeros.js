let readline = require ("readline-Sync");
let numero1 = readline.questionInt ("Ingrese un numero: ");
let numero2 = readline.questionInt ("Ingrese otro numero: ");
let suma=0
let contador


for (contador = numero1; contador <= numero2; contador ++ ){
    suma = suma + contador
    
}

console.log (suma)

