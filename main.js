console.log('ciao studenti');


//
// Creare un oggetto che descriva uno studente con le seguenti
// proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.


var studente1 = {
  'nome': 'pinco',
  'cognome': 'pallo',
  'eta': 24
}

// console.log(studente1);


var chiave = '';
for(var key in studente1){
  chiave += studente1[key];
}
console.log(chiave);

// oppure
var chiave = '';
for(var key in studente1){
  chiave = studente1[key];
  console.log(chiave);
}





// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
// e stampare per ognuno nome e cognome


var studente2 = {
  'nome': 'tutto',
  'cognome': 'enulla',
  'eta': 25
}

var studente3 = {
  'nome': 'aciascuno',
  'cognome': 'ilsuo',
  'eta': 26
}

var studente4 = {
  'nome': 'chinonrisica',
  'cognome': 'nonrosica',
  'eta': 27
}

var classe = [studente1, studente2, studente3, studente4];

for (var i = 0; i < classe.length; i++) {

    console.log(classe[i].nome);
    console.log(classe[i].cognome);
  
}

// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
