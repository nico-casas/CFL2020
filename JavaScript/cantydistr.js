let readline = require ("readline-sync");
let valorIngr;
let valorPos = 0;
let todosVal = 0;

while(valorIngr != 0){
        valorIngr = readline.question ("Ingrese un valor: ")
        if (valorIngr != 0){
            todosVal = todosVal + 1;
        }
        if (valorIngr > 0){
        valorPos = valorPos + 1
    }
  
}
console.log ("Cantidad de numeros positivos ingresados: " + valorPos);
if (valorPos == 0){
    console.log ("Usted ingresó 0% de numeros positivos.")
}else{
    console.log ("Usted ingreso " + (valorPos/todosVal)*100 + " % de numeros positivos.");
}