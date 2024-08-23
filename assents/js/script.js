let eFrase = document.querySelector('#frases')
let eImage = document.querySelector('#imagem')

setInterval(() => {
    eImage.style.transition = 'all 1s ease'
    eImage.style.opacity = '1'
}, 3000);
setInterval(() => {
    eFrase.style.transition = 'all 1s ease'
    eFrase.style.opacity = '1'
    eFrase.style.transform = 'translateX(50px)'
}, 4000);



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
    }
    else if(msg === ''){
        alert('Digite uma mensagem para enviar para a empresa!')
    }
    else{
        let url = 'http://wa.me/' + numero + '?text='
        + comprimento + '%0a'
        + 'Sou '+ nome + '%0a'
        + msg + '%0a'
        window.open(url, '_blank').focus()
    }
}
