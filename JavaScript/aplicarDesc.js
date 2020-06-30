let readline = require ("readline-sync")
let precio = readline.questionFloat ("Ingrese el precio del producto: ")
let cantidad = readline.questionInt ("Cuantas unidades desea adquirir?")
let total = precio*cantidad

if (total > 1000){
    console.log ("Usted debe pagar: ", total * 0.9, " pesos.")
}else{
    console.log ("Usted debe pagar: ", total, " pesos.")
}