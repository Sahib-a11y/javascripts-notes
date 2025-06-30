//for loop

// for (let index = 0; index < array.length; index++) {   ( //let index = 0 (let is declaring value with varible index)  --> index < array.length  (after applying condition on index  (< less than mark) array.length) after element work after  index++  add in value with +1. )

//     const element = array[index];
    
// }


// placeholder of condition applying and checking guide
// for(declaring = value; apply condition ; itration with +1(after checking itration applied) ){
//    const element = array[index];   (here checking and go in itration method +1 for add in value )

//  untill condition not goe's false this condion working in loop
// }


for(let age = 0;  age < 15; age++){
    const umar = age;
    // console.log(umar);
}

for (let count = 0; count <= 21; count++){
    const number = count;

    if (count === 19) {
        // console.log(count,"count start  break from next line");
    }
    // console.log(number);
    
}

// this is nested Loop
// Nested Loop use hota hain jab eke loop ke andrr doosra loop execute kraaana ho.

for (let i = 0; i <= 10; i++){
    // console.log(`Outer loop value  : ${i}`);

    for(let j= 0; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+`*` + j +`=` + i*j);   // also multiply number by this way
        
        
    }
    
}

for(let i= 0; i<=3; i++){
    // console.log(`parent  loop value :${i}`);

    for(let j=0; j<= 3; j++){
        // console.log(`clild loop value : ${j}  parent loop value ${i} `);

        for( c=0; c<= 3; c++){
            // console.log(` chldish loop value${c} child loop value : ${j} parent loop value ${i} `);
            
        }
        
    }
    
}    // 3 loop circulation done then out from loops



// this condition for when want to stop the flow of condition applied. when break applied on control flow goes outside from the loop.

for ( let i=0; i<= 10; i++){
    if(i==5){
        // console.log("5 is found");
        break
    }

    // console.log(`value is ${i}`);
    
}


// in this continue rule when found number without stopping flow of logic. flow continued..

for ( let i=0; i<= 10; i++){
    if(i==5){
        console.log("5 is found , continued...");
        continue
    }

    console.log(`value is ${i}`);
}
