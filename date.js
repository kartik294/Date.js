// 🧮 Converting and Checking Numbers 🧮

// 🚀Hello LinkedIn community! Today🚀🐯,

// let's dive into the fascinating world of numbers in JavaScript. 👨‍💻

// ⭐ JavaScript treats 23 and 23.0 as equal. See, JavaScript is all about precision! 🎯

// >--console.log(23 === 23.0); // true
// 💡 But, when it comes to decimal calculations, things get tricky. Adding 0.1 and 0.2 might not give you exactly 0.3.

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// 📊 Conversion & Parsing 📊

// -->Converts a string to a number. ! 🎩

// Example:
console.log(Number("23")); // 23
console.log(+"23"); // 23

// -->Parses an integer from a string🌟
Example: console.log(Number.parseInt("30px", 10)); // 30

// -->Parsing fails as 'e23' is not a valid integer.
console.log(Number.parseInt("e23", 10)); // NaN

// -->Trims and parses numbers from strings.
Example: console.log(Number.parseInt("  2.5rem  ")); // 2
console.log(Number.parseFloat("  2.5rem  ")); // 2.5

// 🚫 NaN & Number Check 🚫

// -->Want to know if a value is Not-a-Number (NaN) or a finite number? 🤨

// -->Checks if a value is Not-a-Number (NaN).
// Example:Example: 20 is not NaN, so it returns false.
console.log(Number.isNaN(20)); // false

console.log(Number.isNaN("20")); // false

// -->Converts '20X' to NaN, so it returns true
console.log(Number.isNaN(+"20X")); // true
console.log(Number.isNaN(23 / 0)); // true

// -->Checks if a value is a finite number.

// 20 is a finite number, so it returns true
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false

// -->Converts '20X' to NaN, so it returns false.
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// Numbers in JavaScript can be a bit tricky, but understanding these concepts can help you write more precise code. Keep coding, stay curious! 🚀🔢

// #JavaScript #Numbers #WebDevelopment #LinkedInLearning 🌐