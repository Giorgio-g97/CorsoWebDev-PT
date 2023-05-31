// Es. 1
// let a = 13;
// let b = 5;

// if (a > b) {
//     console.log('Il numero più grande è: ', a);
// } else {
//     console.log('Il numero più grande è: ', b);
// }

// Es. 2
// let num = 4;
// if (num < 5) {
//     console.log('Tiny');
// } else if (num < 10) {
//     console.log('Small');
// } else if (num < 15) {
//     console.log('Medium');
// } else if (num < 20) {
//     console.log('Large');
// } else if (num >= 20) {
//     console.log('Huge');
// }

// Es. 3
// for (i = 0; i <= 10; i++) {
//     if (i == 3 || i == 8) { // Uso OR per abbreviare il codice
//         continue;            // o con && con != per farlo ancora più breve
//     } else {
//         console.log(i)
//     }
// }

// Es. 4
// for (i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i, 'è un numero pari');
//     } else {
//         console.log(i, 'è un numero dispari')
//     }
// }

// Es. extra-1
// dichiaro le variabili
// let a = 0;
// let b = 10;
// // inizio con le condizioni
// if (a == 8) { console.log('Primo valore: ', a) }
// else if (b == 8) { console.log('Secondo valore: ', b) }
// else if (a - b == 8) {
//     let dif = a - b;
//     console.log('Stampo differenza: ', dif);
// }
// else if (b - a == 8) {
//     let dif = b - a;
//     console.log('Stampo differenza: ', dif);
// }
// else if (a + b == 8) {
//     let sum = a + b;
//     console.log('Stampo somma: ', sum)
// }
// else { console.log('nada') }

// Es. extra-2
// let totalShoppingCart = 49;
// if (totalShoppingCart >= 50) { console.log('Totale pagamento: ', totalShoppingCart, 'Spedizione gratuita!') }
// else { totalShoppingCart += 10; console.log('Totale pagamento: ', totalShoppingCart); }

// Es. extra-3
// let totalShoppingCart = 49;
// let sales20 = (totalShoppingCart / 100) * 20;
// let totalsalesCart = totalShoppingCart - sales20;
// if (totalShoppingCart >= 50) {
//     console.log('Totale pagamento: ', totalsalesCart, 'Spedizione gratuita!');
// }
// else {
//     totalsalesCart += 10;
//     console.log('Totale pagamento: ', totalsalesCart);
// }

// Es. extra-4
// let gender
// let isMale = false
// isMale == true ? gender = 'male' : gender = 'female'
// console.log(gender);

// Es. extra-5
// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     }
// }