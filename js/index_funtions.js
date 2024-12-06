// FUNCIONES CERRAR MENU
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isClickInsideNav = event.target.closest('.navbar');
    const isNavOpen = navbarCollapse.classList.contains('show');

    if (!isClickInsideNav && isNavOpen) {
        new bootstrap.Collapse(navbarCollapse).hide();
    }
});

// FUNCION PARA USAR WHATSAPP
function sendWhatsAppMessage() {
    const phoneNumber = "#";
    const message = "Hola, estoy interesado en tus servicios. ¿Podríamos hablar?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}