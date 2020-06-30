let readline = require ("readline-Sync");
let usuario = readline.question ("Ingrese su usuario: ");
let clave = readline.question ("Ingrese su clave: ");

if (usuario == "Juan" && clave == "claveJuan"){
    console.log ("Bienvenido!")
}else{
    console.log ("Acceso denegado!")
}

