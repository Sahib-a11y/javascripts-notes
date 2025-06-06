const score = 400  //isme to khud understand krr rha hain iska prototype number hain.
// console.log(score);

const balance = new Number(532)   //yea javascript ko kehta hain ki yea  (prototype->number) hain je.
// console.log(balance);

// console.log(balance.toString());  // yea javascript ko kehta yee string prototype hain.
// console.log(balance.toString().length);  // dot(.length) ne character count kare hain , matalab kitne character hain iss number mein.

// console.log(balance.toFixed(2));  // yea function kehta hain main number ke baaad tofixed ka use kakrke  .00 lagg jayee, isko modify bhi krr sakte
//  hain jitne bhi tofixed ke andrr count dalo gee utnee zeroo lagee gee main number ke baad.

const otherNUmber=256.98
// console.log(otherNUmber.toPrecision(3));  // toPrecision ka use krkee .ke baad jitni bhi value hain usee round off kardee matlab ki agr number ke
//  pass . ke baad koi value hain uskaa ka round off karke 3 digit me dede gaa jitni value apne put kari hain uskee baad ki hta degaa


let hundreds = 1000000; // yee value di hain hunfreds ko .
// console.log(hundreds.toLocaleString());   // tolocalstring ka use kisi large number me commma lag jata hain. or phrases me (en-In) ka usee krke 
// country ke hisaab se comma adjust ho sakte hain.

// ===============================================Math=============================================================//

console.log(Math.abs(-6));   //yee Math.abs function negative value ko positive me convert karta hain sub--to-->addition.


console.log(Math.round(6.4));  //yee function 6.4 ka round off karke 6 dede ga decimal ke baaad ki value htaa ke answer dede ga.

console.log(Math.ceil(5.2));  // ye function kehta hain agrr 5.0 ke upr koi b value aai to main usee top value dedu gaa matlab 6 answer dede gaa.

console.log(Math.floor(12.2));   // yee function 12.0 ke upr koi si bhi value aa jayee m to decimal ko htaa ke 12 hi answer duga vapis.

console.log((Math.min(1,5,6,9)));  // yee function aaray ki sabse small value find krke degaa

console.log(Math.max(3,5,6,2));  // yee function aaray ki sabse large value find krkee degaa

console.log(Math.floor(Math.random()*10)+1);  //yee function 0 or 1 ke bich koi c bhi value degaa decimal ke roop mein. agr hmm chahte hain value 0 ke  or 10 ke 
// bich me ayee to hmm multple sign *10 ko likh ke value put krwaa sakte hain , agr hm 0 value nahi lana chate to iskee andr plus one +1 likh do 
// to abb 1 se 10 ke bich me ayee g value. floor ka usee krkee decimal. ke baad ke value remove krke answer vapis degaa.


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);  //isme floor or random usee krkee max ki value ko min ki value se subtracte kraya hain
// +1 usee kraa hain ki value 0 na ayee or +min ka usee min ki value ko add krnee ke liye jisee value 10 ke uppr ayee g .

