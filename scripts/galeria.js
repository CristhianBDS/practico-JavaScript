// Js de destinos o gallery
//Productos
document.addEventListener("DOMContentLoaded", () => {
    // Código para la primera galería
    const galleryData = [
        { src: '../assets/images/aviones_playa.jpg', title: 'Imagen 1' },
        { src: '../assets/images/BALI.jpg', title: 'Imagen 2' },
        { src: '../assets/images/caribe_bajo.jpg', title: 'Imagen 3' },
        { src: '../assets/images/parque.jpg', title: 'Imagen 4' },
        { src: '../assets/images/Dubai.jpg', title: 'Imagen 5' },
        { src: '../assets/images/novios_viaje.jpg', title: 'Imagen 6' },
    ];
    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        galleryData.forEach(item => {
            const link = document.createElement('a');
            link.href = item.src;
            link.setAttribute('data-lightbox', 'galeria');
            link.setAttribute('data-title', item.title);

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;

            link.appendChild(img);
            galleryContainer.appendChild(link);
        });
    }

    // Código para la segunda galería
    const galleryData2 = [...galleryData];
    const galleryContainer2 = document.getElementById('gallery2');
    if (galleryContainer2) {
        galleryData2.forEach(item => {
            const link = document.createElement('a');
            link.href = item.src;
            link.setAttribute('data-lightbox', 'galeria2');
            link.setAttribute('data-title', item.title);

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.title;

            link.appendChild(img);
            galleryContainer2.appendChild(link);
        });
    }
});