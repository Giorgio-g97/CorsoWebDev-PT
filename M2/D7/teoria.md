# Input, manipolazione dati ed Eventi

Ci consente di raccogliere informazioni da parte degli utenti. Reagendo agli **eventi**, si possono progettare applicazioni al verificarsi dell'evento.

---
Il tag **input** contiene un attributo "**value**" che contiene informazioni che verranno salvate nell'input e manipolate in JS. Ha attributo di tipo "**type**" per inserire il tipo di dato in input. Gli **eventi** vengono usati per attivare codice quando accade qualcosa. (es. click, scroll, finestra ridimensionata, digitazione, posizionamento cursore ecc.. altri in [questo link](https://www.w3schools.com/jsref/dom_obj_event.asp)). Gli **input** ci dice **cosa** stiamo inserendo, gli **eventi** ci dicono **quando** elabolarli.
L'evento è diviso in:
1. **Event**: l'evento che si è innescata (il click, il mouse hover ecc..)
2. **Listener**: funzione chiamata ogni volta che l'evento si verifica (collega evento a funzione)
3. **Event data**: oggetto fornito dall'evento, contiene informazioni relative all'evento stesso

---
## Aggiungere Listeners
Per aggiungere si usa **"onxxx"** (es. `onclick`). Si possono aggiungere in due modi:
* element.`onclick` = functionName
* element.`addEventListener`("click", functionName)

---
## I tre metodi di event (Esempi su teoria.html/js)
```
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
```
## Utilizzo del tag select

Nell'HTML
```
<!--   Utilizzo tag select -->
  <select id="colori">
     <option value="" selected disabled>Seleziona un colore</option>  <!--la parte value non serve all'utente, ma a noi per capire il valore selezionato -->
    <option id="red" value="rosso">Rosso</option>
    <option id="blue" value="blu">Blu</option>
    <option id="green" value="verde">Verde</option>
    <option id="yellow" value="giallo">Giallo</option>
  </select>
```
La parte `value` non serve all'utente, ma a noi per capire il valore selezionato.
Nel JS
```
// Uso tag select
const selEl = document.getElementById('colori') // seleziono il selector
selEl.addEventListener('change', getSel) // change è il tipo di evento quando sceglo un option del selector

function getSel(){
  console.log('change')
  const selVal = selEl.value
  console.log('Evento selezionato: ', selVal)
  
  if (selEl.value === "rosso"){  // setto il colore alla scelta del rosso
    const selC = document.getElementById('red')
    selC.classList.add('bg-red')
  }
}
```
`change` è il tipo di evento quando scelgo un option del selector

## Utilizzo tag date/datetime-local

Nell'HTML
```
<!--  input di tipo date  -->
  <input type="date" id="data">
  <input type="datetime-local" id="data">
```
Anche nel campo `date` c'è l'evento di tipo `change`
```
// input date
const date = document.getElementById('data')
date.onchange = getDate
function getDate(){
  console.log(date.value) // stampo valore della data presa da getElement 'data'
}
```

## Input color
Qui l'eventListener è di tipo `oninput`
```
<!--  input color  -->
  <input type="color" oninput = "c()" id="color">
```
Mentre nel JS è come sempre
```
// input color
function getCol(){
  const c = document.getElementById('color')
  console.log(c.value)
}
```

## Eventi window

Ci sono eventi collegati a tutta la finestra del browser e non solo ad uno specifico oggetto, es. lo scroll. Per questo si usa l'oggetto `window`.
<br>
Nel JS
```
// scroll window
window.addEventListener('scroll', function(){
  const scrollPosition = window.pageYOffset // la posizione la prendiamo dall'oggetto window, in questo caso window.pageYOffset
  console.log('la tua posizione: ', scrollPosition)
})
```

## Window onload
Ci da la possibilità di eseguire JS dopo che la pagina è stata caricata, a prescindere da dove si trovi il tag `<script>`. E' un po' come **"forzare"** lo script a fine body. 
<br>
Nell'HTML
```
<!--  input color  -->
  <input type="color" oninput = "getCol()" id="color">
<!--  Window scroll  -->
  <div style="height: 200px">Ciao</div>
  <script scr="main.js"></script>
  <div id="outOfScript">Ciaoo</div>
</body>
</html>

```

<br>

Nel JS
```
window.onload = function(){
  const out = document.getElementById('ouOfScript')
  console.log('here', out)
}
```