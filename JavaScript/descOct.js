let readlineSync = require ("readline-sync");
let precio = readlineSync.question ("Informe el precio de su producto: ");
let cantidad = readlineSync.question ("Informe la cantidad de unidades que desea adquirir: ")
let precioTotal = (precio*cantidad)
let descuento = 0.15;
let precioConDesc = (precioTotal - (precioTotal*descuento));


let mes = readlineSync.question ("Ingrese el mes: ");
if (mes == "octubre" || mes == "Octubre"){
    console.log ("Usted debe pagar: " + precioConDesc)
}else{
    console.log ("Usted debe pagar: " + precioTotal)
};
