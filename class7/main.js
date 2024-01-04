"use strict";
// export const a = "Hamzah";
// let a :string |number |boolean = "hasan";
// a = 10;
// a = "hasan";
// a = true;
// let age: number = 18;
// console.log(age.toFixed(10));
// let firstName = "Hasan";
// firstName.toLocaleLowerCase();
// let age: string | number;
// age = 18;
// age.toFixed(2);//Narrowing
// age = "21";
// let age: string | number = "19";
// console.log(typeof age);
// let age: string | number = 2;
// Wrong method
// if (typeof age === "string") {
//     age.toUpperCase()
// } else {
//     age.
// }
// console.log(Math.random());
// let newage = Math.random() > 0.5 ? 22 : "khan";
// console.log(newage);
// if(typeof newage === "string"){
//     newage.toUpperCase();
// }
// else{
//     newage.toFixed(2);
// }
// let trafficlight : "yellow" | "red" | 3 = "red";
// trafficlight = 3;
// let teacher : {
//     name : string,
//     salary : number,
//    "fullName" : string
// } = {
//     name: "hasan",
//     salary: 20000,
//     "fullName": "Muhammad hasan"
// };
//  teacher.name // hasan
//  let teacher: { name: string, exp: number } = {
//     name: "Zeeshan",
//     exp: 10
// }
//     //  type Student = string | boolean | number | undefined
// // let b: string | boolean | number | undefined;
// let a: Student;
// let b: Student;
// type Student = {
//     name: string,
//     age: number
// }
// let student1: Student = {
//     name: "Hamzah",
//     age: 22
// }
// let student2: Student = {
//     name: "Zeeshan",
//     age: 22
// }
// import inquirer from "inquirer";
// let answer = await inquirer.prompt([{
//     type:'number',
//     name:'num1',
//     message:'enter your first number'
// },
// {
//     type:'number',
//     name:'num2',
//     message:'enter your last number'
// },
// {
//     type:'list',
//     name:'operator',
//     message:'enter your operator',
//     choices:['add','sub','multiply','divide']
// }])
// if(answer.operator === 'add'){
//     console.log(answer.num1 + answer.num2);
// }
// console.log(answer);
// interface Deal1 {
//     food:string,
// }
// type Deal2 = {
//     food: string,
//     drink: string
// }
// let hasanorder: Deal1 = {
//     food: "biryani",
// }
// let hasanorder2: Deal2 = {
//     food: "biryani",
//     drink: "sting"
// }
// let a = 22;
// let b = "22";
// a = b; //error
// console.log(a);
// hasanorder = hasanorder2; // no error
// hasanorder2 = hasanorder // ERROR - MISSING PROPERTY
// interface Ball {
//     diameter: number;
// }
// interface Sphere {
//     diameter: number;
// }
// type Tube = {
//     diameter: number;
//     length: number;
// }
// let ball:Ball = {
//     diameter: 10
// }
// let sphere:Sphere = {diameter: 12}
// sphere = ball;
// ball = sphere;
// type Tube = {
//     diameter: number;
//     length: number;
// }
// let tube:Tube = {
//     diameter: 10,
//     length: 6
// }
// interface Ball {
//     diameter: number
// }
// let ball: Ball = {
//     diameter: 10,
//     length: 5
// } //  Fresh - Can't provide extra properties 
// let ball = tube;  // Stale Object: Ignoring Extra properties 
// // console.log(ball);
// let myType = { id: 2,  name: "Tom" };
// let myType2 = { id: 2,  name: "Tom" };
// //Case 1
// myType = myType2;
