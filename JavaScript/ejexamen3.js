/* function buscarMax(vector){
    let maximo=0;
    let indice;
    for(indice =0; indice < vector.length; indice++){
        if(vector[indice] > maximo){
            maximo = vector[indice];
        }
    }
    return maximo
}

let arreglo = [4,5,8,3,-1,0,3];
console.log (buscarMax(arreglo)); */


function obtenerPosicion(arreglo, stringIngresado){
    let indice=0;
    while(indice < arreglo.length){
        if(arreglo[indice] == stringIngresado){
            return indice+1
        }
    indice++
    }
}

let arreglo = ["juan","roman","riquelme"]

console.log (obtenerPosicion (arreglo,"juan"))