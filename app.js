/* Raphael and his family went on a holiday and went to 3 different restaurants. The bills were $140, $45 and $270.

To tip the waiter a fair amount, Raph created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, Raph would like to have 3 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
3) use the array method filter to create a new array called copy that only contains the final paid amounts over $100. */

let finalBill = [140, 45, 270];

function tipCalculator(bill){
    if(bill < 50){
        return bill * .2;
    } else if(50 <= bill <= 200){
        return bill * .15;
    } else if(200 < bill){
        return bill * .1;
    } else {
        return 'invalid';
    }
}

let tips = [tipCalculator(finalBill[0]), tipCalculator(finalBill[1]), tipCalculator(finalBill[2])];

let billAndTip = [(finalBill[0] + tips[0]), (finalBill[1] + tips[1]), (finalBill[2] + tips[2])];

function hundred(value) {
    return value >= 100;
  }
  
let overHundred = billAndTip.filter(hundred);

console.log(`Bill values are ${finalBill}`);
console.log(`Tip values are ${tips}`);
console.log(`Bill plus tips are ${billAndTip}`);
console.log(`Over a hundred is ${overHundred}`);



  
