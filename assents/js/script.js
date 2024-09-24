let home = document.querySelector('.home')
let logo = document.querySelector('.logo')
let gases = document.querySelector('.gases')
let fraseBotao = document.querySelector('.frases')
setTimeout(() => {
    home.style.transition = 'all 2s ease-in-out';
    home.style.backgroundColor = 'rgb(1, 110, 89)';
    logo.style.transition = 'all 1s ease-in-out';
    logo.style.opacity = '1';
}, 1000);

setTimeout(() => {
    gases.style.transition = 'all 0.8s ease-in-out'
    gases.style.transform = 'translateX(0)'
    gases.style.opacity = '1'
}, 1500);

setTimeout(() => {
    fraseBotao.style.transition = 'all 1.5s ease-in-out'
    fraseBotao.style.transform = 'translateY(0)'
    fraseBotao.style.opacity = '1'
}, 2000);


let botaoMais = document.querySelector('#mais')
let botaoMenos = document.querySelector('#menos')
let invisivel = document.querySelector('#invisivel')

botaoMais.addEventListener('click', abrir)
botaoMenos.addEventListener('click', fechar)

function abrir() {
    invisivel.style.display = 'flex'
    botaoMais.style.transition = 'all 0.5s ease-in-out'
    botaoMais.style.opacity = '0'
    botaoMais.style.zIndex = '-1'

    botaoMenos.style.transition = 'all 0.5s ease-in-out'
    botaoMenos.style.opacity = '1'
    botaoMenos.style.zIndex = '1'
}
function fechar() {
    botaoMais.style.transition = 'all 0.5s ease-in-out'
    botaoMais.style.opacity = '1'
    botaoMais.style.zIndex = '1'

    botaoMenos.style.transition = 'all 0.5s ease-in-out'
    botaoMenos.style.opacity = '0'
    botaoMenos.style.zIndex = '-1'
    invisivel.style.display = 'none'
}


let time = new Date()
let hora = time.getHours()
let comprimento = ''

let botao = document.querySelector('#botao')
botao.addEventListener('click', mensagem)

function mensagem() {
    let numero = '5521997030738'
    let nome = document.querySelector('.nome').value
    let tel = document.querySelector('.numero').value
    let email = document.querySelector('.email').value
    let msg = document.querySelector('.mensagem').value

    if (hora >= 6 && hora <= 12) {
        comprimento = 'Bom dia!'
    }
    else if (hora >= 13 && hora <= 17) {
        comprimento = 'Boa tarde!'
    }
    else if (hora >= 18 && hora <= 23) {
        comprimento = 'Boa noite!'
    }
    else if (hora >= 0 && hora <= 5) {
        comprimento = 'Boa noite!'
    }

    if(nome === ''){
        alert('Digite seu nome!')
        preventDefault()
    }
    else if(tel === ''){
        alert('Digite o numero do seu telefone!')
        preventDefault()
    }
    else if(email === ''){
        alert('Digite seu email!')
        preventDefault()
    }
    else if(msg === ''){
        alert('Digite uma mensagem para enviar para a empresa!')
        preventDefault()
    }
    else{
        let url = 'http://wa.me/' + numero + '?text='
        + comprimento + '%0a'
        + 'Sou '+ nome + '%0a'

        + msg + '%0a'
        + 'Telefone: ' + tel + '%0a'
        + 'Email: ' + email + '%0a'
        window.open(url, '_blank').focus()
    }
}

//SEÇÕES
let feed1 = document.querySelector('.feedback-1')
let feed2 = document.querySelector('.feedback-2')
let feed3 = document.querySelector('.feedback-3')
let feed4 = document.querySelector('.feedback-4')
let feed5 = document.querySelector('.feedback-5')
//BOTÕES
let bt1 = document.querySelector('.bt1')
let bt2 = document.querySelector('.bt2')
let bt3 = document.querySelector('.bt3')
let bt4 = document.querySelector('.bt4')
let bt5 = document.querySelector('.bt5')

bt1.addEventListener('click', uTroca)
bt2.addEventListener('click', dTroca)
bt3.addEventListener('click', tTroca)
bt4.addEventListener('click', qTroca)
bt5.addEventListener('click', cTroca)

//TROCAS
function uTroca(){
    feed1.style.display = 'flex'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(170, 203, 99)'
    bt2.style.backgroundColor = 'transparent'
    bt3.style.backgroundColor = 'transparent'
    bt4.style.backgroundColor = 'transparent'
    bt5.style.backgroundColor = 'transparent'
}

function dTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'flex'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'transparent'
    bt2.style.backgroundColor = 'rgb(170, 203, 99)'
    bt3.style.backgroundColor = 'transparent'
    bt4.style.backgroundColor = 'transparent'
    bt5.style.backgroundColor = 'transparent'
}

function tTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'flex'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'transparent'
    bt2.style.backgroundColor = 'transparent'
    bt3.style.backgroundColor = 'rgb(170, 203, 99)'
    bt4.style.backgroundColor = 'transparent'
    bt5.style.backgroundColor = 'transparent'
}

function qTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'flex'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'transparent'
    bt2.style.backgroundColor = 'transparent'
    bt3.style.backgroundColor = 'transparent'
    bt4.style.backgroundColor = 'rgb(170, 203, 99)'
    bt5.style.backgroundColor = 'transparent'
}

function cTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'flex'

    bt1.style.backgroundColor = 'transparent'
    bt2.style.backgroundColor = 'transparent'
    bt3.style.backgroundColor = 'transparent'
    bt4.style.backgroundColor = 'transparent'
    bt5.style.backgroundColor = 'rgb(170, 203, 99)'
}