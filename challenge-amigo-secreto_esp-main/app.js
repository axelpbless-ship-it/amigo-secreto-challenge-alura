// Definir variables
let listaAmigos = [];

// Función para agrega nombres
function agregaNombre() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Aquí validamos que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido")
    } else {
        listaAmigos.push(nombre);
        mostrarLista();
    }

    // Limpiar el registro
    input.value = "";
}


// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para coloca un nombre aleatorio
function amigoNombreSorteo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombe.");
        return;
    }

    let indiceAleatoio = Math.floor(Math.random() * listaAmigos.length);
    let amigoAleatoio = listaAmigos[indiceAleatoio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoAleatoio}`;
}