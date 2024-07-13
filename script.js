
const botao = document.getElementById('botao');
const msg = document.getElementById('msg');
const resultado = document.createElement('span');
const container = document.getElementById('main');
const img = document.getElementById('img');


const sd = document.getElementById('sd');

botao.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    
    if (email.indexOf('@gmail.com') == email.length - 10) {
        resultado.classList.add('confirmar')
        resultado.innerHTML = '<p>Nice</p>'
        sd.appendChild(resultado)

    } else {
        resultado.classList.add('erro')
        resultado.innerHTML = '<p>Please provide a valid email address</p>'
        sd.appendChild(resultado)
        document.getElementById('email').style.borderColor = 'red';
    }
})

