  // let randomNumber = Math.floor(Math.random() * 99) + 1;
  //       let guessNumber;
  //       let count = 0;

  //       while (true) {
  //           guessNumber = parseInt(prompt("Guess the number between 1 to 99:"));
  //           count++;

  //           if (guessNumber === randomNumber) {
  //               alert("Congratulations! You guessed the right number in " + count + " attempt(s).");
  //               break;
  //           } else if (guessNumber < randomNumber) {
  //               alert("Too low! Try a greater number.");
  //           } else if (guessNumber > randomNumber) {
  //               alert(" Too high! Try a smaller number.");
  //           } else {
  //               alert(" Please enter a valid number.");
  //           }
 



//       *
//     * *
//   * * *
// * * * *  
let n=5;
for(let i=1;i<=n;i++){
	let str = "";
	for(let j=1;j<=(n-i);j++){
		str += " ";
	}
	for(let k=1;k<=i;k++){
		str += "*";
	}
	console.log(str);
	}
	
