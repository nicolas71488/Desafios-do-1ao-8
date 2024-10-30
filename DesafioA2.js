const imagem = document.getElementById('imagem');
const proximoBtn = document.getElementById('proximo');
const anteriorBtn = document.getElementById('anterior');

let imagens = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg']; // Array com os nomes das imagens
let indiceImagem = 0;

proximoBtn.addEventListener('click', () => {
    indiceImagem++;
    if (indiceImagem >= imagens.length) {
        indiceImagem = 0;
    }
    imagem.src = imagens[indiceImagem];
});

anteriorBtn.addEventListener('click', () => {
    indiceImagem--;
    if (indiceImagem < 0) {
        indiceImagem = imagens.length - 1;
    }
    imagem.src = imagens[indiceImagem];
});
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('transitionend', () => {
    image.style.transform = 'scale(1)';
  });
});