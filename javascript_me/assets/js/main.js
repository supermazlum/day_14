//Einzeiliger Kommentar

/* 
=======================
mehrzeiliger Kommentar 
=======================
*/

// JS Output
console.log ("Hallo Java")


// Datatypes
// Primitive Datatyp (strin, number, boolean)
// string = text
// number = zahlen
// boolean = wahrheits-/ zustandswerte

// Strings 
console.log("string ist text");
console.log('it works');
console.log(`auch ein string`);


// Numbers
console.log(20);
console.log(3 + 5);
console.log(23/10);

// Boolean
console.log(true);
console.log(false);


// Was passiert wenn man eine string und eine number ausgeben möchte?


// string + number = string
console.log("Ich bin  " + 33);


// Variablen
// var / let /const
// declaration / assignment

// let = variable, wert kann sich verändern!
let num1 = 150;
console.log(num1);


// const = Konstante, wert ist immer gleich!
const pi = 3.14;
console.log(pi);

// reassignment = Neuzuordnung
num1 = 100;
console.log(num1);


// Uncaught TypeError: Assignment to constant variable. at main.js:59:4
// pi = 5

// JS Conventions

// camelCase
let meinHausIstBunt = "red"; //mostused

// PascalCase
let MeinHausIstBunt = "blue"

// underscore
let _meinHausIstBunt = "green" //diese bitte nicht benutzen

// $
let $meinHausIstBunt = "geld"  //diese bitte nicht benutzen

// NoGo-Zone
// ==================================
// let 1meinHausIstBunt = "yellow" 
// let meinhausistbunt ="pink"
// ==================================
// NoGo-Zone

// JS ist case sensitive

let ABC;
let aBC;
let aBc;
let AbC;

// Das hier sind alles verschiedene Variablen!

// Arithmetik Operatoren
// + - * /       % ++ --

let numberOne = 5;
let numberTwo = 3;
let numberThree = 10;

// Modulo %
// Computer schaut jetzt wie oft die 3 in die 10 passt = 3 6 9. Und jetzt den Rest von 9 bis 10 = 1
console.log(numberThree % numberTwo); // 10 % 3 = 1
console.log(10 % 5) //10
console.log(7 % 4);    //3
console.log(120 % 7) //1

// decrement -- ,  zieht immer einen ab
console.log(numberOne);
numberOne--;
console.log(numberOne);

// increment ++ , zählt immer einen drauf
console.log(numberOne);
numberOne++;
console.log(numberOne);

// alter wert = alterwert + etwas neues
// numberOne += 1;
// // alter wert = alter wert + etwas neues
// numberOne = numberOne + 1

// JS Output 2
// window.alert("Hallo du");


// JS Input
// prompt in eine Variable packen und es gibt zurück
// leer string oder wert
// let askAge = window.prompt("Bitte gib dein Alter ein");
// console.log(askAge);
// gibt true oder false zurück
// let confirm = window.confirm("Cookies??");
// console.log(confirm);