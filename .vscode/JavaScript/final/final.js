  const restaurants = [
    {
      image: 'eleventh',
      name: 'Taco Heaven',
      rating: '4.8',
      foodTypes: 'French',
      price_for_two: 1023,
      location: 'Maa Kalyani Devi Temple',
      distance_from_customer_house: '9.7',
      offers: 15,
      alcohol: true,
      restaurant_open_time: 11,
      restaurant_closing_time: 23
    },
    {
      image: 'fourth',
      name: 'Sushi House',
      rating: '2.3',
      foodTypes: 'French',
      price_for_two: 412,
      location: 'Naini Bridge',
      distance_from_customer_house: '1.5',
      offers: 19,
      alcohol: true,
      restaurant_open_time: 22,
      restaurant_closing_time: 10
    },
    {
      image: 'seventh',
      name: 'Spice Fusion',
      rating: '2.2',
      foodTypes: 'Italian',
      price_for_two: 484,
      location: 'Bharat Mata Mandir',
      distance_from_customer_house: '9.5',
      offers: 21,
      alcohol: false,
      restaurant_open_time: 3,
      restaurant_closing_time: 15
    },
    {
      image: 'twelfth',
      name: 'The Salad Bar',
      rating: '2.8',
      foodTypes: 'Mexican',
      price_for_two: 1788,
      location: 'Hanuman Mandir',
      distance_from_customer_house: '3.1',
      offers: 22,
      alcohol: false,
      restaurant_open_time: 0,
      restaurant_closing_time: 12
    },
    {
      image: 'fourth',
      name: 'Spice Fusion',
      rating: '1.2',
      foodTypes: 'French',
      price_for_two: 487,
      location: 'Bharat Mata Mandir',
      distance_from_customer_house: '10.7',
      offers: 17,
      alcohol: false,
      restaurant_open_time: 21,
      restaurant_closing_time: 9
    },
    {
      image: 'fifth',
      name: 'Tandoor Flames',
      rating: '3.2',
      foodTypes: 'Spanish',
      price_for_two: 113,
      location: 'Allahabad University',
      distance_from_customer_house: '6.7',
      offers: 24,
      alcohol: false,
      restaurant_open_time: 17,
      restaurant_closing_time: 5
    },
    {
      image: 'sixth',
      name: 'Veggie Delight',
      rating: '2.8',
      foodTypes: 'Italian',
      price_for_two: 2018,
      location: 'Civil Lines',
      distance_from_customer_house: '9.1',
      offers: 3,
      alcohol: false,
      restaurant_open_time: 17,
      restaurant_closing_time: 5
    },
    {
      image: 'fiveteen',
      name: 'The Pizza Loft',
      rating: '2.9',
      foodTypes: 'Spanish',
      price_for_two: 1363,
      location: 'Naini Bridge',
      distance_from_customer_house: '2.7',
      offers: 13,
      alcohol: false,
      restaurant_open_time: 6,
      restaurant_closing_time: 18
    },
    {
      image: 'second',
      name: 'The Pizza Loft',
      rating: '2.5',
      foodTypes: 'Spanish',
      price_for_two: 366,
      location: 'The Naini Lake',
      distance_from_customer_house: '7.3',
      offers: 4,
      alcohol: true,
      restaurant_open_time: 12,
      restaurant_closing_time: 0
    },
    {
      image: 'fiveteen',
      name: 'Café Aroma',
      rating: '4.9',
      foodTypes: 'Chinese',
      price_for_two: 709,
      location: 'Naini Bridge',
      distance_from_customer_house: '1.3',
      offers: 15,
      alcohol: false,
      restaurant_open_time: 22,
      restaurant_closing_time: 10
    },
    {
      image: 'thirteenth',
      name: 'Pasta Palace',
      rating: '1.6',
      foodTypes: 'Spanish',
      price_for_two: 1731,
      location: 'Naini Bridge',
      distance_from_customer_house: '7.8',
      offers: 27,
      alcohol: false,
      restaurant_open_time: 14,
      restaurant_closing_time: 2
    },
    {
      image: 'sixth',
      name: 'Spice Fusion',
      rating: '0.2',
      foodTypes: 'Indian',
      price_for_two: 791,
      location: 'Swaraj Bhavan',
      distance_from_customer_house: '5.6',
      offers: 11,
      alcohol: false,
      restaurant_open_time: 14,
      restaurant_closing_time: 2
    },
    {
      image: 'tenth',
      name: 'Pasta Palace',
      rating: '4.0',
      foodTypes: 'Spanish',
      price_for_two: 187,
      location: 'Hanuman Mandir',
      distance_from_customer_house: '9.2',
      offers: 22,
      alcohol: false,
      restaurant_open_time: 0,
      restaurant_closing_time: 12
    },
    {
      image: 'tenth',
      name: 'The Pizza Loft',
      rating: '1.7',
      foodTypes: 'French',
      price_for_two: 821,
      location: 'Alfred Park',
      distance_from_customer_house: '5.9',
      offers: 28,
      alcohol: false,
      restaurant_open_time: 9,
      restaurant_closing_time: 21
    },
    {
      image: 'fifth',
      name: 'The Salad Bar',
      rating: '3.3',
      foodTypes: 'American',
      price_for_two: 558,
      location: 'Minto Park',
      distance_from_customer_house: '3.1',
      offers: 7,
      alcohol: true,
      restaurant_open_time: 21,
      restaurant_closing_time: 9
    },
    {
      image: 'thirteenth',
      name: 'Pasta Palace',
      rating: '2.1',
      foodTypes: 'Indian',
      price_for_two: 1264,
      location: 'Patalpuri Temple',
      distance_from_customer_house: '1.2',
      offers: 26,
      alcohol: true,
      restaurant_open_time: 6,
      restaurant_closing_time: 18
    },
    {
      image: 'eleventh',
      name: 'Grill & Thrill',
      rating: '1.0',
      foodTypes: 'American',
      price_for_two: 1302,
      location: 'Swaraj Bhavan',
      distance_from_customer_house: '5.0',
      offers: 24,
      alcohol: false,
      restaurant_open_time: 12,
      restaurant_closing_time: 0
    },
    {
      image: 'twelfth',
      name: 'Steakhouse Supreme',
      rating: '0.0',
      foodTypes: 'Mediterranean',
      price_for_two: 1821,
      location: 'Allahabad University',
      distance_from_customer_house: '4.4',
      offers: 11,
      alcohol: false,
      restaurant_open_time: 17,
      restaurant_closing_time: 5
    },
    {
      image: 'nineth',
      name: 'Burger & Fries Co.',
      rating: '1.7',
      foodTypes: 'Thai',
      price_for_two: 2466,
      location: 'Triveni Sangam',
      distance_from_customer_house: '1.5',
      offers: 2,
      alcohol: false,
      restaurant_open_time: 11,
      restaurant_closing_time: 23
    },
    {
      image: 'fourth',
      name: 'Burger & Fries Co.',
      rating: '1.1',
      foodTypes: 'Chinese',
      price_for_two: 1203,
      location: 'Swaraj Bhavan',
      distance_from_customer_house: '7.4',
      offers: 15,
      alcohol: false,
      restaurant_open_time: 3,
      restaurant_closing_time: 15
    },
    {
      image: 'twelfth',
      name: 'Seafood Shack',
      rating: '0.4',
      foodTypes: 'American',
      price_for_two: 1622,
      location: 'Sangam Boat Ride',
      distance_from_customer_house: '9.3',
      offers: 2,
      alcohol: false,
      restaurant_open_time: 14,
      restaurant_closing_time: 2
    },
    {
      image: 'eight',
      name: 'Spice Fusion',
      rating: '0.0',
      foodTypes: 'Japanese',
      price_for_two: 2016,
      location: 'Allahabad Fort',
      distance_from_customer_house: '8.1',
      offers: 3,
      alcohol: false,
      restaurant_open_time: 13,
      restaurant_closing_time: 1
    },
    {
      image: 'fourth',
      name: 'Tandoor Flames',
      rating: '4.6',
      foodTypes: 'Chinese',
      price_for_two: 2184,
      location: 'Allahabad Fort',
      distance_from_customer_house: '6.0',
      offers: 2,
      alcohol: false,
      restaurant_open_time: 5,
      restaurant_closing_time: 17
    },
    {
      image: 'eleventh',
      name: 'Sushi House',
      rating: '3.1',
      foodTypes: 'Japanese',
      price_for_two: 2095,
      location: 'Chandrashekhar Azad Park',
      distance_from_customer_house: '3.5',
      offers: 17,
      alcohol: true,
      restaurant_open_time: 20,
      restaurant_closing_time: 8
    },
    {
      image: 'eleventh',
      name: 'Veggie Delight',
      rating: '3.6',
      foodTypes: 'American',
      price_for_two: 1988,
      location: 'Anand Bhavan',
      distance_from_customer_house: '7.4',
      offers: 25,
      alcohol: false,
      restaurant_open_time: 4,
      restaurant_closing_time: 16
    },
    {
      image: 'twelfth',
      name: 'Bistro 101',
      rating: '1.1',
      foodTypes: 'Italian',
      price_for_two: 280,
      location: 'Khusro Bagh',
      distance_from_customer_house: '9.5',
      offers: 22,
      alcohol: false,
      restaurant_open_time: 4,
      restaurant_closing_time: 16
    },
    {
      image: 'thirteenth',
      name: 'The Pancake Place',
      rating: '4.5',
      foodTypes: 'Thai',
      price_for_two: 1075,
      location: 'ISKCON Allahabad',
      distance_from_customer_house: '2.8',
      offers: 14,
      alcohol: true,
      restaurant_open_time: 0,
      restaurant_closing_time: 12
    },
    {
      image: 'thirteenth',
      name: 'Curry Castle',
      rating: '4.4',
      foodTypes: 'Spanish',
      price_for_two: 431,
      location: 'Bharat Mata Mandir',
      distance_from_customer_house: '6.4',
      offers: 4,
      alcohol: false,
      restaurant_open_time: 22,
      restaurant_closing_time: 10
    },
    {
      image: 'eleventh',
      name: 'Bistro 101',
      rating: '0.3',
      foodTypes: 'Spanish',
      price_for_two: 1801,
      location: 'Minto Park',
      distance_from_customer_house: '1.1',
      offers: 7,
      alcohol: false,
      restaurant_open_time: 18,
      restaurant_closing_time: 6
    },
    {
      image: 'fourth',
      name: 'The Gourmet Kitchen',
      rating: '4.4',
      foodTypes: 'Mexican',
      price_for_two: 1748,
      location: 'Patalpuri Temple',
      distance_from_customer_house: '2.5',
      offers: 19,
      alcohol: false,
      restaurant_open_time: 14,
      restaurant_closing_time: 2
    },
    {
      image: 'second',
      name: 'Ramen World',
      rating: '3.5',
      foodTypes: 'French',
      price_for_two: 803,
      location: 'Patalpuri Temple',
      distance_from_customer_house: '8.3',
      offers: 6,
      alcohol: false,
      restaurant_open_time: 23,
      restaurant_closing_time: 11
    },
    {
      image: 'seventh',
      name: 'Pasta Palace',
      rating: '3.0',
      foodTypes: 'French',
      price_for_two: 1795,
      location: 'Hanuman Mandir',
      distance_from_customer_house: '7.3',
      offers: 17,
      alcohol: false,
      restaurant_open_time: 20,
      restaurant_closing_time: 8
    },
    {
      image: 'first',
      name: 'Pasta Palace',
      rating: '0.3',
      foodTypes: 'Spanish',
      price_for_two: 1243,
      location: 'ISKCON Allahabad',
      distance_from_customer_house: '3.1',
      offers: 0,
      alcohol: true,
      restaurant_open_time: 20,
      restaurant_closing_time: 8
    },
    {
      image: 'second',
      name: 'Spice Fusion',
      rating: '0.3',
      foodTypes: 'Spanish',
      price_for_two: 352,
      location: 'Khusro Bagh',
      distance_from_customer_house: '1.7',
      offers: 6,
      alcohol: true,
      restaurant_open_time: 11,
      restaurant_closing_time: 23
    },
    {
      image: 'fourth',
      name: 'Pasta Palace',
      rating: '2.5',
      foodTypes: 'French',
      price_for_two: 777,
      location: 'Civil Lines',
      distance_from_customer_house: '4.4',
      offers: 1,
      alcohol: false,
      restaurant_open_time: 22,
      restaurant_closing_time: 10
    },
    {
      image: 'eleventh',
      name: 'The Burger Spot',
      rating: '0.8',
      foodTypes: 'Spanish',
      price_for_two: 2325,
      location: 'Allahabad University',
      distance_from_customer_house: '9.8',
      offers: 15,
      alcohol: false,
      restaurant_open_time: 23,
      restaurant_closing_time: 11
    },
    {
      image: 'fifth',
      name: 'Seafood Shack',
      rating: '2.7',
      foodTypes: 'Mediterranean',
      price_for_two: 561,
      location: 'Swaraj Bhavan',
      distance_from_customer_house: '4.3',
      offers: 6,
      alcohol: true,
      restaurant_open_time: 18,
      restaurant_closing_time: 6
    },
    {
      image: 'second',
      name: 'Grill & Thrill',
      rating: '0.5',
      foodTypes: 'Chinese',
      price_for_two: 494,
      location: 'Swaraj Bhavan',
      distance_from_customer_house: '7.1',
      offers: 13,
      alcohol: false,
      restaurant_open_time: 12,
      restaurant_closing_time: 0
    },
    {
      image: 'fourth',
      name: 'Steakhouse Supreme',
      rating: '4.9',
      foodTypes: 'Mexican',
      price_for_two: 848,
      location: 'Civil Lines',
      distance_from_customer_house: '3.6',
      offers: 2,
      alcohol: false,
      restaurant_open_time: 5,
      restaurant_closing_time: 17
    },
    {
      image: 'fiveteen',
      name: 'The Gourmet Kitchen',
      rating: '3.3',
      foodTypes: 'Chinese',
      price_for_two: 1005,
      location: 'Alfred Park',
      distance_from_customer_house: '2.2',
      offers: 10,
      alcohol: true,
      restaurant_open_time: 1,
      restaurant_closing_time: 13
    },
    {
      image: 'tenth',
      name: 'Sushi House',
      rating: '0.6',
      foodTypes: 'Italian',
      price_for_two: 682,
      location: 'Sangam Boat Ride',
      distance_from_customer_house: '6.0',
      offers: 6,
      alcohol: false,
      restaurant_open_time: 19,
      restaurant_closing_time: 7
    },
    {
      image: 'second',
      name: 'The Salad Bar',
      rating: '4.1',
      foodTypes: 'Spanish',
      price_for_two: 1418,
      location: 'Patalpuri Temple',
      distance_from_customer_house: '11.0',
      offers: 11,
      alcohol: true,
      restaurant_open_time: 3,
      restaurant_closing_time: 15
    },
    {
      image: 'eleventh',
      name: 'Noodle Nation',
      rating: '3.3',
      foodTypes: 'Spanish',
      price_for_two: 2222,
      location: 'Patalpuri Temple',
      distance_from_customer_house: '6.5',
      offers: 17,
      alcohol: false,
      restaurant_open_time: 23,
      restaurant_closing_time: 11
    },
    {
      image: 'first',
      name: 'Seafood Shack',
      rating: '1.8',
      foodTypes: 'Indian',
      price_for_two: 2338,
      location: 'Minto Park',
      distance_from_customer_house: '6.2',
      offers: 24,
      alcohol: true,
      restaurant_open_time: 5,
      restaurant_closing_time: 17
    },
    {
      image: 'second',
      name: 'Bistro 101',
      rating: '0.8',
      foodTypes: 'Japanese',
      price_for_two: 236,
      location: 'Naini Bridge',
      distance_from_customer_house: '3.2',
      offers: 27,
      alcohol: false,
      restaurant_open_time: 18,
      restaurant_closing_time: 6
    },
    {
      image: 'fiveteen',
      name: 'Spice Fusion',
      rating: '4.1',
      foodTypes: 'Mediterranean',
      price_for_two: 1493,
      location: 'Khusro Bagh',
      distance_from_customer_house: '8.2',
      offers: 16,
      alcohol: false,
      restaurant_open_time: 14,
      restaurant_closing_time: 2
    },
    {
      image: 'thirteenth',
      name: 'The Pizza Loft',
      rating: '4.8',
      foodTypes: 'Spanish',
      price_for_two: 1845,
      location: 'Naini Bridge',
      distance_from_customer_house: '5.2',
      offers: 4,
      alcohol: false,
      restaurant_open_time: 22,
      restaurant_closing_time: 10
    },
    {
      image: 'fourth',
      name: 'Ramen World',
      rating: '4.7',
      foodTypes: 'Spanish',
      price_for_two: 2148,
      location: 'ISKCON Allahabad',
      distance_from_customer_house: '9.0',
      offers: 5,
      alcohol: false,
      restaurant_open_time: 15,
      restaurant_closing_time: 3
    },
    {
      image: 'second',
      name: 'Seafood Shack',
      rating: '2.5',
      foodTypes: 'Chinese',
      price_for_two: 1468,
      location: 'Kumbh Mela Grounds',
      distance_from_customer_house: '4.6',
      offers: 21,
      alcohol: false,
      restaurant_open_time: 3,
      restaurant_closing_time: 15
    },
    {
      image: 'nineth',
      name: 'The Pancake Place',
      rating: '0.3',
      foodTypes: 'Mediterranean',
      price_for_two: 811,
      location: 'Hanuman Mandir',
      distance_from_customer_house: '3.4',
      offers: 11,
      alcohol: true,
      restaurant_open_time: 15,
      restaurant_closing_time: 3
    }
  ]

