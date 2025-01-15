// Cargar noticias desde un archivo JSON externo
fetch('noticias.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('noticias-container');
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia-item');

            noticiaDiv.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.descripcion}</p>
            `;

            container.appendChild(noticiaDiv);
        });
    })
    .catch(error => console.error('Error al cargar las noticias:', error));





