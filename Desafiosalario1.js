function calcularSalario() {
    const nome = document.getElementById('nome').value;
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    const resultadoDiv = document.getElementById('resultado');

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

    resultadoDiv.innerHTML = `
        <h2>Resultado para ${nome}</h2>
        <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Imposto de Renda: R$ ${imposto.toFixed(2)}</p>
        <p>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}