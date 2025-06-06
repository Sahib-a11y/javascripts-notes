const myArr = [1,2,3,4,5]

const myheros= ["ironman", "natasha"]

// console.table(myArr,myheros)

// array methods

myArr.push(6)  // yea push 6ko myArr ke varibles data me add krr rha hain 6 ko, iska yahi kam hota hain kisi ko kisi group me gusana.
// console.log(myArr);

myArr.pop()  // pop myArr ke last number ko htaa degaa , iska kam hi jahi hota hain kisi last value ko htaa dena koi c bhi ho.
// console.log(myArr);

myArr.unshift(5)  // isne 5 ko array ke 1 first me rkh diya jisee values  sari shift hogyi.  iska kam hota hain iske andrr dali gayi value ko 
// sabse pehle me jake rkhh deta hain.
// console.log(myArr);

myArr.shift()
// console.log(myArr); // yee value ke sabse pehli value ko remove krr dgaaa.iskaa kam yahi hota hain sabse pehli value ko remobee krr degaa bhahe koi 
// c ho.

// console.log(myArr.includes(6));  // inculde method question puchne ke liye usee hota hain jaisee hmne puchaa yee number  myArr me hain ja nahi ,
//  matlab koi bhi value puchoo gee uska answer true or false me return krkee gaa like boolean.

const Newarry=myArr.join()   // yea method array ko string me convert krr rha hain 

// console.log(Newarry);

console.log("A",myArr);


const mnA1=myArr.slice(1,3)
console.log(mnA1);

console.log(myArr);



console.log("B",myArr);

const myA2=myArr.splice(1,3)
console.log(myA2);

console.log(myArr);

