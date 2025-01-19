// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Variables
// Array para almacenar los nombres
let listaNombres = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigo = document.querySelector('#amigo').value;
    
    console.log(amigo);
    
    if (amigo == null || amigo == ''){

        limpiarCaja();

    } else {

        listaNombres.push(amigo);
        limpiarCaja();
        asignarTextoElemento('#listaAmigos', amigo);
        console.log(listaNombres);

    }
    
} 

// Funcio para limpiar el cuadro input cuando hacemos click en el boton añadir.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('title', 'Amigo Secreto');
asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');


