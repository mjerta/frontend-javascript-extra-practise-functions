// -------------------------------  LEVEL 1

/* Opdracht 1 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function isBiggerThenZero(number) {
  return number > 0;
}

console.log("Opdracht 1 - isBiggerThenZero")
console.log(isBiggerThenZero(10));

/* Opdracht 2 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function combinedNumbersBiggerThenHundred(number1, number2) {
  const sumCombinedNumbers = number1 + number2;
  return sumCombinedNumbers > 100;
}

console.log("Opdracht 2 - combinedNumbersBiggerThenHundred")
console.log(combinedNumbersBiggerThenHundred(50, 50));

/* Opdracht 3 */
// Schrijf een functie die een zin verwacht en de eerste letter uit de zin omzet naar een hoofdletter.
// ---- Verwachte uitkomsten:
// "de kat krabt de krullen van de trap" geeft "De kat krabt de krullen van de trap"
// "programmeren is super leuk!" geeft "Programmeren is super leuk!"

function upperCase(string) {
  const firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
}

console.log("\nOpdracht 3 - upperCase");
console.log(upperCase("de kat krabt de krullen van de trap"));

/* Opdracht 4 */
// Schrijf een functie die een argument verwacht en het datatype teruggeeft (boolean, object, undefined, number, string,function)
// Tip: gebruik typeof (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
// { name: 1 } geeft object
// undefined geeft undefined
// "Hallo" geeft string
// [1, 2, 3] geeft object (ja echt!)
function getType(input) {
  return typeof input;
}

console.log("\nOpdracht 4 - getType");
console.log(getType([1, 2, 3]));

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is weet je niet van tevoren - het zouden zomaar 100 entries kunnen zijn.
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier géén array- of string methoden voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

function createRandomString(length) {
  const charSet = "abcdefghijklmnopqrstuvwxyz";
  let str = '';
  for (let i = 0; i < length; i++) {
    str += charSet[Math.floor(Math.random() * charSet.length)];
  }
  return str;
}

const createRandomArray = (lengthOfArray, stringLength) => {
  const arr = []
  for (let i = 0; i < lengthOfArray; i++) {
    arr.push(createRandomString(stringLength));
  }
  return arr;
}

function joinStrings(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str += array[i];
  }
  return str;
}

const newArray = createRandomArray(5, 2);
console.log("\nOpdracht 5 - joinStrings")
console.log(joinStrings(newArray));

/* Opdracht 6 */
// Schrijf een functie die een zin verwacht en het langste woord uit die zin teruggeeft. Als er meerdere woorden het langst zijn, wordt het laatste langste woord terug gegeven.
// ---- Verwachte uitkomsten:
// "Frontend web development" geeft "development"
// "De eindopdracht telt voor 30 ECTS" geeft "eindopdracht"
// "Een API staat voor Application Programming Interface. Met deze technologie zul je vaak gaan werken." geeft "technologie"

function getLongestWord(sentence) {
  const arr = sentence.split(" ")
  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

console.log(getLongestWord("Frontend web development"));

// -------------------------------  LEVEL 2

/* Opdracht 6 */
// 6a. Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde methoden doen, de keus is aan jou.
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

function reverseWordWithMethods(word) {
  return word.split("").reverse().join("");
}

console.log("\n Opdracht 6 - reverseWordWithMethods")
console.log(reverseWordWithMethods("koekje"));

function reverseWordWithoutMethods(word) {
  if (word === "") {
    return word;
  } else {
    return reverseWordWithoutMethods(word.slice(1)) + word.charAt(0);
    // let remainingWord = word.slice(1);
    // let firstChar = word.charAt(0);
    // let result = reverseWordWithoutMethods(remainingWord) + firstChar;

    // Debugging log to see the intermediate steps
    // console.log(`remainingWord: "${remainingWord}", firstChar: "${firstChar}", result: "${result}"`);
    // return result;
  }
}

console.log("\nOpracht 6 - reverseWordWithMethods");
console.log(reverseWordWithoutMethods("hello"));

// 6b. Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false

function isPalindroom(word) {
  return word === reverseWordWithMethods(word);
}

console.log("\nOpdracht 6b");
console.log(isPalindroom("madam"));

/* Opdracht 7 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor géén string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2

function checkAmountOfSpecificLetter(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++
    }
  }
  return count;
}

console.log("\nOPdracht 7");
const amountOfCharacters = checkAmountOfSpecificLetter("Hans en marietje lopen naar de supermarkt", "e");
console.log(amountOfCharacters);

/* Opdracht 8 */
// Schrijf een functie die bij iedere aanroep een random string id genereert van 8 tekens. Er mag gebruik gemaakt worden van de volgende karakters:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// ---- Verwachte (mogelijke) uitkomsten:
// iizdX7Ax
// gajxBhGs

function randomStringId() {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomStringID = "";

  for (let i = 0; i < 8; i++) {
    randomStringID += charSet[Math.floor(Math.random() * charSet.length)]
  }
  return randomStringID;
}

console.log("\nOpdracht 8");
console.log(randomStringId());

// ------------------------------- LEVEL 3 (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Let op: Als er een getal als tweede argument wordt meegegeven (de parameter n), worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 8]) geeft 8
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(arr, n) {
  if (n) {
    return arr.slice(-n);
  }
  return arr[arr.length - 1];
}

console.log("\nOpdracht 9 - lastEntry");
console.log(lastEntry([46, 65, 34, 204, 190, 89], 2))

/* Opdracht 10 */
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

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i)
    }
  }
}

console.log("\nOpdracht10 - FizzBuzz");
fizzBuzz();

/* Opdracht 11 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft, ongeacht hoeveel items er in de array staan.
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function greetings(arr) {
  lastEntry = arr.pop();
  return `Hoi ${arr.join(", ")} en ${lastEntry}!`;
}

const greetOne = greetings(["Nick", "Nova", "Mitchel", "Arjen"]);
console.log("\nopdracht5 - greetings")
console.log(greetOne);
