# Animazioni

proprietà `transision` serve per animare le proprietà CSS di un oggetto HTML (già visto nel modulo precedente). 

Sintassi:

![sintassi transition](https://designshack.net/wp-content/uploads/transitiondelays-1.jpg)

Il `timing function` è personalizzabile tramite `cubic-bezier` [link al sito](https://cubic-bezier.com/).

Si può usare Javascript creando una classe e agguingendola ad un elemento tramite una funzione JS.

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
    const myDiv = document.getElementsByClassName('base-transition'); // siccome è un "getElements" bisogna specificare quale prendere con l'indice [0]
    myDiv[0].classlist.add('lightgreen')
}
```

In HTML chiamo la funzione tramite btn:
```
<div class="base-transition">
    Base Transition
</div>

<button onclick="addClass()">Click Here</button>
```

Per utilizzare tutte le funzione uso in JS, dopo aver preso un elemento (`getElement`) e applico lo stile tramite JS con .style.`stileDaApplicare`

es.

in JS
```
function startAllTransitions(){
    const myDiv = document.getElementsByClassName('all-transitions');
    myDiv[0].style.background = 'lightcoral';
    myDiv[0].style.marginTop = '200px';
    myDiv[0].style.paddingLeft = '130px';
}
```

in CSS:
```
div.all-transitions {
    background: lightgray;
    transition-duration: 3s;
    transition-property: all; // con "all" rende tutte le proprietà CSS "animabili"
    transition-delay: .3s;
}
```

in HTML
```
<div class="all-transitions">
    All transitions
</div>

<button onclick="startAllTransitions()">Clicca Qui</button>
```

## Transizioni Keyframe

! (immagin)