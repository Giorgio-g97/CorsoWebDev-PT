# Interazione con il DOM
Vedremo come manipolare il DOM HTML con Javascript
Come interagire:
* Selezionare/creare elemento (o nodo, es. body, meta, title ecc..)
* Modificarlo

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)
## Selezionare elemento
* **document.getElementById**: seleziona singolo oggetto (dato che nell'HTML dovrebbe esserci solo un elemento avente ID univoco)
* **document.getElementByClassName**: seleziona **array** di oggetti aventi la stessa classe
* **document.getElementByTagName**: **array** di oggetti avente stessa classe
* **document.querySelector**: selezione **selettore specifico di classe o id**
* **document.querySelectorAll**: seleziona tutti i **selettori di classe o id** (per gli id non ha senso)
* **node.children**: seleziona array di elementi figli
## Esempi in main.js
## Creare elementi (o nodi) tramite JS (es. un div)
Si crea salvando in una variabile il `document.createElement('elemento')`
## Collocarli nell'HTML
Si fa questo secondo passaggio perché al momento della creazione, viene solo salvato in una variabile JS, ma non nell'HTML.
Ci sono sostanzialmente due modi:
* con **appendChild(newEl)**:
```
let body = document.querySelector('body')
body.appendChild('newDiv')
```
In questo modo verrà creato come **ultimo figlio** del tag body

* **containerNode.insertBefore(newNode, subsequentNode)**
Colloca il nuovo nodo prima del tag indicato