const user = { 
    username: "sahib",
    price: 626,

    welcomemessage : function(){
        console.log(`${this.username}, welcome to app`);  // (this) currentcontext ko access karta hain. like username , agr mujhe iske place 
        // mein another name add krnaa hain , toh isee this. assces krke bhulaa sakte hain or usee access mein change kr sakte hain.
        console.log("this", this);
        
    }
}

user.welcomemessage()
user.username="raaj"
user.welcomemessage()
console.log(this);


const addTwo = (num1,num2) => num1+num2    // arrow function , function ki trah kam krtaa hain, pr iskii or bhi usee krne ki or kam krne property 
// alg alg hoti hain.(jaise isme inline mein statement de diya.)

 // agr {} in cuurly prases mein usee kraa hain to return keyword dena hoga .
//  inline mein paramter ko parathinses deke useke baad => arf deke direct num1+num2 (aese return krr sakte hain, return keyword likna nahi prdtha)
// ise parameter parathinses mein deke arrow function lga ke parathinsis mein return kraa skte hain like example- (num1+num2) 
// isme mein bhi return keyword ki usee nahi prdthi.
console.log(addTwo(3,4));


