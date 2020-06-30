let readline = require ("readline-Sync");
let primerNumero = readline.questionInt ("Ingrese el primer numero: ");
let segundoNumero = readline.questionInt ("Ingrese el segundo numero: ");
let tercerNumero = readline.questionInt ("Ingrese el tercer numero: ");

if (primerNumero > segundoNumero){
    if (primerNumero > tercerNumero){
        console.log ("El "+ primerNumero+ " es el mayor." )
    }else{
        console.log ("El "+ tercerNumero + " es el mayor.")
    }
}else{
    if (segundoNumero > tercerNumero){
        console.log ("El "+ segundoNumero + " es el mayor.")
    }else{
        console.log ("El " + tercerNumero + " es el mayor.")
    }
}