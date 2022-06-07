// tady je místo pro náš program

let nadpis = document.querySelector('h1')
nadpis.classList.add("zluty")

let ctverecek = document.querySelector('div.zluty')
ctverecek.classList.add("ctverecek")

let count = 0;

function priNajetiNaCtverec() {
    console.log(`Počet najetí na čtverec je ${count}`)
    //count += 1 nebo
    //count = count + 1
    count++
}