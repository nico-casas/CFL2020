let readlineSync = require ("readline-sync");

let contador = 1;
let palabraClave;

while (contador <= 3 && palabraClave != "Eureka"){
    palabraClave = readlineSync.question ("Ingrese la palabra clave: ")
    if (palabraClave == "Eureka"){
        console.log ("Acertaste");
    }else{
    console.log ("Incorrecto, intente nuevamente.")
    }
    contador= contador + 1;

};

if (palabraClave != "Eureka"){
    console.log ("Se te acabaron las oportunidades!")
}


