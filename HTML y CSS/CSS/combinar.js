/* "use strict";

let saludar = () => {
    console.log ("Hola")
}

let contador = 0

let contarClick = () => {
    contador++;
    alert("Hiciste "+contador+ " clicks.")
}

let mih1 = document.get ("h1");
mih1.innerHTML ="soy un h1 modificado en js" */

let cambiarH1 = () => {
    let miImput = document.getElementById("nombre");
    let nodoH1 = document.getElementById("miH1");

    nodoH1.innerHTML = miImput.value;
}