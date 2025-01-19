// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Variables
//const inputAmigo = document.getElementById("amigo");
// Array para almacenar los nombres
let listaNombres = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value;
    
    console.log(nombreAmigo);
    
    if (nombreAmigo == null || nombreAmigo == ''){

        alert("Por favor, ingresa un nombre válido.");

    } else {

        listaNombres.push(nombreAmigo);
        limpiarCaja();
        //asignarTextoElemento('#listaAmigos', nombreAmigo);
        actualizarListaAmigos();        
        console.log(listaNombres);

    }
} 

// Funcion que actualiza la lista de amigos para despues utilizara la funcion sortearAmigo()
function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";
    listaNombres.forEach((amigo) => {
      const li = document.createElement("li");
      li.textContent = amigo;
      listaAmigos.appendChild(li);
    });
}

// donde se realiza un sorteo aleatorio de la lista listaNombres
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("La lista está vacía. Por favor, agregar nombres a la lista primero.");
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
      const amigoSorteado = listaNombres[indiceAleatorio];
      resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

// Funcion para limpiar el cuadro input cuando hacemos click en el boton añadir.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

asignarTextoElemento('title', 'Amigo Secreto');
asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');


