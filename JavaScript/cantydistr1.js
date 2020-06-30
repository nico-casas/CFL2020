let readline = require ("readline-sync");
let valorIngr;
let valorPos = 0;
let todosVal = 0;
valorIngr = readline.question ("Ingrese un valor: ")
if (valorIngr == 0){
    console.log ("Usted no ingresó ningun numero:")
}else{
    while(valorIngr != 0){
        todosVal = todosVal + 1
    
        if (valorIngr > 0){
        valorPos = valorPos + 1
    }
    valorIngr = readline.question ("Ingrese un valor: ")   
}

console.log ("Cantidad de numeros positivos ingresados: " + valorPos);
console.log ("Usted ingreso " + (valorPos/todosVal)*100 + " % de numeros positivos.");
}