const sahib=[{name:"tushar",age:22,class:"four"}, // sahib ke andrr vali detailed sari heap memory hain
    {name:"sjnsj",age:52,class:"five"},
    {name:"dxs",age:51,class:"six"}
]

const myfunction=function(){
    console.log("hello world");
}

console.log(typeof sahib);   //typeof kisi ka data type check krnee ke liyee usee hotaa hain jaise yee object hain ja function ja or kuchh.


// stack --> ek eordered or sequence wise memory hoti hain jo function or calls ko handle krti hain,isme (lifo) rule apply hotaa hain last in 
// first out(matlab jo akhri me jayeega vahi pehlee bhr ayee gaa) function jab call hotaa hain uskaa data stack me storee hotaa hain jab 
// function khtmm hotaa hain to uski ke pehlee bhrr nikl jata hain. primitive data type jate hain stack mein.



// heap --> unorderd memory hoti hain jo dunamically alllocate ki gayi memoryko handle krti hain iska,iska size run time pe adjust kiyaa ja skta
//  hain like array ka data (name:, age: ,class:)inkee andrr ki detailes ko heapp memmory khte hain, jo ekk se jaydachizoo ko store krtaa hain 
// usee heap lhtee hain isme non-prmitive type jata hain heap mein.

// EXAMPLE-----

let india = "rohitsharma";  //isme india ekk stack hain jo stack ke andrr jakee store hua hain

let pakistan = india ;  // isme kaha hain ki jo pakistan ki  value hogi vo india vali hi hogi. 
pakistan="babr azam"  // abb yee kehh rhaa hain ki pakistan ki value babr azam krdoo.

console.log(pakistan); //isme india vali value asigne ho gyii pakistan me 

// isme sirf uskii value ki copy uhtt ke ayyi hain na ki real value . jab pakistan ki value change krii gayi to pakistan ki hi value change huo hain 
// india me abhi bhi value rohitsharma hain iska mtlbb stack dusre stack se value asign krr sktee hain prr usee cngee nahi kr sktee.


// EXAMPLE OF HEAP MEMORY---------

let userone=[{         //----------
    name:"iyer",       //         |-------------- isme user one ki details hain.
    age:45,            //         |
    email:"iyer@gmail.com" //------
}]

let usertwo=userone  //---------------> usertwo ne kaha bhai mujhe userone ke andrr jo details hain vahi dedo isliyee usertwo ko userone ki details dedi.
usertwo.email="iyer45#gmail.com" //---------> ismee kaha usertwo ne mujhee abb email me changee krnaa hain mujhee 

console.log(usertwo,"usertwo");   //----------> isme console krkee check kraaa usertwo ki details ko. 
console.log(userone,"userone");   //---------> isme abb userone ki details check kri console mrkee . to iskee output me abb email change dikhh rahi 
// hain jo usertwo ne change kri .

// heap me reference vahi milta hain jo change kraa ho ismee copy nahi milti varible ki , isme refrence me smee vahi mil jata hain , iska mtlbb jo 
// data hain heap memory me usko kisi dusre value ko pehlee valee se asigne krayaa hoga to kisi me bhi kiyee changes, sabhi me ho jahee ge kyuuki 
// value reference me diya hain na ki copy krke.  


const user= new String('gursahib') //only work in crome console it give in string like only name but new string isee every word ko count krta hain.

// console.log(user[0]); //yee iss count ke andrr konsa string hain like konsa word hain. dekhne ke liyee.

console.log(user.charAt(2)); //for check 2 postion konse character pe hain  --output[r]
console.log(user.indexOf('r')); //isme charactor se ptaa chltaa hain konsi position pe hain.


const newstring=user.substring(0,5)  // substring ka kam hain value ke character utha ke lahnee jaha tkk usse bolaa gyaa hain.
console.log(newstring); 
// (15.01) se strt krni hain video 11

const newstringone=("    gursahi   ")  //is string me spaces inculdee kri gayi hain.
console.log(newstringone);
console.log(newstringone.trim());  //to trim function unn dono spaces ko htane  ke liyee usee hotaa hain (isme 3 types ke hote hain trimstart,trimEnd
// or last me trim jo dono kaam krtaa hain start or end kaa.)

const url="https:\\shaib433.com"  //isme url usee kraa hain value ko smjne ke liyee.
console.log(url);  //isme console log kraa hain broswer pe dekhne ke liyee   Output:https:\shaib433.com yee ayee ga.

console.log(url.replace('ha','ah')); //replace function ka usee url ja kisi varble ki value ko replace(bdlne ke liyee) usee krneee ke liyee hotaa hain, replace use krke 
// pehle replace function use krke word ko string ke andr find kraa fr comma daal ke string ke and value ko string ke daal ke value ke words
//  ko replace krr diyaa.