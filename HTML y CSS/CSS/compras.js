let inputPrecio = document.getElementById("precio");
let compras = [];
let inputProducto = document.querySelector(".compra");
let productos = [];
let resultado = document.getElementById("resultado");
let miList = document.querySelector (".precio");
let miList2 = document.querySelector (".producto")

let agregarCompra = () => {
    let nuevaCompra = Number(inputPrecio.value);
    let miLi = document.createElement("li");
    miLi.innerHTML = nuevaCompra;
    miList.appendChild(miLi);
    
    compras.push(nuevaCompra);
       
    inputPrecio.value= "";
}


let agregarProducto = () => {
    let nuevoProducto = inputProducto.value;
    let miLi = document.createElement("li");
    miLi.innerHTML= nuevoProducto;
    miList2.appendChild(miLi);

    productos.push(nuevoProducto);
    
    inputProducto.value= "";
}

let botonAgregar = document.getElementById("agregar");
botonAgregar.addEventListener ("click", agregarCompra);
botonAgregar.addEventListener("click",agregarProducto);


let sumarCompras = () => {
    suma = 0;
    let i
    for (i = 0; i < compras.length; i++){
    suma = suma+compras[i];
    resultado.innerHTML ="$ " + suma;
    }
}

let botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", sumarCompras);


