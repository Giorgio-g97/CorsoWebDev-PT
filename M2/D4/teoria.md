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

Per scorrere gli elementi di un array (ciclare) senza stamparli manualmente, utilizziamo il ciclo **for off** che può sostituire il ciclo **for normale**.
```
for (const iterator of array){

}
```
'iterator' va a sostituire: `i=0, i++ e myArray[i]`, perché il ciclo **for of** andrà ad iterare l'indice dell'array in automatico. In console.log si metterà l'iterator, perché è quella la parte dinamica che cambierà ogni volta.

---

**IMPORTANTE: IL FOR/ FOR OFF VENGONO UTILIZZATI SOLO CON ARRAY**

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

```
/* Last Index Of */
let numeri = [1,2,5,6,74,3]
let numeroDaTrovare = 1
let ultimoIndice = numeri.lastOfIndex(numeroDaTrovare)
console.log(`L'ultima occorrenza in cui esce il numero ${numeroDaTrovare} è all'indice ${ultimoIndice}`)
```