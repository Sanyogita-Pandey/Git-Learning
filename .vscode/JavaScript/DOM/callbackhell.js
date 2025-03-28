
function PlaceOrder(callback){
    console.log("Talking with Dominos")

    setTimeout(()=>{
        console.log("Order placed successfully")
        callback()
    },2000)
}
    function preparingOrder(callback){
        console.log("pizza prepration started.....")

        setTimeout(()=>{
            console.log("pizza prepration done")
            callback()
        },5000)
    }
   function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("picked up order by delivery boy")
        callback()
    },3000)
   }

   function dileverOrder(){
    console.log("delivery boy on the way")

    setTimeout(()=>{
        console.log("order delivered successfully")
    },5000)
   }
//    PlaceOrder(preparingOrder)
   PlaceOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            dileverOrder()
        })
    })
   })
//   readiability khtm ho jati h aur dependency bdh jati h callback Hell se
