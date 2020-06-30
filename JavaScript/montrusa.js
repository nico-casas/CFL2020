let readLine = require ("readline-Sync");
let edad = readLine.questionInt ("Ingrese su edad: ");
let altura = readLine.questionFloat ("Ingrese su altura: ");

if (edad>= 18 && altura >= 1.7){
    console.log ("Puede pasar")
}else{
    console.log ("No puede pasar")
}