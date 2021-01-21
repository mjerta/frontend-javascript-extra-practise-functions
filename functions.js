// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

function greet(name) {
  return "Hoi " + name + "!";
}

console.log(greet("Pietje"));

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840

function convertToSeconds(minutes) {
  return minutes * 60;
}

console.log(convertToSeconds(1));

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function isBiggerThanZero(number) {
  if (number > 0) {
    return true;
  }

  // als bovenstaande statement niet waar is, komen we automatisch aan bij deze return statement
  return false;
}

console.log(isBiggerThanZero(-3));

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function isBiggerThanHundred(a, b) {
  if (a + b > 100) {
    return true;
  }

  return false;
}

console.log(isBiggerThanHundred(89, 14));

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

function concatenate(wordArray) {
  let output = "";

  for (let i = 0; i < wordArray.length; i++) {
    output = output + wordArray[i];
  }

  return output;
}

console.log(concatenate(["a", "b", "c"]));

// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "lepel" geeft "lepel"
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

// OPTIE 1: FOR-LOOP
function reverseWord(word) {
  let reversed = '';

  // let op: deze for-loop telt af! Dus van achter naar voren!
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }

  return reversed;
}

console.log(reverseWord("vrienden"));

// OPTIE 2: STRING METHODEN
function reverseWordMethod(word) {
  // eerst stop je alle letters afzonderlijk in een array
  const letterArray = word.split('');
  // daarna draai je de volgorde van de array om (dit kan niet op een gewone string)
  const letterArrayReversed = letterArray.reverse();
  // dan voeg je alle items in de array samen tot één string
  const letterString = letterArrayReversed.join('');
  // voilá, je woord is omgedraaid!
  return letterString;

  // side note: dit kan ook allemaal achter elkaar in één zin:
  // return word.split('').reverse().join();
}

console.log(reverseWordMethod("lepel"));

/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

function isPalindrome(word) {
  let reversed = '';

  // let op: deze for-loop telt af! Dus van achter naar voren!
  for (let i = word.length - 1; i >= 0; i--) {
    reversed = reversed + word[i];
  }

  if (reversed === word) {
    return true;
  }

  return false;
}

console.log(isPalindrome("lepel"));

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function howManyTimes(sentence, letter) {
  let amount = 0;

  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    if (sentence[i] === letter) {
      amount++
    }
  }

  return amount;
}

console.log(howManyTimes("Hans en marietje lopen naar de supermarkt", "e"));

// ------------------------------- ADVANCED (Optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(array, n) {
  const lastEntryIndex = array.length - 1;

  // we kunnen checken of n is meegegeven, want als dat niet zo is zal hij undefined zijn
  if (n === undefined) {
    return array[lastEntryIndex];
  }
  return array.slice(lastEntryIndex - n, lastEntryIndex)
}

console.log(lastEntry([3, 6, 9, 17, 4, 6, 25, 4]));
console.log(lastEntry([46, 65, 34, 204, 190, 89], 3));

/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

function highest(numbersArray) {
  let highest = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (highest < numbersArray[i]) {
      highest = numbersArray[i];
    }
  }

  return highest;
}

console.log(highest([46, 65, 34, 204, 190, 89]));

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

// OPTIE 1, MET OUTPUT VARIABELE
function fizzBuzzOne() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || i);
  }
}

console.log(fizzBuzzOne());

// OPTIE 2, MET DIRECTE CONSOLE.LOG()
function fizzBuzzTwo() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzzTwo());
