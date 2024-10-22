const images = document.querySelectorAll('img');
const largerImage = document.getElementById('largerImage');
const date = document.getElementById('date');

images.forEach(image => {
    image.addEventListener('click', () => {
        largerImage.style.backgroundImage = `url(${image.src})`;
        largerImage.style.display = 'block';
        largerImage.style.backgroundSize = 'contain';
        largerImage.style.borderRadius = '50%';
    });
});

date.textContent = new Date().toLocaleDateString();