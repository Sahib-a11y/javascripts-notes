// const user ={
//     username :"sahib",
//     logincount: 8,
//     signedIn:true,

//     getUserDeatils :function(){
//         // console.log("Got user details from database");
//         // console.log(this)
//         console.log(this.username)
//     }

// }
// console.log(user.username);
// console.log(user.getUserDeatils());

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greeting =function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userone = new User("sahib" ,21,true)   
const userTwo = new User("kulbir" ,10,false)  // if can't use new values will be overwrite.
console.log(userone);
console.log(userTwo);