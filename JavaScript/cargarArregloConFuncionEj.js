let readline = require ("readline-sync");

let numeros = new Array(5);
let nombres = new Array(3);

let indice;

let cargarArreglo = (arreglo,tipoDeDato) => {
        if (tipoDeDato == "number"){
        for (indice = 0; indice < arreglo.length; indice ++){
        arreglo[indice]= readline.questionInt ("ingrese un numero: ")
        }
    }else{
        for (indice = 0; indice < arreglo.length; indice ++){
        arreglo[indice]= readline.question ("ingrese un nombre: ")
        }
    }
}

let mostrarArreglo = (arreglo) => {
    for (indice=0; indice < arreglo.length; indice ++){
        console.log (arreglo[indice])
    }
}


cargarArreglo (numeros,"number");
cargarArreglo (nombres,"aaads");

mostrarArreglo (numeros);
mostrarArreglo (nombres);