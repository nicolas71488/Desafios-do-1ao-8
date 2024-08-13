var jogarhtml = window.document.getElementById('saida')

function clique1() {
    jogarhtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 1 </p>'
}
function clique2() {
    jogarhtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 2 </p>'
}
function clique3() {
    jogarhtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 3 </p>'
}
function clique4() {
    jogarhtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 4 </p>'
}

function parimpar() {
    let num = Number(window.prompt('digite um número: '))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</satrong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número digitado foi ${num} e ele é: ${tipo}!</p>`
}
