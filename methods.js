// We hebben een array met e-mailaddressen van medewerkers in ons systeem.

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

/* Opdracht 1 */
// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl.
console.log("Opdracht 1a");
emailadresses.push("m.westerbroek@novi.nl");
console.log(emailadresses);

// 1b. Er zullen ongetwijfeld vaker emailadressen toegevoegd moeten worden. Binnen het bedrijf zijn er echter lijsten voor medewerkers,
// maar ook voor studenten. Schrijf een herbruikbare functie die een email-lijst en nieuw-emailadres verwacht en deze vervolgens toevoegt aan die lijst.
function addNewEmail(whichArray, emailAddress) {
  whichArray.push(emailAddress);
}

console.log("Opdracht 1b")
addNewEmail(emailadresses, "maarten.postma1000@gmail.com");
console.log(emailadresses);

/* Opdracht 2 */

// 2a. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit! Zijn emailadres is n.stuivenberg@novi.nl
function searchEmailInArray(whichArray, searchEmail) {
  return whichArray.includes(searchEmail);
}

const searchString = "n.stuivenberg@novi.nl";
console.log("\nOpdracht 2a");
console.log(searchEmailInArray(emailadresses, searchString));

// 2b. Schrijf een herbruikbare functie die een email-lijst en achternaam verwacht. Wanneer er een emailadres met die achternaam voorkomt, wordt het emailadres teruggegeven.
// Als er niets wordt gevonden, returnt de functie null.

function searchPerson(whichArray, lastName) {
  for (let i = 0; i < whichArray.length; i++) {
    if (whichArray[i].includes(lastName)) {
      return whichArray[i];
    }
  }
  return null;
}

console.log("\nOpdracht 2b")
console.log(searchPerson(emailadresses, "stuivenberg"));

/* Opdracht 3 */
// 3a. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zjin komen werken. Nu blijkt echter dat een andere nieuwe collega, Tess,
// bij Novi is komen werken vóór Melissa. Haar e-mailadres (t.mellink@novi.nl) moet dus worden toegevoegd op de één na laatste plek.
// Let op: je weet niet hoe lang de lijst is!
function addEmailBeforeLastIndex(whichArray, emailAddress, index = whichArray.length - 1) {
  whichArray.splice(index, 0, emailAddress);
  return whichArray;
}

console.log("\nOpdracht 3a");
console.log(addEmailBeforeLastIndex(emailadresses, "t.mellink@novi.nl"));

// 3b. Bij de vorige vraag wisten we gelukkig waar Melissa stond in de lijst. Maar soms weten we dat niet! Schrijf een functie die emailadres Y bijvoegt in de lijst vóór emailadres Z.
function addEmailBeforeCertainEmail(whichArray, emailAddress, beforeOtherEmail) {
  const indexOtherEmail = whichArray.indexOf(beforeOtherEmail);
  whichArray.splice(indexOtherEmail, 0, emailAddress);
  return whichArray;
}

console.log("\nOpdracht 3b");
console.log(addEmailBeforeCertainEmail(emailadresses, "test@test.nl", "m.westerbroek@novi.nl"));

/* Opdracht 4 */
// Er staat een foutje in de lijst. Het email adres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

function replaceEmailFromList(whichArray, searchEmail, newEmail) {
  const indexSearchEmail = whichArray.indexOf(searchEmail) ;
  whichArray.splice(indexSearchEmail, 1, newEmail);
  return whichArray;
}

console.log("\nOpdracht 4");
console.log(replaceEmailFromList(emailadresses, "m.vandergeest@novi-education.nl", "m.vandergeest@novi.nl"));
