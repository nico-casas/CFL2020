let divisores= (numeroIngr) =>{
    let contador;
    let divisores=0;
    let resto;
    for (contador=numeroIngr; contador>=1; contador --){
        resto = numeroIngr%contador;
       if (resto==0){
        divisores = divisores + 1
        }        
    }
    return divisores
}


let readline = require ("readline-Sync");
let numeroIngr = readline.questionInt ("Ingrese un numero: ")


console.log (divisores(numeroIngr))
