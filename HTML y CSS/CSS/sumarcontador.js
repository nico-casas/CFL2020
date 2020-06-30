/* 
/* let valorH1 = document.getElementById("valor");
valor= valorH1.value;
console.log (valor)
let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");

sumar.addEventListener("click", function(){
    valorH1++;
    console.log(valorH1);
}) */
"use strict"
let valorH1 = document.querySelector("h1");

let sumar = () => {
    valorH1.innerHTML++;
}
let botonSum = document.getElementById("sumar");
botonSum.addEventListener ("click", sumar);

let restar = () => {
    valorH1.innerHTML--;
}

let botonRes = document.getElementById("restar");
botonRes.addEventListener ("click",restar);

let valorASumar = document.querySelector("input");

let agregar = () => {
    
    valorH1.innerHTML = Number(valorH1.innerHTML) +  Number(valorASumar.value);
}

let botonAgreg = document.getElementById("agregar");
botonAgreg.addEventListener ("click", agregar);