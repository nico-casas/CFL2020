let readlineSync = require ("readline-sync")
let precio = readlineSync.question ("Informe el precio de su producto: ");
let descuento = 0.15;
let precioConDesc = (precio - (precio*descuento));

//let readlineSync = require ("readline-sync");
//let mes = readlineSync.question ("Ingrese el mes: ");
let mes = "Noviembre"
if (mes == "Octubre"){
    console.log ("Usted debe pagar: " + precioConDesc)
}else{
    console.log ("Usted debe pagar: " + precio)
};

//en este ejemplo el mes lo ingresamos nosotros modificando la variable