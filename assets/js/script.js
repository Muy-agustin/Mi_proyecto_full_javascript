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