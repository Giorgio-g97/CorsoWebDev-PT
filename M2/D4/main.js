// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/
const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [157, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

// Step 1: creo array di oggetti
let userArr = [];
userArr.push(marco, paul, amy); // Add users with push
console.log(userArr);
// Step 2: stampo con loop for in per ogni utente la frase se è Ambassador o no
for(i=0;i<userArr.length;i++){ // Ciclo for
  let utente = userArr[i]
  let frase = `L'utente con nome ${utente.name} e cognome ${utente.lastName} `
  if(!utente.isAmbassador){frase += 'NON '}
  frase += "è Ambassador"
  console.log(frase)
}

//  Ciclo for in
// for (let key in marco) {
//   console.log(`L'utente con nome ${marco["name"]} e cognome ${marco["lastName"]}`);
//   if (marco["isAmbassador"] === true) { console.log('è Ambassador') }
//   else { console.log('non è Ambassador') };
//   break;
// }

// for (let key in paul) {
//   console.log(`L'utente con nome ${paul["name"]} e cognome ${paul["lastName"]}`);
//   if (paul["isAmbassador"] === true) { console.log('è Ambassador') }
//   else { console.log('non è Ambassador') };
//   break;
// }

// for (let key in amy) {
//   console.log(`L'utente con nome ${amy["name"]} e cognome ${amy["lastName"]}`);
//   if (amy["isAmbassador"] === true) { console.log('è Ambassador') }
//   else { console.log('non è Ambassador') };
//   break;
// }
console.log(`Utente che effettua l'acquisto: ${utenteCheEffettuaLAcquisto.name}`)
// Step 3: fai somma dei prezzi
let totalePrezzi = 0;
for (i = 0; i < prices.length; i++) {
  totalePrezzi += prices[i];
}
console.log(`Totale prezzi: ${totalePrezzi}`);
// Verifica se l'utente che effettua acquisto è ambassador, se si applica sconto e aggiorna il totale prezzi
if (utenteCheEffettuaLAcquisto["isAmbassador"] === true) {
  let prezzoScontato = totalePrezzi * .30;
  totalePrezzi -= prezzoScontato;
  console.log(`Applico sconto Ambassador del 30%: ${Math.ceil(totalePrezzi)}`)
}
else { console.log('non applico sconto') }

// Verifica se il totalePrezzi è superiore a 100, se si non applicare spedizione, altrimenti aggiungi shippingCost
if(totalePrezzi >= 100){
  console.log('Prezzo totale superiore a 100 euro, spedizione gratuita!')
}
else {
  totalePrezzi += shippingCost;
console.log(`Spedizione inferiore a 100, applico spedizione. Totale carrello: ${totalePrezzi}`);
}