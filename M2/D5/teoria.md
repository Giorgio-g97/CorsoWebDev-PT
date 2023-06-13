# Switch case
serve per snellire codice se abbiamo una serie di `else if` con vari casi. Vediamo un esempio: 
```
switch (key) { //key=var da sottoporre a condizioni
    case1 value:
        
        break;
    case2 value:

        break;

        ...

    default: //default in caso non soddisfi nessun case
        break;
}
```
**IMPORTANTE**: utilizza sempre il `break;` alla fine di ogni `case` per evitare che si verifichino condizioni indesiderate o addirittura errori.
# Funzioni
- Consente di eseguire più istruzioni
- Permette di richiamarlo ogni volta che vogliamo
- Può restituire un risultato
- Rende più snello il codice (DRY, Don't Repeat Yourself)
- Eviti di copiare ed incollare lo stesso codice, in modo da fare manutenzione facilmente
- Può prendere degli input chiamati **parametri** (o argomenti)
Es.
```
const n = 4; // voglio calolare il quadrato
const n_square = 4 * 4;
console.log(n_square);
// per non ripetere l'operazione con infiniti numeri si usano le funzioni..

function pot4() { // dichiarazione funzione
    const risult = 4 * 4
    console.log('Calcolo potenza di quattro:', risult)
}
```

Per richiamare una funzione, si fa semplicemente inserendo il suo nome, senza dicitura `function`.

es. 
```
let n = 0;

pow4()
```
Per dichiarare una variabile nella funzione (argomento, parametro) si inserisce la variabile tra le parentesi della funzione
```
function pow(num){
    const risult = num * num
    console.log('La potenza è:', risult)
}

pow(5) // 'La potenza è 25'
```

Per salvare il risultato uscito dalla funzione, questo deve essere "ritornato" tramite `return`.
```
const risultatoFun = pow(10)

console.log(risultatoFun) // undefined
```
Questo perché non salva il risultato nella costante, ma quello che c'è all'interno della funzione, ovvero la stampa in `console.log`.

```
function pow(num){
    const risult = num * num
    console.log('La potenza è:', risult)
    return risult; // ritorna il risultato, rendendolo "salvabile" successivamente in costanti/variabili
}

const risultatoFun = pow(10)

console.log(risultatoFun) // 100

const risultatoFun2 = pow(risultatoFun)
console.log(risultatoFun2) // 10.000 (100*100)
```
Stesso discorso per le stringhe:

```
function saluto (){
    return 'Ciao benvenuto!'
}

const messaggio = saluto()

alert(messaggio) // Alert 'Ciao benvenuto'
```
Per renderli generici in un array ad esempio:

```
let arrOrders = [
    {name: "scarpe", prezzo: 10, quantita = 3}
    {name: "cappello", prezzo: 5, quantita = 1}
    {name: "calze", prezzo: 3, quantita = 2}
    {name: "tshirt", prezzo: 8, quantita = 5}
]

function calcTotAm(quantity, price){ // dichiaro parametri come "segnaposto" per fare l'operazione e renderla generica

return quantity*price;

}
let totAm = 0

for(const product of arrOrders) {
    totAm += calcTotAm(arrOrders.quantita, arrOrders.prezzo)
}

console.log('Il totale è: ', totAm)
```

Es. Calcolo media di un array di numeri: 

```
function calcMedia(arrNums){ // arrNums generico per ciclare
    let sum = 0
    for (const n  of arrNums){
        sum += n    // sommo i valori
    }
    return sum / arrNums.length // ritorna la somma e divide per numero di componenti dell'array
}

let arr1 = [1,32,54,3,5,23,2,234] // dich. array
const r1 = calcMedia(arr1)
console.log('La media è: ', r1) //calcolo media arr1
```
Es. 2: Saluta con nome utente personalizzato:
```
function saluta(userName){
    console.log(`Ciao ${userName}, benvenuto`)
}

const salutaGiorgio = saluta('Giorgio')
console.log(salutaGiorgio) // Ciao Giorgio, benvenuto
```
Si usano funzioni con oggetti, magari per evitare di dichiarare tanti parametri all'inizio della funzione stessa.
Es.
```
let infoG = {
    name: 'Giorgio',
    cognome: 'Guadagno',
    citta: 'Foggia',
    eta: 25
}

function infoObj(objMod){
    console.log('Il nome utente è: ', objMod.name)
}

infoObj(infoG) //Il nome utente è: Giorgio
```
# Metodi delle stringhe
* .toLowerCase() / toUpperCase() // rende minuscolo/maiuscolo carattere
```
let str = 'CIAO'
let strLow = str.toLowerCase()
console.log(strLow) // ciao

let str2 = 'ciao'
console.log(str.toUpperCase) // 'CIAO'
```
* .includes // per sapere se una parola è inclusa nella stringa

```
let str = 'Ciao a tutti'
console.log(str.includes('tutti')) // true
console.log(str.includes('noi')) // false
console.log(str.includes('ciao')) // false perchè minuscolo, ma se annidiamo più metodi..

console.log(str.toLowerCase().includes('ciao')) // true
```

L'ultimo pezzo di codice mi da `true` perchè prima mi riporta il testo in minuscolo, in modo da poter cercare tranquillamente in minuscolo qualsiasi cosa dopo con `.includes`.

* .concat() // per concatenare più stringhe
```
let str1 = 'ciao'
let str2 = 'ciao2'
console.log(str.concat(str2) // ciaociao2)
```
* .repeat // ripete la stringa n volte
```
let str = 'ciao'
console.log(str.repeat(3)) // ciaociaociao
```
* .replace // sostituisce **alla prima occorrenza**
```
let str = 'ciao a tutti mondo, come stai mondo?'
console.log(str.replace('mondo', 'Java')) // ciao a tutti Java, come stai mondo?
```
* .replaceAll // sostituisce **a tutte le occorrenze**
```
let str = 'ciao a tutti mondo, come stai mondo?'
console.log(str.replaceAll('mondo', 'Java')) // ciao a tutti Java, come stai Java?
```
Es. check password
```
function checkPassword(password){ // dal parametro 'password' passerà la psw che l'utente inserirà
    let specialChar = "@#!?+_-" // inizializzo dizionario per controllo psw
    let lowChar = 'abcdefghijklmnopqrstuvwxyz'
    let upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let digit = '0123456789'

    let hasSpecial = false // pongo di base valore false
    let hasLow = false
    let hasUp = false
    let hasDig = false

    for(const char of password){ //ciclo psw stampando lettera per lettera
        if(specialChar.includes(char)){hasSpecial=true}
        if(lowChar.includes(char)){hasLow=true}
        if(upChar.includes(char)){hasUp=true}
        if(digit.includes(char)){hasDig=true}
    }

    return (hasSpecial && hasLow && hasUp && hasDig && password.length > 8)
}

let risult = checkPassword('')
console.log('La password risulta accettabile: ', risult)
```