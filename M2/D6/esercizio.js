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
const add = document.getElementsByTagName('address')
add.innerHTML = 'Corso Matteotti 3'
console.log(add)
}
chAdd()