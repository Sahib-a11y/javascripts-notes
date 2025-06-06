function one (){
    const name = "sahib";
    function two(){
        const proce= "amd"
        console.log(name);  // child function parent function ko access krr sakte hain. beacause pharsis ke andr hain child function.
    }
    // console.log(proce);  // pharsis ke bhr kbhi bhi access nahi krr skate lisis varible ja value ko . output:error show kreega
    
    two() // jo phele excute kraeege vahi hoga pehlee
}
one()  // one bdd mein execute kraa hain

//  lets we take example of error in if else conditions

if (true) {
    const username = "sahib"
    if(username=== "sahib"){
        const email= "sahib@gmail.com"
    }
    // console.log(email);  //curly parathinsis ke bhr log kraa hain iss liye error show krr rha hain
    
}
// console.log(username); // yea username curly parathinsis ke bhr log kraa hain is liye error han rhaa hain.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -hosting types.

// ek question krte hain



console.log(num(3));  
function num(sum){   // isme dyan dene wali baat hain iske upr log console kraa to chll gya function. kyuki yaha num se function ko declare
//  kraa hain value.
    return sum+5
}

console.log(number(3));  
const number= function(num){  // isme log console upr mara to nahi chla error throw kr diyaa. kyuki isme declare ke sath hold bhi krvaha hain  value ko 
// = lga ke 
    return num +2 
    
}
