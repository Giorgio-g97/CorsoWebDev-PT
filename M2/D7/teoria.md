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
## Esempi su teoria.html/js