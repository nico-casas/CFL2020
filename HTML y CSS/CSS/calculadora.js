let botonCero = document.getElementById("0");
botonCero.addEventListener ("click", function(e){
    agregarNum(botonCero.innerHTML);
})

let botonUno = document.getElementById("1");
botonUno.addEventListener ("click", function(e){
    agregarNum(botonUno.innerHTML);
})

let botonDos = document.getElementById("2");
botonDos.addEventListener ("click", function(e){
    agregarNum(botonDos.innerHTML);
})

let botonTres = document.getElementById("3");
botonTres.addEventListener ("click", function(e){
    agregarNum(botonTres.innerHTML);
})

let botonCuatro = document.getElementById("4");
botonCuatro.addEventListener ("click", function(e){
    agregarNum(botonCuatro.innerHTML);
})

let botonCinco = document.getElementById("5");
botonCinco.addEventListener ("click", function(e){
    agregarNum(botonCinco.innerHTML);
})

let botonSeis = document.getElementById("6");
botonSeis.addEventListener ("click", function(e){
    agregarNum(botonSeis.innerHTML);
})

let botonSiete = document.getElementById("7");
botonSiete.addEventListener ("click", function(e){
    agregarNum(botonSiete.innerHTML);
})

let botonOcho = document.getElementById("8");
botonOcho.addEventListener ("click", function(e){
    agregarNum(botonOcho.innerHTML);
})

let botonNueve = document.getElementById("9");
botonNueve.addEventListener ("click", function(e){
    agregarNum(botonNueve.innerHTML);
})

let botonSuma = document.getElementById("sum");
let botonResta = document.getElementById("rest");
let botonMult = document.getElementById("mult");
let botonDivi = document.getElementById("divi");
let botonIgual = document.getElementById("igual");

let primNum = document.querySelector (".prim");


let agregarNum = (i) => {
    console.log("hola");
    primNum.innerHTML = i;
    console.log(i);
}



let operac = document.querySelector (".oper");

let sumar = () => {
    result = primNum + segNum
}
let restar = () => {
    result = primNum - segNum
}
let multiplicar = () => {
    result = primNum * segNum
}
let dividir = () => {
    result = primNum / segNum
}

/* let resolver = () => {
    if ()
} */