let readline = require ("readline-sync");

let tamano = readline.questionInt ("Ingrese la cantidad de alumnos: ")

let nombreAlumno = new Array(tamano);
console.log (nombreAlumno.length)
let notasAlumnosT1 = new Array(tamano);
let notasAlumnosT2 = new Array(tamano);
let notasAlumnosT3 = new Array(tamano);

let cargarNombreYNotas = (nombre, nota1, nota2, nota3) => {
    let indice
    for (indice=0;indice<nombre.length; indice++){
        nombre[indice]= readline.question ("Ingrese el nombre del alumno: ");
        nota1[indice]= readline.questionInt ("Ingrese la nota del primer trimestre: ")
        nota2[indice]= readline.questionInt ("Ingrese la nota del segundo trimestre: ")
        nota3[indice]= readline.questionInt ("Ingrese la nota del tercer trimestre: ")
    
    }        
   
}

let mostrarNombresYNotas = (nombre, nota1, nota2, nota3) => {
    let indice
    for (indice=0;indice<nombre.length; indice++)[
        console.log ("El alumno ", nombre[indice], "tiene promedio ", ((nota1[indice]+nota2[indice]+nota3[indice])/3), ".")
    ]
}

cargarNombreYNotas (nombreAlumno, notasAlumnosT1,notasAlumnosT2,notasAlumnosT3)
mostrarNombresYNotas (nombreAlumno, notasAlumnosT1,notasAlumnosT2,notasAlumnosT3)