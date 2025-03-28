document.querySelector('button').addEventListener('click',()=>{
    const place = document.getElementById('location').value 

   const prom =fetch(`http://api.weatherapi.com/v1/current.json?key=2d136d71286940d0bde23744252603&q=${place}&aqi=yes`)

    function updateTemp(data){
        const element = document.getElementById('weather-result')
        element.innerHTML=`Todays Temperature: ${data.current.temp_c}C`
    }

   prom
//    .then((response)=>{
//     return response.json()
//    })
//    .then((data)=>{
//     return console.log(data)
//    })
.then(response=>response.json())
.then(data=>updateTemp(data))

})