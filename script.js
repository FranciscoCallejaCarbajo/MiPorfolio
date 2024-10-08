let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Inicializa EmailJS con tu User ID
(function() {
    emailjs.init('oLum-jTU3CTFkIdJe');
})();

// Maneja el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Obtienes los IDs del servicio y la plantilla de EmailJS
    const serviceID = 'service_9cwb92x';
    const templateID = 'template_dartbjr';

    // Envía el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            msg.innerHTML = "Mensaje enviado correctamente"
            setTimeout(function() {
                msg.innerHTML = "";
            }, 4000)
            
        })
        .catch(error => console.error('Error!',error,mensaje))
});


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // tiene que ser el nombre de la clase correcta
    navbar.classList.toggle('active');
}

//Boton ver mas 
document.addEventListener("DOMContentLoaded", function () {
    // Número de trabajos que se mostrarán inicialmente
    const trabajosIniciales = 3;
    const trabajos = document.querySelectorAll('.work-item');
    const botonToggle = document.getElementById('toggleButton');
    let mostrandoTodo = false; // Estado para controlar si se muestran todos los trabajos o no

    // Función para mostrar solo los trabajos iniciales
    function mostrarIniciales() {
        trabajos.forEach((trabajo, index) => {
            if (index < trabajosIniciales) {
                trabajo.classList.add('show');
            } else {
                trabajo.classList.remove('show');
            }
        });
        botonToggle.textContent = "Ver más"; // Cambia el texto del botón
        mostrandoTodo = false; // Actualiza el estado
    }

    // Función para mostrar todos los trabajos
    function mostrarTodos() {
        trabajos.forEach((trabajo) => {
            trabajo.classList.add('show');
        });
        botonToggle.textContent = "Ver menos"; // Cambia el texto del botón
        mostrandoTodo = true; // Actualiza el estado
    }

    // Mostrar los trabajos iniciales al cargar la página
    mostrarIniciales();

    // Añadir el evento de clic al botón para alternar entre "Ver más" y "Ver menos"
    botonToggle.addEventListener('click', function () {
        if (mostrandoTodo) {
            mostrarIniciales(); // Si estamos mostrando todo, volvemos a mostrar solo los iniciales
        } else {
            mostrarTodos(); // Si no, mostramos todos los trabajos
        }
    });
});



