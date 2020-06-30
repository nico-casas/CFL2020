let readline = require ("readline-sync");

let calcular = (numero1, numero2, operacion) =>{
    let resultado;
    if (operacion==1){
    resultado = numero1 + numero2;
    }else{
    resultado = numero1 - numero2;
}
    return resultado;
}

let numero1 = readline.questionInt ("Ingrese el numero 1: ");
let numero2 = readline.questionInt ("Ingrese el numero 2: ");
let operacion = readline.questionInt ("Si desea sumar ingrese 1, si desea restar ingrese 2");

let res = calcular (numero1, numero2, operacion);
console.log (res);
console.log (calcular (4,8,1));