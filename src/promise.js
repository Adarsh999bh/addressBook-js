console.log("Start");
let operation1 = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name});
      reject(new Error("User not logged in"));
    }, 1000);
  });
}
let operation2 = (name,age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name,age});
      reject(new Error("User not logged in"));
    }, 1000);
  });
}
let operation3 = (name,age,salary) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name,age,salary});
      reject(new Error("User not logged in"));
    }, 1000);
  });
}
operation1("Adithya")
.then(op1 => operation2(op1.name,"22"))
.then(op2 => operation3(op2.name,op2.age,"500000"))
.then(op3 => console.log({
    Name:op3.name,
    Age:op3.age,
    Salary:op3.salary
}));


console.log("End");
