// Es. 1 JS
function chH1(){
    const title = document.getElementById("title")
    title.innerHTML = 'G Shop 24, acquista ora'
}
chH1()
// Es. 2 JS
function chColor(){
    const bgC = document.getElementsByTagName('body')
    bgC[0].classList.add('bg-body')
}
chColor()

// Es. 3 JS
function chAdd(){
const indir = document.getElementsByTagName('address')
indir[0].innerHTML = 'Corso Matteotti 3'
}
chAdd()

// Es. 4 JS
function linkC(){
    const linkA = document.querySelectorAll('a')
    for (i=0; i<=linkA.length; i++){
    linkA[i].classList.add('link-color')
    }
}
linkC()

// Es. 5 JS
function remImg(){
  const rmImg = document.querySelectorAll('img')
  for (i=0;i<=rmImg.length;i++){
    rmImg[i].classList.toggle('img-hidden')
  }
}

// Es. 6 JS
function getRanCol(){
    const red = Math.round(Math.random() * 255)
      const green = Math.round(Math.random() * 255)
      const blue = Math.round(Math.random() * 255)

      return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}
const rC = getRanCol()
console.log(rC)
function ranCol(){
    const rCol = getRanCol()
    const prices = document.querySelectorAll('.price')
    for(i=0;i<=prices.length;i++){
        prices[i].style.color = rCol 
    }
}