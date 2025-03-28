// based on date
const zodiacSigns = [
    "Capricorn",  "Aquarius",  "Pisces",  "Aries",  "Taurus", 
    "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", 
    "Sagittarius"
];
// based on month
const compliments = [
    "You are an incredible person!",
    "Your smile is absolutely contagious!",
    "You make the world a better place just by being in it.",
    "You light up every room you walk into.",
    "Your positivity is inspiring.",
    "You have such a beautiful heart.",
    "Your kindness is a gift to the world.",
    "You have a remarkable ability to make others feel special.",
    "You’re one of a kind and that’s so special.",
    "Your laughter is the best sound.",
    "You bring so much joy to everyone around you.",
    "You have the most amazing energy.",
    "Your strength is admirable.",
    "You radiate confidence and it’s so inspiring.",
    "You make people feel appreciated and that’s a rare gift.",
    "You have a brilliant mind and a heart of gold.",
    "You’re doing amazing things.",
    "You make the world a little brighter every day.",
    "Your creativity knows no bounds.",
    "You’re such a good listener, and it makes people feel heard.",
    "You’re an absolute treasure.",
    "Your enthusiasm is contagious.",
    "You have an undeniable sense of charm.",
    "You have such a graceful presence.",
    "The world is lucky to have someone like you.",
    "You make everything you do seem effortless.",
    "Your thoughts and ideas are always so interesting.",
    "You have a heart full of kindness.",
    "You always know just what to say to brighten someone's day.",
    "Your dedication and hard work are truly inspiring.",
    "You make others want to be the best version of themselves."
];
// size 20
const victimCardCompliments = [
    "You have incredible strength, even when you don't realize it.",
    "Your ability to persevere through challenges is truly admirable.",
    "You’re capable of overcoming anything that comes your way.",
    "Even in tough times, you show resilience that others can only admire.",
    "Your courage is inspiring, even when you feel uncertain.",
    "You handle adversity with more grace than you know.",
    "Your heart is strong, and it shows in how you push forward.",
    "You are more than capable of rising above any situation.",
    "You're not defined by the challenges you face, but by how you overcome them.",
    "The world is lucky to have someone who keeps fighting, no matter what.",
    "You’re stronger than you give yourself credit for.",
    "You have a unique ability to keep going when others might give up.",
    "Your resilience is a gift that others admire.",
    "No obstacle is too big for you to face with your strength and determination.",
    "You have a beautiful soul that shines even in the darkest of times.",
    "You have the power to transform every setback into a comeback.",
    "You’ve already overcome so much, and that’s proof of your inner strength.",
    "Your journey is a testament to your strength and resilience.",
    "You may not always see it, but you are incredibly capable.",
    "You have the ability to change your situation, one step at a time."
];
const lifeRecommendations = [
    "Feed a street dog or stray animal to help them feel loved.",
    "Volunteer at a local charity or organization to give back to your community.",
    "Take a walk in nature to clear your mind and refresh your spirit.",
    "Take time to help an elderly neighbor with their groceries or other needs.",
    "Donate gently used clothes to a shelter or charity.",
    "Spend quality time with family or friends – meaningful connections are important.",
    "Pick up litter in your local park or neighborhood to keep your community clean.",
    "Practice mindfulness meditation for 10 minutes each day to reduce stress.",
    "Send a thoughtful message or call a friend who might need some encouragement.",
    "Plant a tree or garden to help the environment and feel more connected to nature.",
    "Write a letter of appreciation to someone who has positively impacted your life.",
    "Smile and say something kind to a stranger – you never know who needs it.",
    "Create a budget or plan for your finances to ensure future security.",
    "Take a break from social media to reconnect with the present moment.",
    "Give your time or skills to help someone in need, like tutoring or mentoring.",
    "Organize your living space – a clutter-free space leads to a clearer mind.",
    "Do a random act of kindness for a stranger, like buying someone a coffee.",
    "Start a gratitude journal and write down things you're thankful for each day.",
    "Donate blood to help save lives.",
    "Cook a healthy meal for yourself or for someone who needs it.",
    "Make time for self-care, whether that’s a bath, reading, or just relaxing.",
    "Practice positive affirmations to boost your self-esteem and confidence.",
    "Take up a new hobby or activity to keep learning and growing.",
    "Visit a local shelter and spend time with the animals there.",
    "Offer to help a colleague with a task or project at work.",
    "Support a local small business by buying something you need.",
    "Take time to disconnect from technology and enjoy the moment.",
    "Give someone a genuine compliment – it can make their day.",
    "Attend a local event or gathering to support your community.",
    "Take a moment to appreciate the beauty around you, whether it’s the sunset or a blooming flower.",
    "Learn a new skill, whether it’s cooking, painting, or coding – growth is essential to a fulfilling life."
];
const predictions = [
    "You will soon embark on an exciting new journey.",
    "A big change is on the horizon for you, embrace it.",
    "You are about to meet someone who will have a lasting impact on your life.",
    "Success is just around the corner. Stay focused and keep going.",
    "Your hard work will soon pay off in ways you didn’t expect.",
    "A wonderful opportunity is waiting for you – keep your eyes open.",
    "Expect positive news that will brighten your day soon.",
    "Your future holds great potential. Keep believing in yourself.",
    "A long-awaited dream will soon become a reality.",
    "You will find balance and peace in the near future.",
    "Your patience will soon be rewarded in unexpected ways.",
    "A moment of clarity will arrive, leading you to make an important decision.",
    "An unexpected surprise is coming your way, get ready for it!",
    "Your creativity will lead to new and exciting opportunities.",
    "A close relationship will deepen and bring new joy into your life.",
    "Soon, you'll have the answers you've been seeking for a long time.",
    "A burst of energy will inspire you to take on a new challenge.",
    "Something you've been working towards will soon fall into place.",
    "Be ready to take a bold step forward; the universe is on your side.",
    "A financial windfall or reward is headed your way.",
    "Your instincts will guide you to make the right decision soon.",
    "You're about to enter a period of great personal growth.",
    "Your past efforts are finally about to pay off in a big way.",
    "Your charm and charisma will attract new opportunities and connections.",
    "In the coming weeks, you will find yourself in a much better place.",
    "You will soon experience a sense of accomplishment and fulfillment.",
    "Something you’ve been hoping for will manifest soon, just stay patient.",
    "Your confidence is about to lead you to some exciting ventures.",
    "An old friend may reappear in your life with a meaningful purpose.",
    "You will experience a burst of luck in the near future.",
    "Keep an open mind, as an exciting offer may come from an unexpected source."
];

const form = document.getElementById('astrologyForm')
form.addEventListener('submit',(event)=>
{
    event.preventDefault()
    const name = document.getElementById('firstName').value 
    const surname = document.getElementById('surname').value
    const day = Number(document.getElementById('day').value)
    const month = Number(document.getElementById('month').value)
    const year = Number(document.getElementById('year').value)

    const result = document.getElementById('result')

    const first_message = `Hello ${name} ${surname}`
    const second_message = `Your ZodiacSign is ${zodiacSigns[month-1]}`
    const third_message = compliments[day-1]

    let index = Math.floor(Math.random()*victimCardCompliments.length)
    const fourth_message = victimCardCompliments[index] 

    index = (name.length * surname.length*year)%lifeRecommendations.length
    const fifth_mesage = lifeRecommendations[index]

    index = (day*month*year)%predictions.length
    const sixth_message = predictions[index]

    result.innerText=`${first_message} ${second_message} ${third_message} ${fourth_message} our recommendation for you: ${fifth_mesage} your future prediction: ${sixth_message}`
    
})

