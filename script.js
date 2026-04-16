const musiquita = document.getElementById('musiquita');
const nyanGif = document.getElementById('nyan-gif');

musiquita.addEventListener('play', () => {
    nyanGif.style.visibility = 'visible';
});

musiquita.addEventListener('pause', () => {
    nyanGif.style.visibility = 'hidden';
});
