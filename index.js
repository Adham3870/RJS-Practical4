const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 19, grade: "A+" }
];

// Process each student using destructuring
students.forEach(({ name, age, grade }) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Grade: ${grade}`);
  console.log("------------------");
});
