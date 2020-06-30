

/* let mostrarDiv = () => {
    let div = document.getElementById("miDiv");
    div.classList.toggle("ocultar");
}

let boton = document.getElementById ("miBoton");
boton.addEventListener ("click", function (e){
    mostrarDiv()
});
 */


let listaDivs = document.getElementsByClassName ("miDiv2");
let listaBotones = document.querySelectorAll("button");

let mostrarUOcultar = (i) => {
    listaDivs[i].classList.toggle("ocultar");
}

for (let i = 0; i < listaBotones.length; i++) {
    listaBotones[i].addEventListener("click", function (e) {
        mostrarUOcultar(i)
    })
}