function getrestaurant(restaurants){

    const root = document.getElementById('root')

    restaurants.forEach(restaurant => {
        // create a card
        const card = document.createElement('div')
        card.classList.add('card')

        const image=document.createElement("img")
        image.src=`${restaurant.image}.jpg`

        const card_content=document.createElement('div')
        card_content.classList.add(`card-content`)

        const card_header = document.createElement('div')
        card_header.classList.add('card_header')

        const h3=document.createElement('h3')
        h3.textContent=restaurant.name

        const rate=document.createElement('span')
        rate.classList.add('rating')
        rate.textContent=restaurant.rating
        

        card_header.appendChild(h3)
        card_header.appendChild(rate)

        const card_footer = document.createElement('div')
        card_footer.classList.add('card-footer')

        const food = document.createElement('span')
        food.textContent=restaurant.foodTypes

        const prize = document.createElement('span')
        prize.textContent = restaurant.price_for_two

        card_footer.appendChild(food)
        card_footer.appendChild(prize)
        

        const card_location=document.createElement('div')
        card_location.classList.add('card-location')

        const location = document.createElement('span')
        location.textContent=restaurant.location

        const distance = document.createElement('span')
        distance.textContent=restaurant.distance_from_customer_house

        card_location.appendChild(location)
        card_location.appendChild(distance)

       card_content.appendChild(card_header)
       card_content.appendChild(card_footer)
       card_content.appendChild(card_location)

       card.appendChild(image)
       card.appendChild(card_content)

        root.appendChild(card)

        
        
    });
    
}
getrestaurant(restaurants )

