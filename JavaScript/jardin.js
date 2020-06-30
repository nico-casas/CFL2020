let readline = require ("readline-sync");

let cantAlumnos = readline.questionInt ("Ingrese la cantidad de alumnos: ");

if (cantAlumnos <= 30 ){
    console.log ("El aula a utilizar será la amarilla.");
}if (cantAlumnos > 30 && cantAlumnos <= 35){
    console.log ("El aula a utilizar será la verde.");
}if (cantAlumnos > 35 && cantAlumnos <= 40){
    console.log ("El aula a utilizar será la azul.");
}if (cantAlumnos > 40){
    console.log ("No hay aulas para esa cantidad de alumnos.")
}