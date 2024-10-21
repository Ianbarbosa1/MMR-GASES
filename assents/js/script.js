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

/*ABERTURA E FECHADURA DO SOBRE*/
let abrirSobre = document.querySelector('#abrir-sobre')
let abrirSobreOne = document.querySelector('#abrir-sobre-one')
let abrirSobreTwo = document.querySelector('#abrir-sobre-two')
let containerSobre = document.querySelector('#sobre-nos')
let fecharSobre = document.querySelector('#fechar-sobre')

abrirSobreOne.addEventListener('click', AbrirModal)
abrirSobreTwo.addEventListener('click', AbrirModal)
abrirSobre.addEventListener('click', AbrirModal)
function AbrirModal(){
    containerSobre.style.zIndex = '+2'
    containerSobre.style.opacity = '1'
    containerSobre.style.transition = 'all 1s ease-in-out'
}

fecharSobre.addEventListener('click', FecharModal)
function FecharModal(){
    containerSobre.style.zIndex = '-1'
    containerSobre.style.opacity = '-1'
    containerSobre.style.transition = 'all 1s ease-in-out'
}
/*-------------------------------------------------------*/

/*ABERTURA E FECHADURA DO MENU PARA DISPOSITIVOS MENORES*/
let menuTel= document.querySelector('.menu-tel')

let abrirMenuTel = document.querySelector('.abrir-menu')
abrirMenuTel.addEventListener('click', abrirMenu)
function abrirMenu(){
    menuTel.style.display = 'flex'
}

let fecharMenuTel = document.querySelector('#fechar-menu')
fecharMenuTel.addEventListener('click', fecharMenu)
function fecharMenu(){
    menuTel.style.display = 'none'
}
/*-------------------------------------------------------*/

/*FORMULÁRIO*/
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
        + 'E-mail: ' + email + '%0a'
        window.open(url, '_blank').focus()
    }
}
/*-------------------------------------------------------*/


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
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function dTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'flex'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(170, 203, 99)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function tTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'flex'
    feed4.style.display = 'none'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(170, 203, 99)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function qTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'flex'
    feed5.style.display = 'none'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(170, 203, 99)'
    bt5.style.backgroundColor = 'rgb(208, 208, 198)'
}

function cTroca(){
    feed1.style.display = 'none'
    feed2.style.display = 'none'
    feed3.style.display = 'none'
    feed4.style.display = 'none'
    feed5.style.display = 'flex'

    bt1.style.backgroundColor = 'rgb(208, 208, 198)'
    bt2.style.backgroundColor = 'rgb(208, 208, 198)'
    bt3.style.backgroundColor = 'rgb(208, 208, 198)'
    bt4.style.backgroundColor = 'rgb(208, 208, 198)'
    bt5.style.backgroundColor = 'rgb(170, 203, 99)'
}

//-- PASSAGEM AUTOMATICAS
setInterval(() => {
    setTimeout(() => {
        feed1.style.display = 'flex'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(170, 203, 99)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 1000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'flex'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(170, 203, 99)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 6000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'flex'
        feed4.style.display = 'none'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(170, 203, 99)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 11000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'flex'
        feed5.style.display = 'none'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(170, 203, 99)'
        bt5.style.backgroundColor = 'rgb(208, 208, 198)'
    }, 16000);

    setTimeout(() => {
        feed1.style.display = 'none'
        feed2.style.display = 'none'
        feed3.style.display = 'none'
        feed4.style.display = 'none'
        feed5.style.display = 'flex'

        bt1.style.backgroundColor = 'rgb(208, 208, 198)'
        bt2.style.backgroundColor = 'rgb(208, 208, 198)'
        bt3.style.backgroundColor = 'rgb(208, 208, 198)'
        bt4.style.backgroundColor = 'rgb(208, 208, 198)'
        bt5.style.backgroundColor = 'rgb(170, 203, 99)'
    }, 20000);
}, 25000);