// const student  = {
//     fullname : "sahib",
//     marks : 54,
//     printMarks: function(){
//         console.log("marks = ", this.marks);
//     },
// };

// const student   = {
//     calculate (){
//         console.log("this is student object")
//     }
// }

// const hell = {
//     name:"sahib",
// };

// hell.__proto__ = student;


// class hero{
//     acclerate(){
//         console.log("start racing")
//     }
//     end(){
//         console.log("stopped race")
//     }
// }

// let honda = new hero();

// class calculate{
//     constructor(name){                   //function ka nm hi constructor hota hain pr hota ekk method hain
//         this.name = name
//     }

//     add(a,b){
//         return a+b
//     }
//     sub(a,b){
//         return a-b
//     }
// }
// let added = new calculate("added");
// console.log(added.sub(5,3));
// class benefit iss when written functionality in classs when same functionality usee some where in code. not all functionalaity only called funvtionalty will call,only give variable name and give new for add functionality in vairiable like :-->  let varibale = new parentclass(). 


// class toyotacar {
//     constructor(brand){
//         console.log("creating new object...");
//         this.brand = brand;
//     }

//     start(){
//         console.log("start...")
//     }

//     stop(){
//         console.log("stoped")
//     }
// }

// let fortuner = new toyotacar("fourt");
// let lenux = new toyotacar("fourt");


class car {
    constructor(name, year,brand){
        this.name = name;
        this.year = year;
        this.brand = brand;
    }

    age(){
        const date  =  new Date();
        return date.getFullYear() - this.year;
    }
}

const mycar = new car("dezire" , 2013, "swift")
// console.log(`my car age is ${mycar.age()} years old.`