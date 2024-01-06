//type children = {
//     name:string,
//     age:number
// }

// type person = {
//     name: string;
//     age:number;
//     email: string;
//     children?:children

// }


// const person: person = {
//     name: "hasan",
//     age: 18,
//     email: "2gamil",
//     children: {
//         name: "qazi",
//         age: 10
//     }
// }


// const person2:person = {
//     name: "abdul ahad",
//     age: 18,
//     email: "2gmail"
// }

// const child: children  = {
//         name: "faheem",
//         age: 44
//     }


// type person = {
//     name: string;
//     age: number;
//     email: string;
// }

// let person1: person ={ // fresh object
//    name: "hasan",
//    age: 19,
//    email: "abc",
//    // a: "sad" // no extra property allowed
// }

// let person2 = {// fresh object
//     name: "hasan1",
//     age: 18

// }


//  person2 = person1; //person1 os a stale object

// console.log(person2.age);



// type Student = {
//     name: string,
//     rollNumber: string
// }


// type Teacher = {
//     name: string,
//     experience: number
// }




// let std1: Student = {
//     name: "Faheem",
//     rollNumber: "PIAIC123",
// }

// let teacher1: Teacher = {
//     name: "Zia",
//     experience: 10,
// }


// let both:Student|Teacher = {
//     name:"hasan",
//     experience: 2,
//     rollNumber:" 112"    
// }   

// let both:Student&Teacher= {
//     name: "hasan",
//     experience:2,
//     rollNumber:"112"    
// }


// both.rollNumber;

// let a:any = 10;

// let b:boolean = true;
// a = "hello world";
// // a = b;
// // a = b;
// b = a;
// console.log(b)


// let a:unknown = "hello world";
// let b:unknown = "hasan";


// a = 10;
// a = true;
// a = {}

// a = b;
// b = a;



// let a:string = "hello world";
// if(typeof a === "string" ){
//     console.log("str");
// }
// else{
//     console.log(a);
// }


// let a:unknown;

// a = "hasan" as string;

// //a

// let myName:unknown = "Hasan";
// console.log((myName as string).toUpperCase())

// //myName




