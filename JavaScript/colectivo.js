let readline = require ("readline-sync");
let llegoCole = readline.question ("Llego el colectivo?")
let pregunta = 1

while (pregunta < 5 && llegoCole == "no"){
    llegoCole = readline.question ("Llego el colectivo?")
    pregunta = pregunta + 1
}
if (pregunta >= 5){
    console.log ("Anda a tu casa.")
}else{
    console.log ("Subite")
}