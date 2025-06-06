//  reduce 

let placed = [1,2,3,4,5]
let total= placed.reduce(   //yea reduce array ki every value pe jata hain
    (accumlator , currentvalue ) => accumlator + currentvalue , 0);
    // console.log(total);
    

let numbers = [5, 10, 15, 20, 25];

let max = numbers[0]


for(let i=1;i<numbers.length;i++){
    // if(max<numbers[i])
    //     max = numbers[i]
    max = Math.max(max,numbers[i])
}

// console.log(max)

//  console.log(numbers.reduce((acc,curr) =>{
// return Math.max(curr,acc)
// },-Infinity))

let number = [12, 3, 45, 23, 9];

let maxed  = number.reduce ((store , value ) => Math.max(store , value, 0))
// console.log(maxed);

let transactions = [
    { type: "deposit", amount: 5000 },
    { type: "withdrawal", amount: 2000 },
    { type: "deposit", amount: 3000 },
    { type: "withdrawal", amount: 1000 }
];

const trans  = transactions.reduce(( amt , add )=> amt + add.amount,0);
console.log(trans);