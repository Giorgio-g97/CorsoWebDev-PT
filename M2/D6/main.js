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
// const heading = document.getElementById('myHead');
// const headClass = document.getElementsByClassName('prova');

// function addClass(){
//   headClass[0].classList.add('red-text'); // in alternativa si usa className per aggiungere più classi in un'unica riga
//   headClass[0].classList.add('bold-text');
// }

// function removeClass() {
//   headClass[0].classList.remove('red-text');
//   headClass[0].classList.remove('bold-text');
// }

// console.log(headClass);

const newDiv = document.createElement('div') // creo e salvo elemento div in variabile
console.log(newDiv)

newDiv.id = 'newDiv' // Assegno id 'newDiv'
newDiv.classList.add('red-box'); // aggiungo classe 'red-box' creata in CSS
newDiv.innerText = 'Questo è il contenuto del nuovo div'; // Aggiungo testo al nuovo div

// const parentEl = document.querySelector('#create-node') // seleziono il parent da dove poi collocherò il nuovo div
// parentEl.appendChild(newDiv); // colloco il nuovo div (metodo appendChild)

// const parentEl2 = document.querySelector('#reference') // seleziono il punto specifico dove posizionarmi
// parentEl.insertBefore(newDiv, parentEl2) // colloco il div nel punto selezionato in precedenza (metodo insertBefore)

// Per aggiungere il div all'inizio del body si parte dal body come parent e si fa un insertBefore prima del primo div #create-node

// const parentB = document.getElementsByTagName('body')[0] // seleziono il parent body, essendo array di tag (tagname) devo selezionare anche l'indice, quindi il primo [0]
// const nodeDiv = document.querySelector('#create-node') // seleziono il div dove posizionarlo prima di questo
// parentB.insertBefore(newDiv, nodeDiv) // uso metodo insertBefore

// Rimuovere element dall'HTML (es. voglio rimuovere primo p nel tag #create-node)

const remEl = document.getElementById('prova')
remEl.remove()