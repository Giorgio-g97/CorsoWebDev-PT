# Animazioni

proprietà `transision` serve per animare le proprietà CSS di un oggetto HTML (già visto nel modulo precedente). Si può usare Javascript creando una classe e agguingendola ad un elemento tramite una funzione JS. 
Es.

In CSS:
```
div.base-transition {
    background: lightcoral;
    transition: background 1s ease-out;
}

<!-- Qui creo nuova classe da inserire in JS -->
div.base-transition.lightgreen{
    background: lightgreen;
}
```

In JS:
```
function addClass(){
    const myDiv = document.getElementByClassName('base-transition');
    myDiv[0].classlist.add('lightgreen')
}
```

In HTML chiamo la funzione tramite btn:
```
<button onclick="addClass()">Click Here</button>
```

Per utilizzare tutte le funzione uso in JS, dopo aver preso un elemento (`getElement`) e applico lo stile tramite JS con .style.`stileDaApplicare`

es.
```

```