function setusername(username){
    this.username = username
}

function createuser(username, email,password){
    setusername(username)


    this.email = email
    this.password = password
}


const chai =  new createuser("chai", "chai@fb.com","123")
console.log(chai)


// function showname(){
//     let name = "gursahib"
//     console.log(name);
// }

// showname()
// console.log(this.name);



// console.log(this)


// const one = {
//     name :"sahib",
//     user(){
//     console.log(this.name);    
//     }
// }
// one.user()


// function name(){
//     console.log(this.name);
// }

// const person = {name : "shianbkn"}

// name.call(person)

