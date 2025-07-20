const name = "Santanu"
const repoCount = 50

// console.logn(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo cout is ${repoCount}`);  // (``) this symbol is Back text to used your code. and this is called Siring Interpolatins.

const gamename = new String('santanu-Khorat')

//console.log(gamename[0]);
//console.log(gamename.__proto__);



//console.log(gamename.length);
//console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));  // it's check Character index. console.log(gamename.charAt(t)); this is used not to used in poper way.
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0, 8) // this is used to get the string from 0 to 8 index.
console.log(newString);

const anotherString = gamename.slice(-8, 8) 
console.log(anotherString);


const newStringOne = "    Santanu   "
console.log(newStringOne);
console.log(newStringOne.trim());  // this is used to remove space in string.

const url = "https://www.santanu.com?name=santanu&age=22"

console.log(url.replace("santanu", "khorat"));  // this is used


/*

anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()

*/