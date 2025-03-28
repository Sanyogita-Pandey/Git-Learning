
cart =["pizza","coke","sandwich"]


function PlaceOrder(cart){
    console.log("Talking with Dominos")

    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const food_available = true;
            if(food_available){
                console.log("order olace successfully")
                const order = {orderId: 221, food: cart, restaurant:"Domoinos", location:"lucknow"}
                 resolve(order)
            }
            else{
                console.log("item out of stock")
            }
            
            
        },2000)
    })
    return pr
}
    function preparingOrder(order){
        console.log("pizza prepration started.....")

        const pr = new Promise(function(resolve, reject){
            setTimeout(()=>{
                console.log("pizza prepration done")
                const foodDetails ={token: 12, restaurant: order.restaurant, location: order.location }
                resolve(foodDetails)
            },5000)

        })
            return pr
        
    }
   function pickupOrder(foodDetails,callback){
    console.log("Reaching restaurant for picking order")

    const pr= new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("picked up order by delivery boy")
            const droplocation = foodDetails.location
            resolve(droplocation)
        },3000)
    })
    return pr
   }

   function dileverOrder(droplocation){
    console.log("delivery boy on the way")

    setTimeout(()=>{
        console.log("order delivered successfully")
    },5000)
   }

//   readiability khtm ho jati h aur dependency bdh jati h callback Hell se***************
//    PlaceOrder(preparingOrder)
//    PlaceOrder(cart, (order)=>{
//     preparingOrder(order, (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             dileverOrder(droplocation)
//         })
//     })
//    })

// by prmise********************
// PlaceOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>dileverOrder(droplocation))
// .catch(error=>console.log(error))

// by async await(await ka use hmesha async function ke andr hi hota h)*************
async function  greet() {
    PlaceOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>dileverOrder(droplocation))
.catch(error=>console.log(error))
    
}
greet()
