# Git comandi

- git init: inizializza cartella locale **da dove stai operando** per Git

- git add *nomefile*: aggiungi all'area di staging i file all'interno della cartella inizializzata con git
- git commit -m "messaggio": committa i file inseriti dall'add all'interno della repo locale con un messaggio descrittivo

- git branch -M main: rinomina il branch con il nuovo

- git remote add origin "link repo GitHub": sincronizza la repo locale con quella online su GitHub

- git push -u origin main: pusha la sincronizzazione da locale a remoto (GitHub)

- git log: stampa tutti i commit fatti localmente

- git status: mi fa vedere i file modificati/aggiunti ecc..

- git fetch: aggiorna le modifiche fatte senza scaricare materialmente i file o le modifiche. (es. dev2 pusha modifica file, io facendo git log vedo solo l'ultima modifica fatta localmente, mentre facendo git fetch scarico le ultime modifiche fatte, vedendo anche la sua, senza però scaricarle materialmente). Con git merge poi si possono scaricare le modifiche sul codice.

- git checkout -b *nome branch*: spostati nel branch (checkou), creo un nuovo branch (-b) e scrivo il nuovo nome del branch

- git checkout *nome branch*: mi sposto nel branch già creato

- git branch -r -a: lista branch, per i remoti aggiungo -r, per tutti aggiungo -a

- (nel branch dove apportare modifiche) git merge **branch da unire**: Se chiede un commit e non si vuole inserire nulla, si fa **Ctr+X**. Per mergare le modifiche basta **solo il commit**, non è necessario pushare

- (in altro branch, che non è quello da eliminare) git branch -D (maiuscola) *nomebranch*