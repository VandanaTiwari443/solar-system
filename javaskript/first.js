// console.log("Hello world!");
// console.log("I Am VANDANA TIWARI HERE ");
// let fullname = "VANDANA TIWARI";
// console.log(fullname);
// const student = {
// 	fullName:"Rahul Kumar",
// 	age :18,
// 	cgpa:8.98,
// 	ispass : true,
// };
// console.log(student.age);
// console.log(student["cgpa"]);
// student["cgpa"] = student["cgpa"]+1;
// console.log(student["cgpa"]);

// const product = {
// 	title:"ball pen",
// 	price:270,
// 	rating :4,
// 	offer:5,
// };
// console.log(product);
// const profile = {
// 	title:"vandanatiwari11_",
// 	followers : 60,
// 	following : 63,
// 	posts:0,
// 	isfollow : true,
// };
// console.log(profile);
// let age = 17;
// if(age>=18)
// {
// 	console.log("you can vote");
// }
// else
// {
// 	console.log("you cannot vote");
// }

// let num = prompt("enter a number : ");
// if(num%5 === 0){
// 	console.log(num ,"is multiple of 5");

// }

// else{
// 	console.log(num,"is not multiple of 5")
// }l

// let grades=prompt("enter number between 0 to 100");
// if(grades<=100&&grades>=80){
// 	console.log("A");
// }
// else if(grades>=70&&grades<=89){
// 	console.log("B");
// }else if(grades>=60&&grades<=69){
// 	console.log("C");
// }else if(grades>=50&&grades<=59){
// 	console.log("D");
// }
// else{
	
// 	console.log("F");
// }	
// for(let i=1;i<=10;i++){
// 	console.log(i);
// }
// let i =1;
// while(i<=10){
// 	console.log(i);
// 	i++;

// }
// let j=30;
// do{
// 	console.log("vandana tiwati");
// 	j++;
// }while(j<=20)
// for of loop
 
// let str = "Vandana tiwari";
// for(let i of str) {
// 	console.log(i);
// }
// for(let i=0;i<=100;i++){
// 	if(i%2===0){
// 		console.log("even number",i);
// 	}
// 	else("dont print");
// }

// let gamenum = 25;
// let usernum = prompt("guess the number :");
// while(usernum!=gamenum){
// 	let usernum = prompt("your guss is incorrect please guss again. ");
// }
// console.log("Congratultions, you entered the right number");

// let full_name = prompt("enter your fullname without spaces");
// let user_name = "@" + full_name + full_name.length;
// console.log(user_name);

// array
// let marks = [ 22,33,44,55,5656,77,74,46,87,95 ];
// console.log(marks);
// console.log(marks.length)

// console.log(sum);

//  let student = [85,97,37,44,60,76];
 
// let sum =0;
// for(let marks of student){
// 	console.log(marks);
// 	sum += marks;
	
// }
// console.log("sum is",sum);

//   avg = sum/student.length
//  console.log(`average marks of entire class is ${avg}`);
//  let companies = ["Bloomerg","Microsoft","Uber","Google","IBM","Netflix"];
// //  let val = companies.shift();
// console.log( "deleted",val);
// console.log(companies)
// companies.splice(2,1,"Ola")
// console.log(companies);
// companies.push("Amazon")
// console.log(companies);



// practice question leature 5
// function countvowel(str){
// 	// str = "VANDANA";
// 	let count = 0;
// 	for(const char of str){
// 		if(char === "A" || char === "E" || char ==="O" || char ==="I"|| char ==="U" ){
// count++;}
		 
// 	}

// console.log(count);
// }
// const vowelcount = (str) => {
// 	let count = 0;
//  	for(const char of str){
//  		if(char === "A" || char === "E" || char ==="O" || char ==="I"|| char ==="U" ){
//  count++;}
		 
//  	}
//  	return count;
// }
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from apna collage student";
// let div = document.querySelectorAll(".box");
// console.dir(div);
// div[0].innerText = "New unique value one";
// div[1].innerText = "New unique value two";
// div[2].innerText = "New unique value three";
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";

// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
 
//  document.querySelector("body").prepend(newbtn);
// let a = "vandana"
// let b = 1
// console.log(a + b)
// console.log(typeof(a))
// let dish = {
// Athleisure:	"a fashion trend characterised by athletic clothing that is both comfortable and aesthetically appealing",
// Awedde:	"overcome with anger, madness, or distress",
// Blert:	"a fool",
// Chillax	:"calm down and relax",
// }
// console.log(dish.Blert)

// let num = prompt("what is the age?")
// if(age>10 && age<20)
// {
// 	console.log("Your age is between 10 and 20")
// }
// else{
// 	console.log("Your age doesn't lies between 10 and 20")
// }
// let 
// switch(age){
// case 10-20:
// 	console.log("Your age is between 10 to 20 ")
// 	break;
// // case '20':
// // 	console.log("your age is 20")
// // 	break;
// default : 
// 	console.log("your age is not special")


// }   
// if(num%2==0){
// 	console.log("your number is divisible by 2")
// }
// else if(num%3==0) {
// 	console.log("your number is divisible by 3")
// }

// else{
// 	console.log("your number is not divisible by 2 and 3")

// }
// let age = 18
// let a = age>18 ? "You can drive " : "You can't drive" ;
// console.log(a)
// let marks = {
// 	harry:98,
// 	ronak:70,
// 	aakash:57
// }
// for(let i=0;i<Object.keys(marks).length;i++){
// 	console.log(" The marks of " + Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
// }
// for (let keys in marks){
// 	console.log("marks of " + keys + " are " + marks[keys])
// }

// let correctnum = 23;
// let num = prompt("Enter a number");

// while (parseInt(num) !== correctnum) {
//     if (parseInt(num) > correctnum) {
//         num = prompt("Number is greater than the correct number. Try again:");
//     } else {
//         num = prompt("Number is less than the correct number. Try again:");
//     }
// // }

// console.log("You have entered the correct number:", num);
// let str = "VANDANA"
// let str2 = str.toLowerCase()
// console.log(str2)
// let array = [1,2,3]
// let a;
// do
// {
// 	a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     array.push(a)
// }while(a != 0)
// console.log(array)
// let n = array.reduce((x1,x2) =>{
// 	return(x1*x2)
// })
// console.log(n)
// document.getElementsByTagName("Nav")[0].firstElementChild.style.color = "red"
// document.getElementsByTagName("Nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("Nav")[0].lastElementChild.style.color = "green"

// Array.from(document.getElementsByTagName("li")).forEach((element) => {
// 	element.style.background = "red"
// })