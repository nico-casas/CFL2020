let readline = require ("readline-Sync");
let numero1 = readline.questionInt ("Ingrese un numero: ");
let numero2 = readline.questionInt ("Ingrese otro numero: ");
let suma=0
let contador

if (numero1>numero2){
    let aux=numero1;
        numero1=numero2;
        numero2=aux;
}
for (contador = numero1; contador <= numero2; contador ++ ){
    suma = suma + contador
    
}

console.log (suma)

