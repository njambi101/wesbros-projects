/*const cars = [];
cars[0]= "saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars);*/


 

/*animes[4] = "aot";
let anime = animes[3];
console.log(animes) 
console.log(animes.toString());
console.log(JSON.stringify(animes));
console.log(typeof(animes));
console.log(animes.length)*/ 
/*const animes = ["jjk", "attackontitans", "demonslayer", "re:zero"];*/ 
/*let nums = animes[animes.length - 1];
console.log(nums);*/ 
/*const nums = [10, 20, 30, 40, 50];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}
*/
/*for (let i = 0; i < animes.length ; i++) {
    console.log(animes[i]);
}
for (const num of animes) {
    console.log(num)
} 
for (const b of animes){
    console.log(b)
}
animes.forEach((num, index) => {
    console.log(index, num)
}); */ 
/*const animes = ["jjk", "aot", "re:zero", "sheildhero", "demonslayer", "anohana", "beserk", "cowboybebop"];
for (const a of animes) {
    console.log(a)
}

animes.forEach((nums, index) => {
    console.log(index, nums)
})
*/ 
/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num + 2);
console.log(doubled);
numbers.forEach((index) => {
    console.log(index);
})*/ 

/*const numbers = [10, 20, 30, 40];
for (const item in numbers) {
    console.log("item:", item)
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
 for (const a of numbers) {
    console.log(a)
 }

 numbers.forEach((a, b) => {
    console.log(b, a)
 })

 const double = numbers.map(num => num * 2);
 console.log(double)
*/ 
/*const num = [10, 20, 30, 40,50];
let total = 0;
for(const n of num) {
    total += n
}
console.log(total)

const users = ["gojo", "emilia", "subaru", "rimiru"];
const greetings = users.map(name => `Hello ,${users}`)
console.log(greetings.toString())
*/
const number =["jjk", "attackontitans", "demonslayer", "re:zero"];
/*const b = number.map(y => `te number is , ${number}`)
console.log(b)*/

/*for(let i = 0; i < number.length; i++) {
    if(number[i] === "attackontitans") {
        console.log("found:", number[i]);
        break;
    }
}*/ 
/*const n = new Array(1,2,3,4,5,6,8)
for (let i = 0; i < n.length; i++){
    if (n[i] === 5){
        console.log("found:", n[i])
        break;
    }
}
*/

//console.log(anime.length = 2)
//anime.push ( "sheildhero")
//console.log(anime)

//let ans = anime.toString();

//console.log(anime.at(-3));
//console.log(anime[2])
//console.log(anime.join("1"))
//anime.pop()
//console.log(anime.pop())
//anime.shift();
//anime.unshift("kekai sensen")
//anime[anime.legth] = "kiwi";
//anime.isArray(anime)
const anime =["jjk", "attackontitans", "demonslayer", "re:zero"];
/*/const manga =["Devilman Crybaby", "Dragon Ball", "Dragon Ball Z"];
const myanime = manga.concat(anime, "jokings")
*/ 
//anime.copyWithin(2, 0)
//const myArr = [[1,2],[3,4],[5,6]];
//let newArray =myArr.flat();
//console.log(newArray)

//const fruits = ["Apple", "Orange", "Apple", "Mango"];
//let position = fruits.indexOf("Apple") + 2;
//let position = fruits.lastIndexOf("Apple") + 1;

//console.log(fruits.includes("banana"))

//This example finds the index of the first element that is larger than 18:
/*const numbers = [4, 5, 16, 25, 29];
let first = numbers.findIndex(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(first)*/ 
const temp = [27, 28, 30, 43, 40, 42, 35, 30]
/*let high = temp.findLast(x => x > 40);
console.log(high)

let first = temp.findIndex(y => y > 42)
console.log(first)

let last = temp.findLastIndex(b => b < 30)
console.log(last)

let rename = temp.map(u => `okay , ${temp}` )
console.log(rename)*/ 
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//const newArr = temp.flatMap(x => [x, x * 10])
/*const fruits = ["Banana", "Orange", "Apple", "Mango"]
 fruits.splice(2, 1, "lemon", "kiwi");
console.log(fruits);
console.log(fruits.splice(0, 2));

console.log("start")
setTimeout(function (){
    console.log("This is setTimeout");
} , 2000);

console.log("end")*/ 
const students = [
  { name: "Liam Smith", birthYear: 2008, gender: "Male" },
  { name: "Olivia Johnson", birthYear: 2009, gender: "Female" },
  { name: "Noah Williams", birthYear: 2007, gender: "Male" },
  { name: "Emma Brown", birthYear: 2008, gender: "Female" },
  { name: "Oliver Jones", birthYear: 2009, gender: "Male" },
  { name: "Ava Garcia", birthYear: 2007, gender: "Female" },
  { name: "Elijah Miller", birthYear: 2008, gender: "Male" },
  { name: "Charlotte Davis", birthYear: 2009, gender: "Female" },
  { name: "William Rodriguez", birthYear: 2007, gender: "Male" },
  { name: "Sophia Martinez", birthYear: 2008, gender: "Female" },
  { name: "James Hernandez", birthYear: 2009, gender: "Male" },
  { name: "Amelia Lopez", birthYear: 2007, gender: "Female" },
  { name: "Benjamin Gonzalez", birthYear: 2008, gender: "Male" },
  { name: "Isabella Wilson", birthYear: 2009, gender: "Female" },
  { name: "Lucas Anderson", birthYear: 2007, gender: "Male" },
  { name: "Mia Thomas", birthYear: 2008, gender: "Female" },
  { name: "Henry Taylor", birthYear: 2009, gender: "Male" },
  { name: "Evelyn Moore", birthYear: 2007, gender: "Female" },
  { name: "Alexander Jackson", birthYear: 2008, gender: "Male" },
  { name: "Harper Martin", birthYear: 2009, gender: "Female" }
];
let names = {
    name : "grace mjambi",
    birthYear : 2002,
    gender : "female"
}
//students.unshift(name)
students.splice(4, 0, names)
//let named = students.find(student => student.name === "grace mjambi")
//let y = students.find(year => year.birthYear === 2009 && year.name === "grace mjambi")
//let y = students.filter(car => car.birthYear === 2008) 
//let a = students.filter(d => d.gender === "Female")
//let s = students.map(i => 2026 - i.birthYear )
/*let age = students.map ( u => {
    if (u.birthYear === 2007){
        return "welcome 2007 first years."
    }else if (u.birthYear === 2008){
        return "welcome 2008 second years"
    }else if (u.birthYear === 2009){
        return "welcome 2009 third year"
    }
})*/ 
/*let d = students.map(r => {
    let prop = {
        "name" : students.name,
        "size" : "large"
    }
    return prop
});
console.log(d)*/ 




