# D4 - Array
Struttura dati che permette di accedere a valori multipli tramite unico nome.
# Matrici (matrix)
Si scrive così:
```
let matrix = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
]
```

Per accedere si usa:
```
console.log(matrix[index riga][index colonna], matrix[secondo index riga][secondo index colonna]);
```
# Ciclo per array
Per scorrere gli elementi di un array (ciclare) senza stamparli manualmente, utilizziamo il ciclo **for of** che può sostituire il ciclo **for normale**.
```
for (const iterator of array){

}
```
'iterator' va a sostituire: `i=0, i++ e myArray[i]`, perché il ciclo **for of** andrà ad iterare l'indice dell'array in automatico. In console.log si metterà l'iterator, perché è quella la parte dinamica che cambierà ogni volta.

---

**IMPORTANTE: IL FOR/ FOR OFF VENGONO UTILIZZATI SOLO CON ARRAY**
# Ciclo per gli oggetti

Per ciclare un oggetto si usa il **for in**:

```
for (const key in obj) {
    console.log('FOR IN: ', key/obj[key]) // si usa per cercare la chiave all'interno dell'oggetto
}
```
# Metodi degli Array
Ci sono una serie di funzioni dedicate per gli array che servono per manipolarli.

Funzione `Concat`
```
let prodottiInVendita = ['t-shirt', 'jeans', 'scarpe']
let prodottiFuoriProduzione = ['cappelli', 'guanti']
let prodottiTotali = prodottiInVendita.concat(ProdottiFuoriProduzione)
```
Funzione `Index Of` - cerca l'indice del contenuto trovato 
```
let clienti = ['Giorgio', 'Davide', 'Pietro']
let clienteCercato = 'Giorgio'
let indice = clienti.indexOf(clienteCercato)
// Qui inserisco una con iternario:
(indice !== -1) ? console.log(`L'utente ${clienteCercato} trovato all'indice ${indice}`)
: console.log(`L'utente ${clienteCercato} non è stato trovato.`)
```
Funzione `lastIndexOf` - trova il numero cercato all'ultimo indice all'interno dell'array (se c'è più di uno troverà sempre l'ultimo)
```
let numeri = [1,2,5,6,74,3]
let numeroDaTrovare = 1
let ultimoIndice = numeri.lastOfIndex(numeroDaTrovare)
console.log(`L'ultima occorrenza in cui esce il numero ${numeroDaTrovare} è all'indice ${ultimoIndice}`)
```
La funzione `pop` ci permette di rimuovere **l'ultimo** elemento di un array
```
let prodottiVendita = ['scarpe', 'cappelli', 'calze']
let rimuoviProdotto = prodottiVendita.pop()
console.log('Prodotti in vendita: ', prodottiVendita)
console.log('Prodotti rimossi: ', rimuoviProdotto)
```
Il `push` invece aggiunge elementi ad un array verso la fine
```
prodottiVendita.push('giacche', 'cravatte')
console.log(prodottiVendita) // Aggiunge giacche e cravatte verso la fine dell'array
```
Lo `slice` seleziona un determinato range all'interno di un array dichiarando l'indice di inizio **incluso** e quello di fine **escluso**
```
let prodottiVendita = ['scarpe', 'cappelli', 'calze','giacche', 'cravatte']
prodottiAggiornati = prodottiVendita.slice(1,3)
console.log(prodottiAggiornati) // ['cappelli', 'calze']
```
Se devi prendere un range fino all'ultimo elemento, dato che l'indice di fine è **escluso** utilizzi l'elemento `.length` che sarà sempre **l'ultimo indice+1**.
Es. 
```
let prodottiVendita = ['scarpe', 'cappelli', 'calze','giacche', 'cravatte']
prodottiAggiornati = prodottiVendita.slice(1,prodottiVendita.length)
console.log(prodottiAggiornati) // ['cappelli', 'calze','giacche', 'cravatte']
```
La funzione `.includes` serve per conoscere l'esistenza di un elemento all'interno di un array.
Es. 
```
let prodottiVendita = ['scarpe', 'cappelli', 'calze','giacche', 'cravatte']
let hoCalze = prodottiVendita.includes('calze')
console.log(hoCalze) // true
```
La funzione `join` serve per unire (appunto join) tutti i valori dell'array in un'unica stringa di testo, separato dal valore che scegli (es. virgola "," o lo spazio " ").
```
let stringaUnica = newArr.join(,)
console.log(stringaUnica) // output stringa con valori, separate da virgola ","
```
La funzione `splice` permette di **eliminare** i valori dall'array, indicando l'indice da selezionare, il numero di elementi da eliminare ed eventualmente il valore da sostituire. Potenzialmente può essere utilizzato semplicemente per aggiungere un valore all'interno di un indice specifico.
```
let colori = ['giallo', 'rosso', 'verde', 'blu']
let eliminaVerde = color.splice(2,1, 'arancio'); // elimina, partendo dall'indice 2, un solo elemento, e lo sostituisce con il valore 'arancio'
let aggiungiMagenta = color.splice(1,0,'magenta') // Aggiungo 'magenta' prima di 'rosso'
```
splice può essere 