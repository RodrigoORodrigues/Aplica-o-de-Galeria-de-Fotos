// Função para filtrar a galeria com base na pesquisa
function filterGallery() {
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let gallery = document.getElementById('gallery');
    let photos = gallery.getElementsByClassName('photo-item');
    let noResultsMessage = document.getElementById('noResultsMessage');
    let photosVisible = 0;

    // Loop sobre todas as fotos e esconde ou mostra de acordo com a busca
    Array.from(photos).forEach(photo => {
        let photoName = photo.getAttribute('data-name').toLowerCase();
        
        if (photoName.includes(searchInput)) {
            photo.style.display = '';  // Mostra a foto
            photosVisible++;
        } else {
            photo.style.display = 'none';  // Esconde a foto
        }
    });

    // Exibe ou esconde a mensagem de "Nenhuma foto encontrada"
    if (photosVisible === 0 && searchInput !== "") {
        noResultsMessage.style.display = 'block';  // Exibe a mensagem
    } else {
        noResultsMessage.style.display = 'none';  // Oculta a mensagem
    }
}
// Função para carregar as fotos do arquivo JSON
async function fetchPhotos() {
    try {
        const response = await fetch('photos.json');
        const photos = await response.json();

        renderGallery(photos); // Renderiza as fotos na galeria
    } catch (error) {
        console.error('Erro ao carregar as fotos:', error);
    }
}
