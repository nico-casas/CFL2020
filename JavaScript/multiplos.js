let contador;
let resto2 = 0;
let resto3 = 0;

for(contador=1; contador<=100; contador++){
    resto2 = contador % 2
    resto3 = contador % 3
    if (resto2 == 0 || resto3 == 0){
        console.log (contador)
    }
}    
