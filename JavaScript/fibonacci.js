let calcularFibonacci = (n) =>{
    let resultado = 1
    if (n == 0){
        resultado = 0
    } else if (n == 1){
        resultado = 1
    } else {
        resultado = calcularFibonacci (n-1) + calcularFibonacci (n-2)
        
    }
    console.log (resultado)
    return resultado
}

let readline = require ("readline-sync");
let n = readline.questionInt ("Ingrese un numero: ");

console.log (calcularFibonacci(n))