let readline = require ("readline-sync");
let dia = readline.questionInt ("Ingrese el dia: ");
let mes = readline.question ("Ingrese el mes: ");
let año = readline.questionInt ("Ingrese el año: ");

let meses = new Array(12);
meses[0]=31;
meses[1]=28;
meses[2]=31;
meses[3]=30;
meses[4]=31;
meses[5]=30;
meses[6]=31;
meses[7]=31;
meses[8]=30;
meses[9]=31;
meses[10]=30;
meses[11]=31;

let mesesBis = new Array(12);
mesesBis[0]=31;
mesesBis[1]=29;
mesesBis[2]=31;
mesesBis[3]=30;
mesesBis[4]=31;
mesesBis[5]=30;
mesesBis[6]=31;
mesesBis[7]=31;
mesesBis[8]=30;
mesesBis[9]=31;
mesesBis[10]=30;
mesesBis[11]=31;

//let i;
let suma=0;

let calcularDias = (mesIngresado,largo) =>{
    for(let i= mesIngresado-1; i<largo; i++){
        let suma = 0
        suma = suma + restoMeses[i]
    }
    suma =suma - dia;
    console.log (suma);
}

if (año%4 != 0){
    calcularDias (mes,meses)
}else if (año%100 != 0){
    calcularDias (mes,mesesBis)
}else if (año%400 != 0){
    calcularDias (mes,meses)
}else{
    calcularDias (mes,mesesBis)
}


