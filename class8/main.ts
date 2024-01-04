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


type person = {
    name: string;
    age: number;
    email: string;
}

let person1: person ={ // fresh object
   name: "hasan",
   age: 18,
   email: "abc",
   // a: "sad" // no extra property allowed
}

let person2 = {// fresh object
    name: "hasan",
    age: 18

}


 person2 = person1; //person1 os a stale object

console.log(person2.name);


    