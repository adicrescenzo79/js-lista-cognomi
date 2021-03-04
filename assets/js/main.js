// creo una lista di cognomi
var cognomi = [
  "Sozzi",
  "Livio",
  "Alivernini",
  "Giammario",
  "Parisi",
  "Rubicondo",
  "Bernini",
  "Marino",
  "Secondini",
  "Sabatini",
  "Tabbì"
]

// controllo
console.log(cognomi);

// chiedo il cognome aqll'utente
var cognome = prompt("Dammi il tuo cognome con la prima lettera maiuscola:");

// controllo
console.log(cognome);

// aggiungo il cognome dell'utente alla lista
cognomi.push(cognome);

// controllo
console.log(cognomi);

// metto la lista in ordine alfabetico
cognomi.sort();

// controllo
console.log(cognomi);

// stampo la lista
lista = [];
for (var i = 0; i < cognomi.length; i++) {
  lista += "<li>" + cognomi[i] + "</li>";
  document.getElementById("list").innerHTML = lista;
}


// con un'iterazione cerco il cognome inserito nella lista facendola fermare quando lo trova
for (var i = 0; i < cognomi.length; i++) {
  if (cognome == cognomi[i]) {
    break;
  }
}

// ad i (che mi da la posizione nell'array) aggiungo 1 per dargli una posizione "umana"
i += 1

// controllo
console.log("Ti trovi al posto " + i);

// stampo il risultato
document.getElementById("posto").innerHTML = "Ti trovi al posto " + i;
