let readline = require ("readline-sync");

let longitudDeseada = readline.questionInt ("Cuantos elementos desea tener?");

let nombres = new Array (longitudDeseada);

let indice;
for (indice = 0; indice < longitudDeseada; indice ++){
    nombres [indice] = readline.question ("Ingrese un nombre: ");
}

for (indice=0; indice < longitudDeseada; indice ++){
    console.log ("Nombre: ", nombres[indice]);
}