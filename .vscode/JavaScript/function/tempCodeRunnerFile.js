function names(fun){
    console.log("Hello I am name")
    fun()
}
function greet(){
    console.log("I am a call back function")
}
names(greet)
