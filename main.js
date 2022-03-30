// จากโพสนี้
// https://www.facebook.com/photo?fbid=4884625234953716&set=gm.845693799563485


//Method 1
let countZero1 = 0;
for(let i = 1; i <= 10000; i++){
    countZero1 += i.toString().replace(/[1-9]/g,"").length;
}
console.log(countZero1);


//Method 2
const numbers = Array.from({length: 10000}, (_, i) => (i+1).toString());
const countZero2 = numbers.join("").replace(/[1-9]/g,"").length;
console.log(countZero2);

// Answer is 2893
