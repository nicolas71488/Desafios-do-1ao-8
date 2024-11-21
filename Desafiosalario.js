// script.js
function calcular() {
    // ... código existente ...

    // Adicionando validação básica
    if (nome === "" || salarioBruto <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // ... restante do código ...
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("resultados").innerHTML = "";
}
