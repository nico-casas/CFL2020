let readlineSync = require ("readline-Sync");
let sueldo = readlineSync.questionInt ("Cual es su salario: ");
let aumento1 = sueldo * 0.20;
let aumento2 = sueldo * 0.10;
let aumento3 = sueldo * 0.05;
let salarioAumento1 = sueldo + aumento1;
let salarioAumento2 = sueldo + aumento2;
let salarioAumento3 = sueldo + aumento3; 

if (sueldo <= 15000){
    console.log ("Su aumento es de: " + aumento1 + ". El proximo mes va a cobrar: " + salarioAumento1)
}else{
    if (sueldo <= 20000){
        console.log ("Su aumento es de: " + aumento2 + ". El proximo mes va a cobrar: " + salarioAumento2)
    }else{
        if (sueldo <= 25000){
            console.log ("Su aumento es de: " + aumento3 + ". El proximo mes va a cobrar: " + salarioAumento3)
        }else{
            console.log ("Su sueldo no tiene aumento, sigue cobrando "+sueldo)}
    }
}