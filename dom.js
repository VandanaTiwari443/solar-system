//  const changetheam = document.getElementById("change")
//  changetheam.addEventListener("click",()=>{
 	
// })
// const changeheading = document.getElementById("changeheading")

// const div=document.createElement("div");
// document.body.appendChild(div);
// changeheadingcolor.addEventListener("click",()=>{
// // div.setAttribute("id","div1");
// div.innerText="BOX";
// div.style.color="black";
//  }   

function memorize(fn){
	const cache={}
	return function(key){
		if(cache[key]){
			console.log(cache)
			return cache[key]
		}else{ 
			const data = fn(key)
			cache[key] = data
			return cache[key]
		}

	}
}

function square(number){
	console.log("calculate square of number :",number)
	return number*number
}
const memorizefun = memorize(square);
	console.log(memorizefun(4));
	console.log(memorizefun(4));
	console.log(memorizefun(5));
	console.log(memorizefun(5));
	console.log(memorizefun(6));
	console.log(memorizefun(7));
	console.log(memorizefun(6));

