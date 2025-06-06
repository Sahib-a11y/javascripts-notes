// singleton
// const tinderuser = new Object()   // this is sinle ton object

const tinderuser= {} //this is the non singleton object.
tinderuser.id ="sxc54"    //------------------------------
tinderuser.name = "sahib"  //                            |----> this is only basic information. 
tinderuser.isloged = false  //----------------------------

// console.log(tinderuser);


const user= {
    email:"preeet@gmail.com",
    fullname :{
        userfullname:{
            firstname :"gurpreet",
            lastname:"singh",
        }
    }
} 
console.log(user.fullname.userfullname);  // .dot ka use krke object to object deep ja skte hain .

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)  // object.assigne use krke multiple objects ko ek object me rkhh sakte hain.
// (like array type) yee bhtt kmm useekrtee hain

const obj3={...obj1,...obj2}  //this is spread function for spred  all object in one object. (this is latest and more 
// useable)
console.log(obj3);


// jab database se user ka data ata hain too array of object me ayee ge.
const users=[{
    id:1,
    email:"rakesh",
},
{
    id:2,
    email:"anny",
},
{
    id:3,
    email:"anmol",
},
{
    id:4,
    email:"sehaj",
},
]

console.log(tinderuser);

console.log(Object.keys(tinderuser));  // isme javascript ko btana prd rhaa hain kiski keys chayiye to parathineses 
// me btate ge kaha se leke aani hain keys.(tinderusers)
console.log(Object.values(tinderuser));  //aese hi values bhi acces krr sakte hain.
console.log(Object.entries(tinderuser));  // object.entries ek object ki  kys values ko arrays mein me convert krr 
// deta hain like [['keys','value'], [],['keys', 'values']]

// object ke andr kayi brr loop throuh se value nikll rhe hote hain, kahi brr vo value exist nahi krti hi nahi
// karti to crash hone ke chances ho skte hain isee bcnee ke liyee yee tarikaa usee kr skte hain

console.log(tinderuser.hasOwnProperty('name'));  // output boolean me dega =(true\false) mein.

// hasOwnProperty puchee ga iskee andr yeaa property hain , agr hogi to true nahi to false return krr degaa .


// <---------------------------------------------------------------------------------------------------------------------->
// Destructuring

const course = {
    coursename:"js objects",
    price:551,
    Instructor:"sahib"
}
    // course.Instructor

    const {Instructor} = course   // course me see konsi value extract karni hain to {Instructor} ka btaya hain 
    // Instructor ko naaam ke deke usee call kraa sakte hain {Instructor:naam} <--- aese
    console.log(Instructor);
    

