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
};


const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};


let carrello = 0
const prices = [34, 5, 2];
for (let i = 0; i < prices.length; i++) {
  carrello += prices[i]

}

let lowPrices = carrello - (carrello * 30) / 100;
const shippingCost = 50;

let utenteCheEffettuaLAcquisto = null ;//cambia il valore qui per provare se il tuo algoritmo funziona!
const persone = [marco , paul , amy];
for (let i = 0; i < persone.length; i++) {
  utenteCheEffettuaLAcquisto = persone[i]


  if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
    console.log
      (utenteCheEffettuaLAcquisto.name, "è un Ambassador, la sua spesa sarà scontata del 30%, quindi sarà di " +
      lowPrices + "€ anzichè " + carrello + "€ senza spedizione");
    if (lowPrices < 100) {
      console.log
        ("ricordiamo che la spesa comunque è inferiore a 100€ perciò vi è un costo addizionale di " + shippingCost + "€");
      console.log
      ("Perciò la spesa sarà di " + (lowPrices + shippingCost) + "€");
  } else {
      console.log
      ("la spesa è superiore a 100€ perciò la spedizione è gratuita");
    }
  }
  else {
    console.log
      (utenteCheEffettuaLAcquisto.name, "non è un Ambassador, la sua spesa non sarà scontata del 30%, quindi sarà di " +
      carrello + "€ senza spedizioe");
    if (carrello < 100) {
      console.log
        ("ricordiamo che la spesa comunque è inferiore a 100€ perciò vi è un costo addizionale di " + shippingCost + "€");
      console.log
        ("Perciò la spesa sarà di " + (carrello + shippingCost) + "€");
    }
    else {
      console.log
        ("la spesa è superiore a 100€ perciò la spedizione è gratuita");
    }
  }


}

// INIZIO SECONDA PARTE DELL'ESERZIO
console.log("******* INIZIO SECONDA PARTE DELL'ESERZIO *******");

console.log("CHI E' AMBASSADOR E CHI NO?");

const utenti = [];
utenti.push(marco , paul, amy)

for (let i = 0; i < utenti.length; i++) {

  if (utenti[i].isAmbassador === true) {
    console.log(utenti[i].name ,utenti[i].lastName, "è un ambassador");
  }
  else {
    console.log(utenti[i].name ,utenti[i].lastName, "non è un ambassador");
  }

}
console.log("CHI E' AMBASSADOR TRA MARCO, PAUL E AMY ?");
const clienti = []
clienti.push(marco , paul , amy)

for (let i = 0; i < clienti.length; i++) {

  if (clienti[i].isAmbassador === true) {
      console.log(clienti[i].name ,clienti[i].lastName, "è un ambassador");
  }
  else {
    break
  }

}
