const img = document.getElementById('shelter-img');
const audio = document.getElementById('audio');

img.addEventListener('click', () => {
    audio.play();
});

img.style.cursor = 'pointer';
