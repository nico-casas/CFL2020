//Algoritmo Secreto
let rl = require ("readline-sync");
let ocu;
let elem = rl.questionInt ("Ingrese tamaño: ");
let arr = new Array(elem);

function cargar (v,l) {
    for (let i=0; i<l; i++){
        v[i]=Math.floor (Math.random()*100);
    }
}

function mostrar (v,l) {
    for (let i=0; i<l; i++){
        console.log(v[i]);
    }
}

function metodo (v,l,n) {
    let oc=0;
    for (let i=0; i<l; i++){
        if (v[i]==n){
            oc++
        }
    }
    return oc
}

cargar (arr,elem);
mostrar (arr,elem);
nro = rl.questionInt ("Ingrese numero: ");
ocu= metodo (arr,elem,nro);
console.log ("El numero "+nro+" se repite "+ocu+ " veces.");

