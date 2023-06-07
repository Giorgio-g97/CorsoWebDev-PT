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

function pot() { // dichiarazione funzione

}
```