document.getElementById("alcohol").addEventListener('click',()=>{

    const result = restaurants.filter((obj)=>obj.alcohol)
    document.getElementById('root').innerHTML=""
    getrestaurant(result)
})
document.getElementById("rating").addEventListener('click',()=>{

    const rest = restaurants.filter((obj)=>obj.rating>4.5)
    document.getElementById('root').innerHTML=""
    getrestaurant(rest)
})
document.getElementById("open").addEventListener('click',()=>{
     
    const currentTime = new Date();
    const currentHour = currentTime.getHours(); // Get current hour (0 - 23)

    // Filter the restaurants based on whether they are currently open
    const openNow = restaurants.filter((restaurant) => {
        return restaurant.restaurant_open_time <= currentHour && restaurant.restaurant_closing_time > currentHour;
    });

    // Sort the filtered restaurants by their closing time (24-hour format)
    openNow.sort((a, b) => {
        return a.restaurant_closing_time - b.restaurant_closing_time;
    });

    // Clear the root element and display the open restaurants
    document.getElementById('root').innerHTML = "";
    getrestaurant(openNow);
})
 document.getElementById('filters').addEventListener('click',()=>{
        document.getElementById("filterPopup").classList.remove("hidden")
    })



  document.getElementById('applyFilter').addEventListener('click',()=>{
    const element = document.querySelector('input[name="filterOption"]:checked')
    const answer = element.value 

    if(answer ==="rating"){
        restaurants.sort((a,b)=>b.rating-a.rating)
    }
    else if(answer==="HighToLow"){
        restaurants.sort((a,b)=>b.price_for_two-a.price_for_two)
    }
    else if(answer==="costHighToLow"){
        restaurants.sort((a,b)=>a.price_for_two-b.price_for_two)
    }
    else if(answer==="distance"){
        restaurants.sort((a,b)=>a.distance_from_customer_house-b.distance_from_customer_house)
    }
    document.getElementById('root').replaceChildren()
    document.getElementById("filterPopup").classList.add("hidden")
    getrestaurant(restaurants )
})
 
document.getElementById('closeFilter').addEventListener('click',()=>{
    document.getElementById("filterPopup").classList.add("hidden");
    getrestaurant(restaurants ) 
})

// document.getElementById('third').addEventListener('click',()=>{
//     document.getElementById("form-conatainer").classList.add("hidden");
//     document.getElementById("swiggy").classList.remove("hide");
//     getrestaurant(restaurants ) 
// })


