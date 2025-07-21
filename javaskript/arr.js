const students = [
  { name: "vandana", age: 19, marks: 450 },
  { name: "priyal", age: 20, marks: 470 },
  { name: "priyanshi", age: 21, marks: 490 },
  { name: "Nishika", age: 21, marks: 470 }
];


students.sort((a, b) => b.marks - a.marks);

let rank = 1;
for (let i = 0; i < students.length; i++) {
  if (i > 0 && students[i].marks === students[i - 1].marks) {
    // Agar current student ke marks same hain previous student se
    students[i].rank = students[i - 1].rank;
  } else {

    students[i].rank = rank;
  }
  rank++;
}

return{...student,rank};
