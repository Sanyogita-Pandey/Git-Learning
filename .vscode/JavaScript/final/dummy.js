
const fs =require('fs')
const restaurant=[]
const images=["first","second","third","fourth","fifth","sixth","seventh","eight","nineth","tenth","eleventh","twelfth","thirteenth","fourteen","fiveteen"]

const rest_name=["The Gourmet Kitchen",
  "Sushi House",
  "Pasta Palace",
  "The Burger Spot",
  "Taco Heaven",
  "Seafood Shack",
  "Bistro 101",
  "Veggie Delight",
  "Grill & Thrill",
  "The Pancake Place",
  "Café Aroma",
  "Spice Fusion",
  "The Pizza Loft",
  "Burger & Fries Co.",
  "Tandoor Flames",
  "Noodle Nation",
  "Ramen World",
  "The Salad Bar",
  "Steakhouse Supreme",
  "Curry Castle"
]
const foodTypes = [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "Mediterranean",
    "American",
    "Thai",
    "French",
    "Spanish"
  ];
  const locations = [
    "Triveni Sangam",
    "Allahabad Fort",
    "Kumbh Mela Grounds",
    "Anand Bhavan",
    "Alfred Park",
    "Swaraj Bhavan",
    "Hanuman Mandir",
    "Shankar Viman Mandapam",
    "Allahabad University",
    "Chandrashekhar Azad Park",
    "Naini Bridge",
    "Minto Park",
    "The Naini Lake",
    "Sangam Boat Ride",
    "Patalpuri Temple",
    "Bharat Mata Mandir",
    "Maa Kalyani Devi Temple",
    "ISKCON Allahabad",
    "Khusro Bagh",
    "Civil Lines"
  ];
for(let i=0; i<50;i++){

    const obj={}
    obj["image"] =images[Math.floor(Math.random()*15)]
    obj["name"]=rest_name[Math.floor(Math.random()*20)]
    obj["rating"]=(Math.random()*5).toFixed(1)
    obj["foodTypes"]=foodTypes[Math.floor(Math.random()*10)]
    obj["price_for_two"]=Math.floor(Math.random()*2401+100)
    obj["location"]=locations[Math.floor(Math.random()*20)]
    obj["distance_from_customer_house"]=(Math.random()*10+1).toFixed(1)
    obj["offers"]=Math.floor(Math.random()*30)
    obj["alcohol"]=Math.random()>0.6
    obj["restaurant_open_time"]=Math.floor(Math.random()*24)
    obj["restaurant_closing_time"]=(obj["restaurant_open_time"]+12)%24

    restaurant.push(obj)
}
console.log(restaurant)

const JsonData = JSON.stringify(restaurant,null, 4)
fs.writeFileSync("arrayData.Json",JsonData,'utf8')



