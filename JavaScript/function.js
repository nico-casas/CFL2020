let readline = require ("readline-sync");
let numero1 = readline.questionInt ("Ingrese el primer numero: ");
let numero2 = readline.questionInt ("Ingrese el segundo numero: ");
let operacion = readline.questionInt ("Ingrese 1 si desea sumar, 2 si desea restar: ");

let dibujarGuiones=(n)=>{
    let i;
    let linea = "-";
    for (i=0; i<=n; i++){
        linea = linea + "-"
    }
console.log (linea);
};

if (operacion == 1){
    dibujarGuiones(20)
    console.log (numero1 + numero2);
    dibujarGuiones(15)
}else{
    dibujarGuiones(10)
    console.log (numero1 - numero2);
    dibujarGuiones(5)
}
