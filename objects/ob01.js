// symbol practise

const mysym1 = Symbol("sahib2")

// Object literals

const jsuser= {      // that's object
    name : "sahib",    // object me name ko js ek string way me dekhta hain , arrays me name ke sath declare nahi
    //  kar skate pr object me usee ulta hain.
    age: 21,
    location: "delhi",
    [mysym1]:"mykeys1",   // is tarrike se symbol ko define krtee hain 
    email:"sahib@gmail.com",
    logedin:false,
    logeddays:["monday", "wednessday"]
}

console.log(jsuser.location);   // pehla tarika object ko asccess krme ke liye 
console.log(jsuser["name"]);  // dusra tarika object ko access karne ke liyee. isme is liye string se access krvaha 
// hain kyuki, javascript name element ko ek string ke way me dekhta hain, pr hmm element ke roop me dekh te hain. 
console.log(jsuser.mysym1); // isme mysym1 ek object me hain isliye object ki value de rha hain.
console.log(jsuser[mysym1]);  // way to accesses symbol 

 jsuser.email= "sahib45@hmail.com"  // is tarike se object ki  keys value  ko change krr sakte hain
 console.log(jsuser);  

//  Object.freeze(jsuser)  // .freeze ka use krke object ko lock krr sakte hain ki change na krr sakhee.

 jsuser.location="punjab"  // isme usee kraa to hain prrr change nhi kee paya location ko. 
 console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello sahib");
}

console.log(jsuser.greeting());
console.log(jsuser.greeting);   // isme ye btata hain ki function start nahi hua bs abhi filal excute krne ke liye 
// order(nirdesh) aya hain excute krne ke liye.( refrenece ka matlab nirdesh dena (order like)).

jsuser.greeting2 = function(){
    console.log(`hello sir, ${this.name}`);  // agr same object ko refrence krna hain to this.usee krte hain btatta 
    // hain ke this mein kitni property hain.(name property ko select kra hain)
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());