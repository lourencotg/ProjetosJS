
function calcularIMC() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    var resultado = document.getElementById('resultado');
    let classificacao;

    let imc = peso / (altura * altura);

    if (nome == '' || altura == '' || peso == '') {
        alert('Preencha todos os campos!')
    } else {
        if (imc >= 40) {
            classificacao = "com obesidade grave!";
        } else if (imc >= 30) {
            classificacao = "com obesidade!";
        } else if (imc >= 25) {
            classificacao = "com sobrepeso!";
        } else if (imc >= 18.5) {
            classificacao = "com peso normal";
        } else {
            classificacao = "com magreza";
        }
    }

    resultado.innerHTML = (`${nome}, Seu IMC É: ${imc.toFixed(2)} e você está ${classificacao}`)
}

document.getElementById('calcular').addEventListener("click", calcularIMC);