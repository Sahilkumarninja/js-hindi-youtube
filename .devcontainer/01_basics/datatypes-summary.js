// Primitive

// 7 types : String, Number, Boolean, Null, undefined,BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);
// Reference (Non Primitive)

// Array, Objects, Functions

const  heros = ["shaktiman", "nagraj", "doga"];
let myObj ={
    name: "Sahil",
    age: 22,
}

 const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);
console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++

// stack (Primitive) ,Heap(Non Primitive)
let myYoutubename = "CreatorSahil"


let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    emai: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email ="sahil@google.com"

console.log(userOne.email);
console.log(userTwo.email);
