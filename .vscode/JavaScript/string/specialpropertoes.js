let message="Hello everyone"
console.log(message.toLowerCase())
console.log(message.toUpperCase())

let hero="Good Morning"
console.log(hero.indexOf("or"))
console.log(hero.lastIndexOf("Good"))
console.log(hero.charAt(5))
console.log(hero.includes("Good"))
// Extracting substrings
let newsstring = "Hello Don"
// slice can take negative index also
console.log(newsstring.slice(5,9))
console.log(newsstring.slice(-5,-1))
console.log(newsstring.substring(5,9))
// replacing content
let str10="bye! bye! tata"
console.log(str10.replace("bye","seeyou"))
console.log(str10.split("!"))
// trim replaces the space at the end aur starting 
console.log(str10.trim())