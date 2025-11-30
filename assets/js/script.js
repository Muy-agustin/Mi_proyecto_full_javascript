const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const interesSi = document.getElementById('si').checked;
    const interesNo = document.getElementById('no').checked;

    if (email === "" || (!interesSi && !interesNo)) {

        messageDiv.innerHTML = "<div class='alert alert-danger'>Por favor, completa todos los campos.</div>";
    } else {
        messageDiv.innerHTML = "<div class='alert alert-success'>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</div>";

        form.reset();
    }
});

/* E-6 M-2 */
/* Bloque de codigo para la ventana emergente que pide correo y contraseña */
function solicitarDatos() {
    //variables
    let nombreCompleto, correoElectrónico, contraseña;

    // Validar nombreCompleto
    while (true) {
        nombreCompleto = prompt("Ingresa tu nombre completo:");
        if (nombreCompleto !== null && nombreCompleto.trim() !== "") {
            break; // Si el campo no está vacío, salimos del ciclo
        } else {
            alert("Error: El campo 'nombre' no puede estar vacío.");
        }
    }

    // Validar correo
    while (true) {
        correoElectrónico = prompt("Ingresa tu correo electrónico:");
        if (correoElectrónico !== null && correoElectrónico.trim() !== "") {
            break; // Si el campo no está vacío, salimos del ciclo
        } else {
            alert("Error: El campo 'correo' no puede estar vacío.");
        }
    }

    // Validar contraseña
    while (true) {
        contraseña = prompt("Ingresa tu contraseña:");
        if (contraseña !== null && contraseña.trim() !== "") {
            if (contraseña.length >= 8) {
                break; // Si la contraseña tiene al menos 8 caracteres, salimos del ciclo
            } else {
                alert("Error: La contraseña debe tener al menos 8 caracteres.");
            }
        } else {
            alert("Error: El campo 'contraseña' no puede estar vacío.");
        }
    }

    // Mensaje de victoria
    alert(`✅ Registro exitoso. ¡Bienvenido ${nombreCompleto} echa un vistazo y disfruta de la comunidad!`);
}

// llamado de la funcion
solicitarDatos();