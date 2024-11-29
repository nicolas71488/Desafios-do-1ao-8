const form = document.getElementById('form-pagamento');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salario').value);

    let imposto = 0;
    if (salarioBruto > 5000) {
        imposto = salarioBruto * 0.175;
    } else if (salarioBruto > 4000) {
        imposto = salarioBruto * 0.12;
    } else if (salarioBruto > 3000) {
        imposto = salarioBruto * 0.075;
    } else if (salarioBruto > 1800) {
        imposto = salarioBruto * 0.035;
    }

    const salarioLiquido = salarioBruto - imposto;

    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Nome: ${nome}</p>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Imposto de Renda: R$ ${imposto.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
});
