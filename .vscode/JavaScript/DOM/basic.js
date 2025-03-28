// globalThis points the global object irrespective of environment
// DOM=> structure model
// document object model
// const obj={
//     name:"ROHIT",
//     age:20,
//     greet: function(){
//         console.log(this)
//     }
// }
// obj.greet()
console.log("HELLO CODERS")
document.getElementById('first').innerHTML="Mahan admi"

const id = document.querySelector('#first')
id.innerHTML="Hello mumma"

const id2=document.querySelector('.header2')
id2.style.backgroundColor = "pink"

// convert nodeList into array
// Array.from(obj)
const list = document.querySelector('li')
console.log(list.parentElement)
console.log(list.parentNode)

const par=document.querySelector('ul')
console.log(par)
console.log(par.childNodes[0])
console.log(par.children)
console.log(par.firstChild)
console.log(par.firstElementChild)
// innerHtml shows all with the tag in that
// text content shows either its display is None
// innerText only displays the part which have permission to show
