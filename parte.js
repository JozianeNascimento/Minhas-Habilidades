// aprender a separar parte do Js do Html!
//praticando seleção de elementos DOM
var nome = window.document.getElementsByTagName('h1')[0]
nome.style.color = "black"
nome.style.textAlign = 'center'
nome.style.fontSize = '30pt'
nome.style.fontFamily = 'handlee, cursive'
nome.style.marginTop = '75px'


var quote = window.document.querySelector("div#quote")
quote.style.textAlign = 'right'
quote.style.fontSize = '13pt'
quote.style.fontFamily = ' handlee, cursive'

var p1 = window.document.getElementsByTagName('p')[0]
p1.style.fontFamily = 'handlee, cursive'
p1.style.fontSize = '13pt'

var p2 = window.document.getElementsByTagName('p')[1]
p2.style.fontFamily = 'Handlee, cursive'
p2.style.fontSize = '13pt'

var p9 = window.document.getElementsByTagName('p')[9]
p9.style.fontFamily = "arial"
p9.style.color = "black"

var p5 = window.document.getElementsByTagName('p')[5]
p5.style.fontFamily = "arial"
p5.style.color = 'black'

var p13 = window.document.getElementsByTagName('p')[13]
p13.style.fontFamily = "arial"
p13.style.color = "black"

var p16 = window.document.getElementsByTagName('p')[16]
p16.style.fontFamily = "arial"
p16.style.color = 'black'

var p17 = window.document.getElementsByTagName('p')[17]
p17.style.fontFamily = "arial"
p17.style.color = 'black'
    //querySelector selecionar um unico elemento assim como getElementById() enão precisamos mencionar a []

//praticando EVENTOS DOM
var interaja = window.document.getElementById("interaja")
interaja.style.textAlign = 'center'

function clicar() {
    interaja.innerText = "Seja bem vindo!"
    interaja.style.color = '#C1277F'
    interaja.style.width = '200px'
    interaja.style.height = '20px'
    interaja.style.textAlign = 'center'

}

function entrar() {
    interaja.innerText = "É so clicar!"
}

function saiu() {
    interaja.innerText = "Nos ícones!"
}

function clicar() {
    interaja.innerText = "Seja bem vindo!"
    interaja.style.color = '#C1277F'
}