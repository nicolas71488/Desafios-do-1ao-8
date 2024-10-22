const titulo = document.querySelector('.titulo');

titulo.addEventListener('mouseover', () => {
  titulo.style.color = 'white';
});

titulo.addEventListener('mouseout', () => {
  titulo.style.color = 'black'; // Ou a cor original do seu título
});
const imagens = document.querySelectorAll('img');

imagens.forEach(imagem => {
  imagem.style.opacity = '0';
  setTimeout(() => {
    imagem.style.opacity = '1';
  }, 500);
});