// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello World!');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });


// non-blocking file read
const fs = require('fs');
console.log("before file read.");
fs.readFile('file.txt','utf8',(err,data) =>{
	if(err) throw err;
		console.log(data);
})
console.log("After file read");