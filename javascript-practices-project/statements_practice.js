
const calculateInterest = (principle, rate, years) =>{
     let interest = principle * rate * years;
     return interest;
}
let calc = calculateInterest(1000, 0.05, 3);
console.log(calc)
