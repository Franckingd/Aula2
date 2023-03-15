function calcIMC() {
    var imc, nome, massa, altura 

    nome = document.getElementById('nome').value
    massa = document.getElementById('massa').value
    altura = document.getElementById('altura').value

    imc = (massa / (altura * altura)).toFixed(2)

    document.getElementById('resultado').textContent = nome+(", seu IMC é: ")+imc

    if(imc < 18,5){
        document.getElementById('tabela').textContent = ("Você está abaixo do peso")
    }
    else if(imc > 18,5 && imc < 24,9){
        document.getElementById('tabela').textContent = ("Você está no peso ideal")
    }
    else if(imc > 24,9 && imc < 29,9){
        document.getElementById('tabela').textContent = ("Você está com sobrepeso")
    }
    else if(imc > 29,9){
        document.getElementById('tabela').textContent = ("Você está com obesidade")
    }
}
