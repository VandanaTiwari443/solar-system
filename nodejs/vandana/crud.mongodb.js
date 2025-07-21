use("crudDb");
db.createCollection("courses");
db.courses.insertOne({
  name: "vandana web dev free courses",
  price: 0,
  assignments: 12,
  projects: 45,
});
let a = db.courses.find({ price: 0 });
console.log(a.count());
db.courses.deleteOne({ price: 100 });
