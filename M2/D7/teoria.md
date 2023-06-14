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
<select>
     <option value=""></option>
    <option value="">Rosso</option>
    <option value="">Blu</option>
    <option value="">Verde</option>
    <option value="">Giallo</option>
  </select>
```
La parte `value` non serve all'utente, ma a noi per capire il valore selezionato.
Nel JS
```
const selEl = document.getElementById('colori') // seleziono il selector
selEl.addEventListener('change', getSel)
function getSel(){
  console.log('change')
  const selVal = selEl.value
  console.log('Evento selezionato: ', selVal)
}
```
`change` è il tipo di evento quando scelgo un option del selector