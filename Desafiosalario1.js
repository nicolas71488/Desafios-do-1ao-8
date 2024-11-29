const form = document.getElementById('form');
const tabelaBody = document.getElementById('tabela').getElementsByTagName('tbody')[0];

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

    const novaLinha = tabelaBody.insertRow();
    novaLinha.insertCell(0).textContent = nome;
    novaLinha.insertCell(1).textContent = salarioBruto.toFixed(2);
    novaLinha.insertCell(2).textContent = impostoDeRenda.toFixed(2);
    novaLinha.insertCell(3).textContent = salarioLiquido.toFixed(2);

    form.reset();
});
