// <li>Ts </li>
function attach(content){
const element = document.createElement('li')
element.innerHTML = content
const element2 = document.createElement('li')
element2.innerHTML = content+"V2.0"

const parent = document.getElementById("root")
// parent.appendChild(element)
// parent.append(element,"Hello coder army","Hii")
parent.append(element,element2)
}
attach("Ts")
attach("Node")
attach("react")

const variable = document.createAttribute("id")
variable.value = "first"
// acces to first list
const curr_list = document.querySelector('li')
curr_list.setAttributeNode(variable)

// add nodes to DOM
const parent = document.getElementById("root")

const some = document.createElement('li')
some.innerHTML="tom"

//parent.prepend(some)
//parent.append(some)

const child2 = parent.children[1]
// parent.insertBefore(some,child2)
// parent.replaceChild(some,child2)


// attachment
const parent1= document.getElementById("root")
const element3 = document.createElement("div")
element3.innerHTML = "Hello Coder Army"

// parent1.insertAdjacentElement("beforebegin",element3)
// parent1.insertAdjacentElement("afterend",element3)
// parent1.insertAdjacentElement("afterbegin",element3)
// parent1.insertAdjacentElement("beforeend",element3)

// delete noder or a element
document.querySelector('li').remove()


