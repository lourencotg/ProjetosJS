const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lampada');

function estaquebrada() {
    return lamp.src.indexOf('quebrada') > -1;
}

function ligalampada () {
    if (!estaquebrada()) {
        lamp.src = 'img/ligada.jpg';
    }
}

function desligalampada () {
    if (!estaquebrada()) {
        lamp.src = 'img/desligada.jpg';
    }
}

function quebralampada () {
    lamp.src = 'img/quebrada.jpg';
}

ligar.addEventListener('click', ligalampada);
desligar.addEventListener('click', desligalampada);
lampada.addEventListener('mouseover', ligalampada);
lampada.addEventListener('mouseleave', desligalampada);
lampada.addEventListener('dblclick', quebralampada);