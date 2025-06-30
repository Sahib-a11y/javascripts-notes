function  addnumber(num1,num2){   // jeh addnumber function ka naam h ain, isee hmm (varible) bhi lekyte hain. or uskee parameters hain(num1,num2)
    console.log(num1+num2);   // isme print kraa rhee hain
}

addnumber(5,9)   //aese krnee ko call karna kehte hain function ko bulaa rhaa hain eske naam se. or parathinsis 
// mein value de rakhi hain jo add hogi.  Output=14

addnumber(3,"6") // aese mein add nahi kree gaa kyuki hmne ekk value string me di hain ,sike karnn 
// output = 36 ayee ga.


//  hmee esee nhi krr skte hain

function num(nm1,nm2){     // isme mme funtion ka nam deke (parmeters) liye hain.
     let result= nm1+nm2   // result naam ka varible leke usme value ko define kra hain.
     return result     // or return keywords  deke  iss phrasis ke bhar accesble bnaa sakyte hain. 
}

const result = num(2,4)   // abb jaha result ko call krke num function ki value di hain

console.log("result:",result);  // isme result string me print hoke result ki value ko add krke yaha output degaa .


function userdetails(usrname){   //function name userdetails uske parameters(username)
    if(!usrname){     // is parathinsis()  mein hmesaa value check hoti hain, !exlametry symlbol(not) yea false ko 
    // true mein or false ko true main me convert kr deta hain (!agr username nahi hua to console ka mssg de dena.)
    // agr default value rakhni ho toh (!username = "value") is trah se check kree ge.
        console.log("please write username");  // phrasis mein code ko extecute krte hain
        return 
    } 
    return`${usrname}  logged in`   // isme return kraa hain username ko accesible banee ke liye
}

// console.log(userdetails("sahib")); // userdetails parameter ko username ko sahib ki value di hain jisee naam show 
// ho rha hain.
console.log(userdetails());

//<-------------------------------------Parameters---------------------------------------->

function calculateprice(...number1){   // isme function mein parameter diya. isme mein abb spred ka usee kra hain 
// jisee jitni bhi value hogi catch krr legaa parameter.
    return number1  // usee return krr diyaa
}

// funtion calculateprice(val1,val2,...number1) aese mein value sabje pass chlee jayee g rst of value number1 ke 
//  pass store ho jayee g

// console.log(calculateprice(65)); // isme parameter ko value di 65 . output bhi 65 hain

console.log(calculateprice(65,652,623));  // parameter ko 3 value di prr catch to pehli hi krr rha hain, output 
// array mein ayee ga 



