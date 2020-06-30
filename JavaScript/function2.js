let readline = require ("readline-sync");

let gustos = (edad, color) =>{
    console.log ("Tu edad es ", edad, " años. Tu color favorito es el ", color, ".");
}

let edad= readline.questionInt ("Que edad tenes?");
let color = readline.question ("Cual es tu color favorito?");

gustos(edad,color);