// getElementById
const container = document.getElementById('container')
// console.log(container)
// getElementByClassName
const description = document.getElementsByClassName('description')
// console.log(description)
// getElementByTagName
const images = document.getElementsByTagName('img')
// console.log(images)

// Modifico immagini con un ciclo for of, dato che mi ha restituito un array di oggetti (immagini)
for (const i of images) {
    i.style.width = '300px'
    i.style.height = '200px'
}

// Queryselector (class)
const featuredClass = document.querySelector('.featured') // in questo caso è la stessa cosa di getelementbyclassname
// console.log(featuredClass)

// Queryselector (id)
const containerId = document.querySelector('#container') // in questo caso è la stessa cosa di getelementbyid
// console.log(containerId)

// querySelector con più classi/id
const featuredMul = document.querySelector('.featured .bg-image')
// console.log(featuredMul)

// QueryselectorAll
const featuredAll = document.querySelectorAll('.featured')
// console.log(featuredAll)


// leggere contetnuto elemento id (es. contenuto testo)
const titolo = document.getElementById('titolo')
// console.log(titolo.innerHTML)

// // leggere contetnuto elemento classi (es. contenuto testo)
const par = document.getElementsByClassName('paragrafo')
// console.log(par[0].innerHTML) // serve indicare l'indice dell'array

// modificare testo
// titolo.innerText = 'Provaaa'
// par[0].innerText = 'prova11'

// Es. bottone 
const heading = getElementById('myHead')
const headClass = getElementsByClassName('prova')
heading[0].classList.add('red-color')
