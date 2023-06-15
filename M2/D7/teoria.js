// Funzione save
// Primo metodo nell'HTML inline
function save(){ 
  const input = document.getElementById("myin") // Seleziono l'input tramite id "myin"
  console.log('input value: ', input.value) // Stampo in console.log il valore di quello che ho scritto in input tramite "input.value"
}
// Secondo metodo
const btn = document.getElementById('myBtn')
btn.onclick = save  // ricordati senza parentesi perché non la stiamo chiamando, ma solo gestendo in questa funzione

// Terzo metodo
const btn3 = document.getElementById('myBtn3')
btn3.addEventListener('click', save) // inseriamo il nome dell'evento es. click e la funzione da chiamare, cioè save, sempre senza ()

// Uso tag select
const selEl = document.getElementById('colori') // seleziono il selector
selEl.addEventListener('change', getSel) // change è il tipo di evento quando sceglo un option del selector

function getSel(){
  console.log('change')
  const selVal = selEl.value
  console.log('Evento selezionato: ', selVal)
  
  if (selEl.value === "rosso"){                 // setto il colore alla scelta del rosso
    const selC = document.getElementById('red')
    selC.classList.add('bg-red')
  }
}

// input date
const date = document.getElementById('data')
date.onchange = getDate // anche qui l'evento è di tipo change
function getDate(){
  console.log(date.value) // stampo valore della data presa da getElement 'data'
}

// input color
function getCol(){
  const c = document.getElementById('color')
  console.log(c.value)
}

// scroll window
window.addEventListener('scroll', function(){
  const scrollPosition = window.pageYOffset // la posizione la prendiamo dall'oggetto window, in questo caso window.pageYOffset
  console.log('la tua posizione: ', scrollPosition)
})