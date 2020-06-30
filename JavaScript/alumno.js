let readline = require ("readline-sync");
let nombre;
let practica;
let teoria;
let problemas;

nombre = readline.question ("Ingrese su nombre: ");

while (nombre != "" ){
    practica = readline.questionInt ("Ingrese su nota de practica: ");
    teoria = readline.questionInt ("Ingrese su nota teorica: ");
    problemas = readline.questionInt ("Ingrese su nota de problemas: ");
    if (practica>-1 && practica < 11 && teoria > -1 && teoria < 11 && problemas > -1 && problemas < 11){
    console.log (nombre, " Su nota es: ", practica*0.1 + teoria*0.4 + problemas * 0.5);
    nombre = readline.question ("Ingrese su nombre: ");
    }else{
        console.log ("ERROR");
        nombre = readline.question ("Ingrese su nombre: ");
    }
}    