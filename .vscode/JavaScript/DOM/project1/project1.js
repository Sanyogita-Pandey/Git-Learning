document.body.addEventListener("click",(event)=>{
    const circle = document.createElement('div')
    circle.className='circle'
    

    const x=event.clientX
    const y = event.clientY

    circle.style.left=`${x-25}px`
    circle.style.top=`${y-25}px`

    const color=["red","blue","yellow","green","purple","orange","pink","brown","white","grey"]
    circle.style.backgroundColor= color[Math.floor(Math.random()*color.length)]

    const text=["Hii","Hello","Good","boy","beautiful","preety","nice","wow","gjjb","hurray"]
    circle.textContent= text[Math.floor(Math.random()*text.length)]

    document.body.appendChild(circle)
    setTimeout(()=>{
        circle.remove()
    },5000)
})