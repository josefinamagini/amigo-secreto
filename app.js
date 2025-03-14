let amigos = [];  // Lista para almacenar los nombres de los amigos

// Función para agregar un amigo
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    // Validar si el nombre no está vacío y no se repite
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);  // Añadir el nombre a la lista
        renderizarLista();  // Actualizamos la lista de amigos
        nombreInput.value = "";  // Limpiamos el campo de entrada
    } else {
        mostrarPopup("El nombre ya fue agregado o está vacío.");
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre);  // Filtramos el nombre que queremos eliminar
    renderizarLista();  // Volvemos a renderizar la lista después de eliminar
}

// Función para renderizar la lista de amigos
function renderizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";  // Limpiamos la lista antes de renderizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        // Añadimos la 'X' para eliminar al lado del nombre
        li.innerHTML = `${amigo} <span class="remove-button" onclick="eliminarAmigo('${amigo}')">X</span>`;
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {  // Verificamos si hay suficientes amigos para sortear
        mostrarPopup("¡Necesitas al menos dos amigos para hacer el sorteo!");
        return;
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en el popup
    mostrarPopup(`¡Tu amigo secreto es: ${amigoSorteado}!`);
}

// Función para mostrar el popup
function mostrarPopup(mensaje) {
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    popupText.textContent = mensaje;
    popup.style.display = "flex";  // Mostramos el popup
}

// Función para cerrar el popup
function cerrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";  // Ocultamos el popup
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar el array de amigos
    amigos = [];

    // Limpiar la lista de amigos en el HTML
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";

    // Opcional: Mostrar un mensaje indicando que el juego ha sido reiniciado
    mostrarPopup("El juego ha sido reiniciado. Puedes agregar nuevos amigos.");
}

// Event listener para escuchar la tecla Enter en el campo de entrada
const inputAmigo = document.getElementById("amigo");
inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // Si la tecla presionada es Enter
        agregarAmigo();  // Llamar a la función para agregar el amigo
    }
});
