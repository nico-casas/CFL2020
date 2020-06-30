let readline = require ("readline-sync");
let texto = readline.question ("Ingrese un texto: ")

let textoMayuscula = texto.toUpperCase();
console.log (textoMayuscula)

let arregloAbecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let arregloOcurrencia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let arregloTexto = textoMayuscula.split("");
console.log (arregloTexto)
let letra;
for(let i = 0; i = arregloTexto.length; i++){
    cantidad = metodo (arregloTexto, arregloTexto.length, arregloAbecedario[i]);
    console.log (cantidad)
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
//for (i=0; i<cadena.length; i++){
//}
