const user = {
    name:"Sanyogita Pandey",
    balance:2000,
    address:{
        pincode:226031,
        city:"Lucknow"
    }
}
const{address:{pincode,city}}=user
console.log(pincode,city)
console.log(user.address.city)
// destructuring of an object
// const{name, balance}=user;
 const{name:full_name, balance:paisa}=user;
console.log(full_name,paisa)
// rest operator ...
const{name, balance,...obj1}=user
console.log(obj1)

const arr=[3,2,5,6,3,8]
const[first,second, ,third]=arr
console.log(first,second,third)

const people={
    nam:"Rohit",
    amount:430,
    greet: function(){
        return "Hello Coder Army"
    },
    meet:function(){
        return 20;
    }
}
console.log(people.greet())
console.log(people.meet())