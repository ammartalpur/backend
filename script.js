// const person = {
//   name: "Ammar Talpur",
//   age: 22,
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   }
// }


// console.log(person.greet())

// let colors = ["red", "green", "blue"]

// for (let color of colors) {
//   console.log(color)
// }


let student = {
  name: "ammar",
  age: 20
}

for (let key in student) {
  console.log("Key: " + key);
  console.log(student[key])
  console.log("--------------");
}