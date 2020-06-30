let readline = require ("readline-Sync");
let nota, suma, promedio, contador;
suma=0;

for (contador = 1; contador <11; contador ++){
    nota= readline.questionInt ("Ingrese la nota " + contador + ": ");
    suma = suma + nota
}

promedio = suma/10
console.log ("Su promedios es: "+ promedio);