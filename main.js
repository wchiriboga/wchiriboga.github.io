let i = 0;
function changeBg() {

    const images = [
        "url('jumbotron/django.jpeg')", 
        "url('jumbotron/interstellar.jpeg')",
        "url('jumbotron/thedarkknight.jpeg')"
        ];

    if (i < images.length) {
        img = images[i];
        i++;
    } else {
        i = 0;
        img = images[i]
    }

    const jumbotron = document.getElementById('jumbotron');
    jumbotron.style.backgroundImage = img;
    
}

function intervalBg() {
    setInterval(changeBg, 1000)
}

window.addEventListener('load', intervalBg);
