// 1. Botón "Me interesa" para WhatsApp
document.querySelectorAll('.propiedad button').forEach(button => {
    button.addEventListener('click', function() {
        // Cambia este número por el tuyo (con código de país, sin +)
        const telefono = '51984714932';  // Ejemplo para Perú: 51 + número
        const propiedadNombre = this.parentElement.querySelector('h3').textContent;
        const mensaje = `Me interesa la propiedad: ${propiedadNombre}`;
        const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    });
});

// 2. Formulario de contacto (opcional)
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias!');
    this.reset();
});