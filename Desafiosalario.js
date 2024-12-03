// script.js
const form = document.getElementById('form-pagamento');
const tabela = document.getElementById('tabela-resultados');
const tbody = tabela.querySelector('tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);

    const imposto = calcularImposto(salarioBruto);
    const salarioLiquido = salarioBruto - imposto;

    const novaLinha = tabela.insertRow();
    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = salarioBruto.toFixed(2);
    novaLinha.insertCell().textContent = imposto.toFixed(2);
    novaLinha.insertCell().textContent = salarioLiquido.toFixed(2);

    form.reset();
});

function calcularImposto(salario) {
    if (salario > 5000) {
        return salario * 0.175;
    } else if (salario > 4000) {
        return salario * 0.12;
    } else if (salario > 3000) {
        return salario * 0.075;
    } else if (salario > 1800) {
        return salario * 0.035;
    } else {
        return 0;
    }
}
