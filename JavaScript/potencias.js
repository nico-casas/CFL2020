let potencia = (base,exponente) =>{
    if (exponente==0){
        return 1
    }else{
        let multiplicacion=1;
        let contador;
        for (contador=1; contador<=exponente; contador++){
            multiplicacion = multiplicacion*base
        }
        return multiplicacion
    }
}

let readline = require ("readline-sync");
let base = readline.questionInt ("Ingrese la base: ");
let exponente = readline.questionInt ("Ingrese el exponente: ");

while (exponente< 0){
    exponente = readline.questionInt ("Por favor, ingrese un exponente mayor o igual a cero: ");
}

console.log ("El resultado es: ",potencia(base,exponente))
