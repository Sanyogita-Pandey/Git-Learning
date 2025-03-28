const d = new Date()
d.setDate(11)
d.setMonth(6)
d.setFullYear(2004)
console.log(d.toDateString())
// date calculation
const date1 = new Date()
const date2 = new Date("2025-11-5")
console.log(date2-date1)
console.log(date2>date1)
console.log(date1>date2)

// timer
const date3= new Date()
const date4 = new Date("2028-07-14T00:00:00")
const date = date4-date1
const days = Math.floor(date/(1000*60*60*24));
const hour = Math.floor((date/(1000*60*60))%24);
const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);
console.log(`olympics CountDownTimer : days:${days} hours: ${hour} minute :${minute} second : ${second}`)