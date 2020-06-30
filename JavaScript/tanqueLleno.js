let readline = require ("readline-sync");
let estaLleno = readline.question ("El tanque esta lleno? ");

while (estaLleno == "No"){
    estaLleno = readline.question ("El tanque esta lleno? ")
}
console.log ("Ok");