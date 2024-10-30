function calcular() {
    // Obter os valores dos campos
    var valorDivida = parseFloat(document.getElementById("valor").value);
    var mesesAtraso = parseInt(document.getElementById("meses").value);
    var taxaJuros = parseFloat(document.getElementById("taxa").value) / 100;

    // Cálculo da dívida total (simplificado, sem considerar juros compostos)
    var jurosMensal = valorDivida * taxaJuros;
    var valorTotal = valorDivida + (jurosMensal * mesesAtraso);

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "Valor total da dívida: R$" + valorTotal.toFixed(2);
}