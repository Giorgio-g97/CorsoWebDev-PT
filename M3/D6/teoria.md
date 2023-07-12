# Animazioni

proprietà `transision` serve per animare le proprietà CSS di un oggetto HTML (già visto nel modulo precedente). 

## Sintassi:

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

Un altro metodo per applicare animazioni sono le transizione con i `keyframes`. Servono per applicare animazioni ad un oggetto per ogni keyframe (come nei film) specificando, punto per punto, quali proprietà devono cambiare, in base chiaramente ai secondi impostati.

Es.

in HTML
```
<div class="box keyframes-transition">
    Keyframes transition
</div>
```

in CSS:

```
div.keyframes-transition {
    background: lightcoral;
}

div.keyframes-transition:hover {
    animation: bgChange; // è il nome dell'animazione keyframe
    animation-duration: 3s;
}

@keyframes bgChange {
    from {
        background: lightcoral;
    }
    to {
        background: lightgreen;
    }
}
```

## Transform

Ha delle proprietà per far muovere elementi HTML (es. translate).
In HTML:
```
<div class="box colored linear">
    Linear
</div>
```

in CSS:
```
.colored {
    background: blue;
}

.box.colored {
    margin-right: 10px;
    transform: none; // rimane fermo
    transition: all 3s;
}

.box.colored.linear {
    transition-timing-function: linear;
}
```

in HTML creo un button per applicare il movimento del box al click del btn:
```
<button onclick="moveBox()">Click</button>
```

in JS creo la funzione che permette di fare il movimento appena descritto:
```
function moveBox(){
    const box1 = document.getElementsByClassName('box colored')[0];
    box1.classList.toggle('active'); // 'active' è la classe che si toglie/mettere al click
}
```

in CSS creo la classe 'active' che muoverà il box:
```
.box.colored.active {
    transform: translateX(300px, 50px) rotate(90deg) scale(2);
}
```

in questo caso sposterà il box di 300px sull'**asse orizzontale**, 50px sull'**asse verticale**,  lo **ruoterà** di 90 gradi e lo **ingrandirà** di 2 volte rispetto la sua dimensione.

Es.2 - prendiamo lo stesso box e lo duplichiamo, ma modifichiamo il timing-function in ease:

in HTML aggiungiamo altro div:
```
<div class="box colored ease">
    Ease
</div>
```
in CSS aggiungiamo un'altra classe 'ease':
```
.box.colored.ease {
    transition-timing-function: ease-in-out;
}
```
chiaramente in JS aggiungiamo altro `getElementsByClassName` alla funzione precedentemente creata:
```
function moveBox(){
    const box1 = document.getElementsByClassName('box colored')[0];
    box1.classlist.toggle('active');
    const box2 = document.getElementsByClassName('box colored')[1];
    box2.classList.toggle('active')
}
```
Stessa cosa per un box con timing-function custom:
in HTML
```
<div class="box colored custom">
    Custom
</div>
```

in CSS:
```
.box.colored.custom {
    transition-timing-function: cubic-bezier(.17,.67,.83,.67); // tramite cubo bezier
}
```

in JS aggiungi altro elemento:
```
function moveBox(){
    const box1 = document.getElementsByClassName('box colored')[0];
    box1.classlist.toggle('active');
    const box2 = document.getElementsByClassName('box colored')[1];
    box2.classList.toggle('active');
    const box3 = document.getElementsByClassName('box colored')[2];
    box3.classList.toggle('active');
}
```