//  for of loops

let sum = [1,2,3,4,5]

for (const num of sum){   // in for of loop want to apply condtion , use if statement , continue , break
    // console.log(`sum is ${num}`);
    
}

const name="sahib"

for (let nme of name){    //  for of means (kisi bhi) of --> iske uprr loop lgana hain
    // console.log(`name letter is ${nme}`);
    
}


// Maps
const map = new Map()

map.set("name" , "Sahib")
map.set("age" , 22)
map.set("color" , "white") 

// console.log(map);

map.delete("color")

// console.log(map);

for (const [key,value] of map){     //when we want key value separate use [key, value]
    // console.log(key ,"=>", value)
}

const myobject = {
    'car': 'swift',
    'lab': 3
}

for(let [race,name] of myobject){
    console.log(race ,"=",name);
    
}
