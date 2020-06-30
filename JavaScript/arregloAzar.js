let numeros = new Array(10);

let numeroAlAzar = tope => {
    return Math.floor(Math.random()*tope)
}

indice=0

for(indice=0; indice <10; indice++){
    numeros[indice]=numeroAlAzar(100);
    console.log (numeros[indice]);
}