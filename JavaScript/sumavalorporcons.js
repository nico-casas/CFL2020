let valorcons = require('readline-sync');
let primernumero = valorcons.questionInt("ingrese el primer numero:");
console.log("el primer numero es", primernumero);
let segundonumero = valorcons.questionInt("ingrese el segundo numero:");
let resultado = (primernumero + segundonumero);
console.log("El resultado es:", resultado);