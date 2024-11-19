const form = document.getElementById('form');
const tabelaBody = document.getElementById('tabela').querySelector('tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);

    let impostoDeRenda;
    if (salarioBruto > 5000) {
        impostoDeRenda = salarioBruto * 0.175;
    } else if (salarioBruto > 4000) {
        impostoDeRenda = salarioBruto * 0.12;
    } else if (salarioBruto > 3000) {
        impostoDeRenda = salarioBruto * 0.075;
    } else if (salarioBruto > 1800) {
        impostoDeRenda = salarioBruto * 0.035;
    } else {
        impostoDeRenda = 0;
    }

    const salarioLiquido = salarioBruto - impostoDeRenda;

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${salarioBruto.toFixed(2)}</td>
        <td>${impostoDeRenda.toFixed(2)}</td>
        <td>${salarioLiquido.toFixed(2)}</td>
    `;
    tabelaBody.appendChild(novaLinha);

    form.reset();
});