// script.js

// Asigură-te că documentul este complet încărcat înainte de a adăuga funcționalitate
document.addEventListener('DOMContentLoaded', function () {
    // Ex: Activare Bootstrap Navbar
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            var navbarCollapse = document.querySelector('#navbarNav');
            navbarCollapse.classList.toggle('show');
        });
    }

    // Ex: Validare formular de contact
    var contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            var name = document.querySelector('#name').value;
            var email = document.querySelector('#email').value;
            var message = document.querySelector('#message').value;

            if (!name || !email || !message) {
                alert('Te rog să completezi toate câmpurile.');
                event.preventDefault(); // Împiedică trimiterea formularului
            }
        });
    }

    // Ex: Adăugare animație pe scroll
    document.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function (element) {
            var position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('animate');
            }
        });
    });

    // Ex: Schimbă textul butonului la click
    var buttons = document.querySelectorAll('.btn-change-text');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            button.textContent = 'Ai fost apăsat!';
        });
    });

    // Ex: Afișare mesaj de bun venit
    alert('Bine ai venit pe site-ul nostru C++!');
});
