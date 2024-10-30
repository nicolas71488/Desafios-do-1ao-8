const form = document.getElementById('myForm');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    mensagem.textContent = 'Obrigado por responder o formulário!';
    mensagem.style.backgroundColor = '#ffff00'; // Altera a cor de fundo da mensagem para amarelo
    mensagem.style.color = '#333';
    mensagem.style.padding = '10px';
    mensagem.style.borderRadius = '5px';
});
