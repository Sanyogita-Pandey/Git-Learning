const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault()

    // const first = document.getElementById("first")
    // console.log(first.value)
    // const second = document.getElementById("second")
    // console.log(second.value)
    // const third = document.getElementById("third")
    // console.log(third.value)

    // const result = document.getElementById('result')
    // result.innerText=`${first.value} ${second.value} ${third.value} is a good boy`

    // document.body.append(result)

    const data = new FormData(form)
    // console.log(data)
    console.log(Array.form(data.keys()))
    console.log(Array.form(data.values()))


})