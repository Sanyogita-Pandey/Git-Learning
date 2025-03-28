// const original_answer={
//     q1: "Sachin Tendulkar",
//     q2: "West Indies",
//     q3: "Sachin Tendulkar",
//     q4: "264",
//     q5: "Muttiah muralitharan"
// }
// const form = document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const data = new FormData(form)


//     let result = 0
//     for(let [key,value] of data.entries()){
//         if(value===original_answer[key])
//             result++
//     }

//     const out = document.getElementById('out')
//     out.innerText = "Result: "+`${result} out of 5 is correct`

//     form.reset()
// })



const questionBank = [
    {question: "Who is known as the 'Master Blaster' of cricket?",options: ["Shane Warne", "Virat Kohli", "Sachin Tendulkar", "Brian Lara"],answer: "Sachin Tendulkar"},
    {question: "Which country won the first-ever Cricket World Cup in 1975?",options: ["West Indies", "Australia", "England", "India"],answer: "West Indies"},
    {question: "Which cricketer holds the record for the most Test wickets?",options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],answer: "Muttiah Muralitharan"},
    {question: "What is the maximum number of overs in a One Day International (ODI) match?",options: ["50", "40", "60", "20"],answer: "50"},
    {question: "Who was the captain of the Indian cricket team in the 2007 T20 World Cup?",options: ["Sourav Ganguly", "Rahul Dravid", "MS Dhoni", "Virat Kohli"],answer: "MS Dhoni"},
    {question: "Which cricketer has the most runs in a single World Cup?",options: ["Sachin Tendulkar", "Ricky Ponting", "Kumar Sangakkara", "Virat Kohli"],answer: "Sachin Tendulkar"},
    {
        question: "Which country is known as the 'Black Caps' in cricket?",
        options: ["New Zealand", "South Africa", "England", "Australia"],
        answer: "New Zealand"
    },
    {
        question: "Who is the first cricketer to score 200 runs in an ODI?",
        options: ["Virender Sehwag", "Sachin Tendulkar", "Chris Gayle", "Ricky Ponting"],
        answer: "Virender Sehwag"
    },
    {
        question: "Which cricketer has the most centuries in Test cricket?",
        options: ["Don Bradman", "Jacques Kallis", "Ricky Ponting", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest total ever scored in a T20 international match?",
        options: ["278/3", "215/4", "210/3", "190/5"],
        answer: "278/3"
    },
    {
        question: "Who is the fastest player to reach 1000 runs in T20 Internationals?",
        options: ["Shane Watson", "Virat Kohli", "Chris Gayle", "Babar Azam"],
        answer: "Virat Kohli"
    },
    {
        question: "Which cricketer holds the record for the most number of runs in a single IPL season?",
        options: ["David Warner", "Kieron Pollard", "Chris Gayle", "Virat Kohli"],
        answer: "Virat Kohli"
    },
    {
        question: "What is the name of the trophy awarded to the winner of the Ashes series?",
        options: ["The Ashes Trophy", "The Test Championship Trophy", "The Sir Donald Bradman Trophy", "The Cricket World Cup"],
        answer: "The Ashes Trophy"
    },
    {
        question: "Which bowler has the record for the most wickets in a single World Cup?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath"],
        answer: "Glenn McGrath"
    },
    {
        question: "Who was the first cricketer to score a double century in a T20 match?",
        options: ["Chris Gayle", "Brendon McCullum", "David Warner", "Martin Guptill"],
        answer: "Chris Gayle"
    },
    {
        question: "Which Indian cricketer is known for his unique wrist-spin bowling?",
        options: ["Harbhajan Singh", "Anil Kumble", "Yuzvendra Chahal", "Ravichandran Ashwin"],
        answer: "Yuzvendra Chahal"
    },
    {
        question: "What does LBW stand for in cricket?",
        options: ["Leg Before Wicket", "Long Before Wicket", "Left Behind Wicket", "Leg Behind Wicket"],
        answer: "Leg Before Wicket"
    },
    {
        question: "Which cricketer has the most ducks in ODI cricket?",
        options: ["Shane Watson", "Sourav Ganguly", "M.S. Dhoni", "Inzamam-ul-Haq"],
        answer: "Shane Watson"
    },
    {
        question: "What is the maximum number of overs in a T20 international match?",
        options: ["10", "15", "20", "25"],
        answer: "20"
    },
    {
        question: "Who has the most wickets in T20 International cricket?",
        options: ["Lasith Malinga", "Shahid Afridi", "Rashid Khan", "Imran Tahir"],
        answer: "Shahid Afridi"
    }
];
 function RandomQuestion(){
// n time complexity but may increase also******************
//     const data = new Set()

//     while(data.size!=5){
//         const index = Math.floor(Math.random()*20)
//         data.add(questionBank[index])
//     }
//     return [...data]
// }

// nlogn time complexity*************************
// questionBank.sort(()=>Math.random()-0.5)
//   return questionBank.slice(0,5)

// exactly n time complexity******************************
const arr=[]
let length = questionBank.length

for(let i=0; i<5;i++){
    const index = Math.floor(Math.random()*length)
    arr.push(questionBank[index])
    // swap
    [questionBank[index],questionBank[length-1]]=[questionBank[length-1],questionBank[index]]
    length--
}
    return arr

}
const form = document.querySelector('form')
const problem = RandomQuestion()

const original_answer={}

problem.forEach((obj,index)=>{
    const div_element = document.createElement('div')
    div_element.className='question';
    original_answer[`q${index+1}`]=obj['answer']

const para = document.createElement('p')
para.textContent=`${index+1}. ${obj['question']} `
div_element.appendChild(para)
// create 4 options
obj['options'].forEach((data)=>{
   const label= document.createElement('label')
   const input = document.createElement('input')
   input.type="radio"
   input.name=`q${index+1}`
   input.value=data
   label.appendChild(input)
   label.appendChild(document.createTextNode(data))
   div_element.appendChild(label)
   div_element.appendChild(document.createElement('br'))
})
    form.appendChild(div_element)
})
const button = document.createElement('button')
button.id ="submit"
button.textContent="submit"

form.appendChild(button)
form.addEventListener('submit',(event)=>{
        event.preventDefault()
        const data = new FormData(form)
    
    
        let result = 0
        for(let [key,value] of data.entries()){
            if(value===original_answer[key])
                result++
        }
    
        const out = document.getElementById('out')
        out.innerText = "Result: "+`${result} out of 5 is correct`
        
        form.reset();
    })
