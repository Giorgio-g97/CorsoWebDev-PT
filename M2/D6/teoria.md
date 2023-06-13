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