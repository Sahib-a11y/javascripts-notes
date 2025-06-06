const myheros = ["iron man", "spider man", "captain"]
const mrvel = ["supaerman", "batman", "flash"]

// mrvel.push(myheros) // push method merge krr rha hain prr 1 array ke andrr 2 array bna rhaa hain. sahi tarikaa 
// concat ka usee krke.

// console.log(mrvel);
// console.log(mrvel[1][5]);

let heros=mrvel.concat(myheros)   //iska concat ka kam hota 2 arrays ko apas me jod na bina kisii intruptions ke.
console.log(heros);

let allheros = [...myheros,...mrvel];  // yeaa second method hain merge krne kaa name is spred method ,
//  ek array me sbko alag krr deta hain . 
console.log(allheros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // isme  araay ke andr arrays hain. isko ekk array ke andrr 
// convert krnee ke liyee 

const real_another_array = another_array.flat(Infinity)  // flat ka use krna hain yee ek me hi sabko convert krnee ke 
// liye uski value ka mtlbb hota hain kitni debth tkk array jna hain , infinity ka mtlb akhri tk (unlimited).
console.log(real_another_array);

console.log(Array.isArray("sahib")); // isme isArray ka use krkee hmm puch rhe hain ki yee array hain jaa nahi .

console.log(Array.from("sahib")); //from ne iss string ko array me convert krr diyaa every words ko . 

console.log(Array.from({name:"sahib"})); // agee isee tarikee se convert krnaa chahe to js hmee emty array return
//  kree g , kyuli issee convert nahi krr sakti array me js.(interesting)

let score1 = 6262;   // elements hain 
let score2 = 544;
let score3 = 5481;

// console.log(Array.of(score1,score2,score3)); //array of elements ko convert krta hain arrays mein.












