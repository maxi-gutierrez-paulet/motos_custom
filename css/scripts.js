

 <!-- Este es el codigo para hacer que las imagenes se amplien en la pantalla al pinchar sobre ellas -->

// Lightbox para imágenes ampliadas
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todas las imágenes
    const images = document.querySelectorAll('.moto-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Abrir lightbox al hacer clic en una imagen
    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            caption.innerHTML = this.alt;
        });
    });
    
    // Cerrar lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});





