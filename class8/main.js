"use strict";
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
// let a:string = "hasan";
// let b:unknown = 18;
// //  a = b as number
// let meetingDay:string = "monday";
// if (meetingDay === "sunday"){
//     console.log("no meeting");
// }else if(meetingDay === "mondy"){
//     console.log("meeting at 10 am");
// }
// enum
// let day:"monday" | "tuesday" ///.....
// enum days {
//     sunday, // 0
//     monday, // 1
//     tuesday, // 2
//     wednesday, // 3
//     thursday, // 4
//     friday, // 5
//     saturday, // 6
// }
// let meetingDays:days = days.monday;
// if(meetingDays === days.monday){
//     console.log("meeting at 10 am")
// }
// else if(meetingDays === days.sunday){
//     console.log("no meeting");
// }
//    enum operator {
//     add,
//     sub,
//     mul,
//     div
//    }
//    let cal:operator = operator.add;
//    if(cal === operator.add){
//     console.log(2+2);
//    }
// const enum color1 {red=1,green,blue}
// var colorName: number = color1["green"]
// console.log(colorName);
// let fruits:string[] = ["apple","mango","banana"];
// type person = {
//     name:string;
// }
// // let p1:person = {
// //     name: "hasan"
// // }
// let p:person[] = [
//     {
//         name: "hasan"
//     },{
//         name: "abdul ahad"
//     },{
//         name: "razeen"
//     }
// ]
// console.log(p[1].name);
