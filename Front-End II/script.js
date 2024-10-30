const txt = document.querySelector('#txt')
const divImg = document.querySelector('.divImg')

function bordaDiv () {
    divImg.style.border='2px solid black'
}

divImg.addEventListener('click', bordaDiv)

txt.onclick = () => {
    alert(' Campo de texto clicado!')
}




const clicked = () => {
    console.log(' Botão clicado! ')
}
