const botao = document.getElementById('botao');
const resultado = document.createElement('span');
const img = document.getElementById('img');
const sd = document.getElementById('sd');

botao.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    
    if (email.includes('@gmail.com') && email.indexOf('@gmail.com') == email.length - 10) {
        resultado.style.color = 'blue';
        resultado.innerHTML = '<p>Nice</p>'
        sd.appendChild(resultado)

    } else {
        resultado.style.color = 'red';
        resultado.innerHTML = '<p>Please provide a valid email address</p>'
        sd.appendChild(resultado)
        document.getElementById('email').style.borderColor = 'red';
    }
})

