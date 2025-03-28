const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubling and event capture
// by default evenr bubbling hoti h(andr se bhr+)
child.addEventListener('click',()=>{
    console.log("child clicked")
},false)

parent.addEventListener('click',()=>{
    console.log("parent clicked")
},false)

grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked")
},false)