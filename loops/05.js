// foreach loop

let words = ["hello", "world", "javascript", "foreach"];

words.forEach(count =>{
    // console.log(`${count} = ${count.length}`);
        
})


// forEach() ka use karke ek function likho jo sirf woh names print kare jo 5 ya usse zyada letters ke hain.
let names = ["Aman", "Simran", "Raj", "Neha", "Arjun"];

names.forEach(name =>{
    if(name.length>=5){
        // console.log(name);   
    }
})




// forEach() ka use karke ek function likho jo sirf wo numbers print kare jo 10 se bade hain, lekin unhe 2 se bhi multiply karna hai.
let numbers = [5, 12, 8, 20, 3, 15];

numbers.forEach(num=>{
    if(num>10){
        // console.log(`${num} x 2 = ${num*2}`);   
    }
})




// forEach() ka use karke ek function likho jo sirf woh words print kare jo vowel (a, e, i, o, u) se shuru hote hain, lekin unke letters ko uppercase bhi karna hai.
let wrds = ["elephant", "apple", "banana", "umbrella", "eagle", "orange"];

wrds.forEach(wds =>{
    let firstletter = wds[0]
    if ("aeiou".includes(firstletter)) {
        // console.log(wds.toUpperCase());
    }
})
// JavaScript me includes() method ka use kisi string ya array ke andar kisi specific value ko check karne ke liye hota hai. Agar wo value mil jati hai, toh true return hota hai, warna false.



// forEach() ka use karke ek function likho jo odd numbers alag list me daale aur even numbers alag list me, phir dono ko print kare.
let array = [3, 10, 7, 2, 8, 5, 12, 1];

array.forEach(numb=>{
 

    if(numb%2 === 0){
        // console.log(`even number is ${numb}`);
    }else{
        // console.log(`odd numbers is ${numb}`);
        
    }
})

let wor = ["computer", "mobile", "technology", "internet", "software"];

wor.forEach(function(spell){
    const spelling=spell.split('').reverse().join('');
    // console.log(spelling.toUpperCase());
    
})

let numbs = [5, 12, 8, 20, 3, 15, 10];

let solve =0;

numbs.forEach(function(count){
    if(count%2 === 0){
        solve += count
        
    }
})
// console.log(`even numbers is ${solve}`);



// in this question want access person++name and personage from array form data.
const arr =[
    {
    personname:"shaib",
    personage:25
    },
    {
    personname:"raaj",
    personage:19
    },
    {
    personname:"Nav",
    personage:27
    },
    {
    personname:"Veer",
    personage:26
    },
]

arr.forEach(data =>{
    console.log(data.personname);
})

