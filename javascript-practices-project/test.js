/*let emails = "example.gmail.com";
let emailparts = emails.split('g');
console.log(emailparts);
console.log(emailparts[1]);
let username = emailparts[0];
console.log(username[0]);*/

let year = 0;
let result;
function isLeapYear (year){
    if(year % 4 === 0 & year % 400 === 0 & year % 100 !== 0){
        result = `${year} is a leap year.`;
    }
    else{
        result = `${year} is not a leap year.`;
    }
}   
console.log(isLeapYear());