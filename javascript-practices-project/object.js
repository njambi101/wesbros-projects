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
let days = [ "sunday","monday", "tuesday", "wednesday", "thursday"]
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
