function calcIMC() {
    var imc, nome, massa, altura 

    nome = document.getElementById('nome').value
    massa = document.getElementById('massa').value
    altura = document.getElementById('altura').value

    imc = (massa / (altura * altura)).toFixed(2)

    document.getElementById('resultado').textContent = nome+(", seu IMC é: ")+imc
}
