const quotes = [
"The only way to do great work is to love what you do.– Steve Jobs",
"In the middle of every difficulty lies opportunity. – Albert Einstein",
"The best way to predict the future is to create it. – Peter Drucker",
"It does not matter how slowly you go as long as you do not stop. – Confucius",
"Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
"Do what you can, with what you have, where you are. – Theodore Roosevelt",
"Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
"You miss 100% of the shots you don't take. – Wayne Gretzky",
"The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
"Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"

];

const button = document.querySelector('button')
button.addEventListener('click',(event)=>{
    // mouse event=>mousemove(jb mouse uske upr jae), dblclick, mouseover(jb mouse uske uppr se jae) can also be used
    // keyboard event=>keydown(jb key board me koi key dbayenge),  keyup(jb key dbake htayenge tb)
    console.log(event.target)
    const text = document.getElementById("quote");

    const index = Math.floor(Math.random()*quotes.length)
    text.textContent=quotes[index]
})