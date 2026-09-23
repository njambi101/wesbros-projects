/*console.log("hello world!")
const klocationName = "Green Valley"
let temperatureReading = 25.3;
let isVarified = false;
temperatureReading = 26.1;
isVarified = true;
console.log(temperatureReading)*/

/*console.log("Hello! I'm your coding fun fact guide!")
let botName = "kjlm;klm"
let botLocation 
let favoriteLanguage
console.log(`hi i am ${botName}`)*/

const maskEmail = (email) => {
    let emailParts = email.split('@'); 
    let username = emailParts[0];
    let domain = emailParts[1];

    let firstChar = username[0];
    let lastChar = username[username.length - 1];

   
    let maskedLength = username.length - 2;
    let star = firstChar + '*'.repeat(maskedLength > 0 ? maskedLength : 0) + lastChar;

    return star + '@' + domain;
} 

let email = "njambi@gmail.com"; 
console.log(maskEmail(email));


    
