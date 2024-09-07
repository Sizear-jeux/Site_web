document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
        updateIndicators(index);
    }

    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoSlide();
        });
    });

    // Auto-slide every 4 seconds
    autoSlideInterval = setInterval(nextSlide, 4000);

    // Initial display
    showSlide(currentIndex);
});

// script.js

// Obtenez les éléments modale et le bouton de fermeture
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModal');
var span = document.getElementsByClassName('close')[0];

// Lorsque l'utilisateur clique sur le lien, ouvrez la modale
btn.onclick = function() {
    modal.style.display = 'block';
    document.body.classList.add('modal-open'); // Ajoute la classe pour assombrir
}

// Lorsque l'utilisateur clique sur le bouton de fermeture, fermez la modale
span.onclick = function() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Retire la classe pour éclaircir
}

// Lorsque l'utilisateur clique en dehors de la modale, fermez-la
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnails img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            if (this.hasAttribute('data-video')) {
                const videoSrc = this.getAttribute('data-full');
                showVideo(videoSrc);
            } else {
                const newSrc = this.getAttribute('data-full');
                mainImage.src = newSrc;
            }
        });
    });

    function showVideo(videoSrc) {
        const videoContainer = document.createElement('div');
        videoContainer.style.position = 'fixed';
        videoContainer.style.top = '0';
        videoContainer.style.left = '0';
        videoContainer.style.width = '100%';
        videoContainer.style.height = '100%';
        videoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        videoContainer.style.zIndex = '9999';
        videoContainer.style.display = 'flex';
        videoContainer.style.alignItems = 'center';
        videoContainer.style.justifyContent = 'center';

        const iframe = document.createElement('iframe');
        iframe.src = videoSrc;
        iframe.width = '80%';
        iframe.height = '80%';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        videoContainer.appendChild(iframe);
        document.body.appendChild(videoContainer);

        videoContainer.addEventListener('click', function() {
            document.body.removeChild(videoContainer);
        });
    }
});


document.getElementById('zoomIcon').addEventListener('click', function() {
    const img = document.getElementById('mainImage');
    const fullScreenImg = document.createElement('img');
    fullScreenImg.src = img.src;
    fullScreenImg.style.position = 'fixed';
    fullScreenImg.style.top = '0';
    fullScreenImg.style.left = '0';
    fullScreenImg.style.width = '100%';
    fullScreenImg.style.height = '100%';
    fullScreenImg.style.objectFit = 'contain';
    fullScreenImg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    fullScreenImg.style.zIndex = '9999';
    fullScreenImg.style.cursor = 'pointer';

    fullScreenImg.addEventListener('click', function() {
        document.body.removeChild(fullScreenImg);
    });

    document.body.appendChild(fullScreenImg);
});

document.getElementById('videoButton').addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video-url');
    const videoFrame = document.getElementById('videoFrame');
    const videoContainer = document.getElementById('videoContainer');

    videoFrame.src = videoUrl;
    videoContainer.style.display = 'flex'; // Afficher le conteneur
});

document.getElementById('videoContainer').addEventListener('click', function() {
    const videoFrame = document.getElementById('videoFrame');
    this.style.display = 'none'; // Masquer le conteneur
    videoFrame.src = ''; // Arrêter la vidéo
});

