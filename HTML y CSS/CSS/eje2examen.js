let botonGuardar = document.getElementById("botonGuardar");
let tareas = [];
let miLista = document.querySelector(".lista");
let tareaIngr = document.getElementById("tareaIngr");
let botonVaciar = document.getElementById("vaciarLista");

let agregarTareas = () => {
    let nuevaTarea = tareaIngr.value;
    let miLi = document.createElement("li");
    miLi.innerHTML = nuevaTarea;
    miLista.appendChild(miLi);

    tareas.push (nuevaTarea);

    tareaIngr.value = "";
    console.log(tareas)
}

let borrarTareas = () => {
    tareas = [];
    miLista.innerHTML="";
}

botonGuardar.addEventListener ("click", agregarTareas);
botonVaciar.addEventListener ("click", borrarTareas);
