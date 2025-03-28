const obj={
    // key(stores as a string):value
    name:"Rohit",
    account_balance:420,
    gender:"Male",
    age:30
}
// delete the element
delete obj.name;
console.log(obj)
console.log(obj["account_balance"])
delete obj.name;
