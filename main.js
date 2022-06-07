// tady je místo pro náš program

let nadpis = document.querySelector('h1')
nadpis.classList.add('zluty')

let ctverecek = document.querySelector('div.zluty')
ctverecek.classList.add('ctverecek')

let count = 0

function priNajetiNaCtverec() {
  console.log(`Počet najetí na čtverec je ${count}`)
  //count += 1 nebo
  //count = count + 1
  count++
}

function zmenStyl() {
  nadpis.classList.toggle('zeleny')
}

document.querySelector('.paragraph').style.fontSize = '16px'

function changeColor() {
  document.querySelector('.button').classList.toggle('red-button')
}

function biggerFontSize() {
  let el = document.querySelector('.paragraph')
  let style = window.getComputedStyle(el, null).getPropertyValue('font-size')
  let fontSize = parseFloat(style)
  // now you have a proper float for the font size (yes, it can be a float, not just an integer)
  el.style.fontSize = fontSize + 1 + 'px'
}

function stiskKlavesy(e) {
    console.log(e.key)
}
