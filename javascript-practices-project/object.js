/*const student = {
    firstName : "grace",
    lastName : "njambi",
    age : "300",
    gender : "female",
    fullName : function() {
        return this.firstName + "" + this.lastName;
    }
};
student.secondName = "abraham";
console.log(student)
*/
/*const student2 = {};
student2.firstName = "jane";
student2.secondName = "doe";
student2.gender = "70";
console.log(student2["secondName"])*/ 
/*
const anime = {
    firstPlace : "friren",
    yearOfRelease : "2009",
    characters : "11",
    theAnime : function(){
        return this.firstPlace +" "+ "has been released on" +" " + this.yearOfRelease;
    }
}
//console.log(anime.theAnime())
anime.characters = "11"
//delete anime.characters;
console.log("characters" in anime)

const person = {
    name: 'John',
    age : "50"
}

//console.log(person.name +" " + "is" +" " + person.age)
person.name = "jane";
console.log(person)

const myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car1)*/ 

/*let shoppingList = [];
shoppingList.push("apple", "pear");

const myShoppingList = (shoppingList) => {
    return `your shopping list constist of: ${shoppingList}`
}
console.log(myShoppingList(shoppingList))*/ 

/*let lunches = [];
const addLunchToEnd = (strin) => {
    lunches.push(strin)
    console.log(`${strin} added to the end of the lunch menu.`)
    return lunches

}
console.log(addLunchToEnd("boba"))*/ 
/*let days = [ "sunday","monday", "tuesday", "wednesday", "thursday"]
let toDoList = {
    "monday" : "wash hair",
    "tuesday" : "piano practice",
    "wednesday" : "sowing garments",
    "thursday" : "farming",
    "friday" : "weeding"
}
days.unshift
let today = days[new Date().getDay()];
//console.log(today)
console.log(toDoList[today])
console.log(toDoList.monday)
*/ 
let animals = ["cow", "dog", "goat", "chicken"];
//console.log(animals.length)
function removeLastLunch(animals) {
    if(animals.length > 0) {
        const remove = animals.shift();
        console.log(`${remove} removed from the start of the lunch menu.`)
    } else {
        console.log("no lunches to remove. ")
    }
    return animals
}
console.log(removeLastLunch(animals))


/*function removeLastLunch(animals){
    for(let i = 0 ; i > animals.length; i++){
        if (i >= 0){
            console.log(animals.shift()+ "removed from the end of the lunch menu.")
        }else{
            console.log("No lunches to remove.")
        }
    }
    return animals;
}
console.log(removeLastLunch())*/ 
let arr = [1, 2, 3, 4, 5, 6, 7, 8,10];
let map1 = arr.map((num) => num * num);


function fun (){
    console.log("how are you doing today")
}
function funner (fun){
    fun ()
}
funner(fun)


/*function getRandomLunch(arr) {
    if (arr.length > 0) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
    } else {
        console.log("No lunches available.");
    }
}
getRandomLunch(arr)

let prizes = ["cows", "pigs", "gold", "silver", "iron", "perfume"]

function showLunchMenu(arr) {
    if (prizes.length > 0) {
        console.log(`Menu items: ${prizes.join("/ ")}`);
    } else {
        console.log("The menu is empty.");
    }
}
showLunchMenu()*/ 
/*function getRandomItem (prizes) {
    if (prizes.length > 0) {
        let random = Math.floor(Math.random() * prizes.length)
        console.log(prizes[random])
    } else {
        console.log("this array is empty.")
    }
}
getRandomItem(prizes)*/ 
/*function rmvItem (arr){
    if(rmvItem.length > 0){
        let len = arr.pop()
        console.log(`${len} is the only iten that has been removed.`)
    }else {
        console.log("can not remove an item.")
    }
    return arr
}
console.log(rmvItem(arr))*/ 
/*const anim = (animals) => {
    //let blue = animals.shift();
    if(animals.length >=0){
        console.log(animals.shift() + "removed from the end of the lunch menu.")
    }else{
        console.log("No lunches to remove.")
    }
    return animals
}

console.log(anim())
//animals.shift()
//console.log(animals)
*/ 
