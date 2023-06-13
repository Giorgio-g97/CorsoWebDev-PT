// Esercizio 1
function crazySum(num1,num2){ // dichiaro funzione, mettendo due numeri come parametri
    let sum = 0
    sum = num1+num2         // fai la somma
    if(num1===num2){        // se i due valori sono uguali, alla somma moltiplicala per 3
      sum = sum*3
    }
    return sum              // salva il valore
  }
  // const risult = crazySum(2,2)  // crea costante risultato, chiamando la funzione con i parametri in input
  // console.log(risult)           // stampa il risultato
// Es. 2
function boundary(num){
    if((num >= 20 && num <= 100) || num === 400 ){ // combino and e or tra parentesi
      console.log(`Il numero è valido`)
    }else{console.log('Non è valido')}
    return num
  }
  const risult = boundary(4001)
  console.log(risult)
  // Es. 3
  function reverseStr(str){
    let completeStr = str.split("").reverse("").join("")    // combino più metodi per convertire str in array, invertirlo e riunirlo in stringa
    console.log(completeStr)
  }
  reverseStr('ciao')
  // Es. 4
  function upperFirst(str){
    let completeStr = str.charAt(0).toUpperCase().concat(str.slice(1)) // combino charAt per sel. la prima lettera, la rendo maiuscola e la concateno con il resto con uno slice, partendo chiaramente dalla seconda lettera
    console.log(completeStr)
  }
  
  upperFirst('ciao')
  // Es. 5
  function giveMeRandom(n){
    let ranArr = []
    for(i=0;i<=n;i++){
     ranArr.push(Math.floor(Math.random() * 10) + 1)
    }
    return ranArr
  }
  console.log(giveMeRandom(5))