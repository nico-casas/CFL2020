let readline = require ("readline-Sync");
let numeroIngresado = readline.question ("Ingrese un numero por favor: ");
numeroDiv = numeroIngresado % 2;

if (numeroIngresado == 0){
    console.log ("Su numero es un 0.");
}else{
    if (numeroDiv == 0){
        console.log ("Su numero es par.");
    }else{
        console.log ("Su numero es impar.");
    }

}