let readlineSync = require ("readline-Sync");
let sueldo = readlineSync.question ("Cual es su salario: ");
let aumento1 = sueldo * 0.20;
let aumento2 = sueldo * 0.10;
let aumento3 = sueldo * 0.05;
let salarioAumento1 = sueldo + aumento1

if (sueldo > 25000){
    console.log ("Usted no tiene aumento, va a seguir cobrarndo: " + sueldo)
    if (sueldo > 20000)
    console.log ("Su aumento es de: " + aumento3 + ". El proximo mes va a cobrar: " + salarioAumento3)
    if (sueldo > 15000)
    console.log ("Su aumento es de: " + aumento2 + ". El proximo mes va a cobrar: " + salarioAumento2)
}else{
    console.log ("Su aumento es de: " + aumento1 + ". El proximo mes va a cobrar: " + salarioAumento1)
}