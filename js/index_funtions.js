

// FUNCION PARA USAR WHATSAPP
function sendWhatsAppMessage() {
    const phoneNumber = "#";

    const message = "Hola, estoy interesado en tus servicios. ¿Podríamos hablar?";

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}