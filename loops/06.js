// filter

const array  = [5, 12, 8, 130, 44]

const newarr = array.filter( seprate => seprate>10)
// console.log(newarr);

const fruits =  ["apple", "banana", "grape", "kiwi", "mango"]

const seprate = fruits.filter( faal => {
    const letter = faal[0];
    if("a".includes(letter)){
        // console.log(faal);
        
    }
}) 

const numbers = [10, 25, 30, 45, 50]

const sep = numbers.filter( choose => choose%2 === 0);
// console.log(sep);



// Sirf wo users filter karo jinki age 18 se zyada hai
const users = [
    { name: "Amit", age: 28 },
    { name: "Priya", age: 19 },
    { name: "Rahul", age: 35 },
    { name: "Neha", age: 16 }
];

const search = users.filter( searched => searched.age > 18)
// console.log(search);



// Sirf wo products filter karo jinka price 20000 se zyada hai
const products = [
    { name: "Laptop", price: 55000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 },
    { name: "Headphones", price: 5000 }
];

const check = products.filter( checked => checked.price > 20000)
// console.log(check);



// - Sirf wo colors filter karo jo 5 characters se kam hain.
const color = [ "red", "blue", "green", "yellow", "black" ]

const findcolor = color.filter( finded => finded.length < 5);
console.log(findcolor);