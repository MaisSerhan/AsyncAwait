/*
   1. Create a Promise
   Create a simple Promise that resolves with
   "Success" after 2 seconds, then log the message.
*/
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 2000);
});
p1.then(msg => console.log("1:", msg));


//---------------------------------------------------------------------------------------------------------


/*
    2. Handle Promise Rejection
    Reject with "Something went wrong" after 1s.
*/
const p2 = new Promise((_, reject) => {
  setTimeout(() => reject(new Error("Something went wrong")), 1000);
});
p2.catch(err => console.error("2:", err.message));


//---------------------------------------------------------------------------------------------------------

/*
   3. Chain Multiple Promises
*/
const a = () => Promise.resolve(5);
const b = (x) => Promise.resolve(x * 2);
a()
  .then(resultA => {
    console.log("3A:", resultA);
    return b(resultA);
  })
  .then(resultB => console.log("3B:", resultB));


//---------------------------------------------------------------------------------------------------------

/*
  4. Promise with finally()
*/
const p4 = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 500);
});
p4
  .then(v => console.log("4:", v))
  .finally(() => console.log("4: finally executed"));

  
//---------------------------------------------------------------------------------------------------------

/*
   5. Promise.all() to Fetch Multiple APIs
*/
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1"
];
Promise.all(urls.map(u => fetch(u).then(res => res.json())))
  .then(([post, user]) => {
    console.log("5: Post:", post);
    console.log("5: User:", user);
  })
  .catch(err => console.error("5: Error:", err));

//---------------------------------------------------------------------------------------------------------

/*
   6. Basic Async/Await Example
*/
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log("6:", data);
}
fetchUser();

//---------------------------------------------------------------------------------------------------------

/* 
   7. Async Function with Error Handling
*/
async function fetchWithFail() {
  try {
    const res = await fetch("https://invalid-url.example");
    const data = await res.json();
    console.log("7:", data);
  } catch {
    console.error("7: Fetch failed");
  }
}
fetchWithFail();


//---------------------------------------------------------------------------------------------------------

/* 
   8. Convert Callback to Async/Await
*/
function readDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve("some data"), 500);
  });
}
(async () => {
  const data = await readDataPromise();
  console.log("8:", data);
})();

//---------------------------------------------------------------------------------------------------------

/* 
   9. Parallel Async Calls with Promise.all() and await
*/
async function op1() { return new Promise(r => setTimeout(() => r("one"), 300)); }
async function op2() { return new Promise(r => setTimeout(() => r("two"), 200)); }
(async () => {
  const [res1, res2] = await Promise.all([op1(), op2()]);
  console.log("9:", res1, res2);
})();

//---------------------------------------------------------------------------------------------------------

/* 
   10. Async/Await with Error Handling (two calls)
*/
(async () => {
  try {
    const [aRes, bRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json())
    ]);
    console.log("10:", aRes, bRes);
  } catch (err) {
    console.error("10: One or more calls failed:", err.message);
  }
})();

//---------------------------------------------------------------------------------------------------------

/*
   11. Callback Example
*/
function readFromDB(callback) {
  setTimeout(() => callback(null, { id: 1, name: "Alice" }), 300);
}
readFromDB((err, data) => console.log("11:", data));

//---------------------------------------------------------------------------------------------------------

/*
   12. Nested Callbacks
*/
function fetchData(cb) {
  setTimeout(() => cb(null, { items: [1, 2, 3] }), 200);
}
function processData(data, cb) {
  setTimeout(() => cb(null, data.items.map(x => x * 2)), 200);
}
fetchData((err, data) => {
  processData(data, (err2, result) => {
    console.log("12:", result);
  });
});


//---------------------------------------------------------------------------------------------------------

/* 
   13. Callback Hell -> Refactor
*/
const aP = () => Promise.resolve(1);
const bP = v => Promise.resolve(v + 1);
const cP = v => Promise.resolve(v + 1);
(async () => {
  const aRes = await aP();
  const bRes = await bP(aRes);
  const cRes = await cP(bRes);
  console.log("13:", cRes);
})();

//---------------------------------------------------------------------------------------------------------

/*
   14. Using Callbacks with setTimeout
*/
function waitAndRun(ms, cb) {
  setTimeout(() => cb(`Waited ${ms}ms`), ms);
}
waitAndRun(500, msg => console.log("14:", msg));


//---------------------------------------------------------------------------------------------------------

/* 
   15. Handle Multiple Callbacks Sequentially
*/
function runSequential(callbacks, initialValue) {
  let value = initialValue;
  const next = (i) => {
    if (i >= callbacks.length) return;
    callbacks[i](value, (err, newVal) => {
      console.log(`15: Callback ${i} result:`, newVal);
      value = newVal;
      next(i + 1);
    });
  };
  next(0);
}
const cb1 = (val, cb) => setTimeout(() => cb(null, val + 1), 100);
const cb2 = (val, cb) => setTimeout(() => cb(null, val * 3), 100);
runSequential([cb1, cb2], 2);

//---------------------------------------------------------------------------------------------------------

/* 
   16. Create a Class and Object
*/
class Person {
  constructor(name, age) { this.name = name; this.age = age; }
}
console.log("16:", new Person("Omar", 30));


//---------------------------------------------------------------------------------------------------------

/*
   17. Class with Methods
*/
class Car {
  constructor(make, model) { this.make = make; this.model = model; }
  start() { console.log(`17: ${this.make} ${this.model} started`); }
}
new Car("Toyota", "Corolla").start();


//---------------------------------------------------------------------------------------------------------

/* 
   18. Inheritance in OOP
*/
class Animal {
  speak() { console.log("18: Some generic sound"); }
}
class Dog extends Animal {
  speak() { console.log("18: Woof!"); }
}
new Dog().speak();

//---------------------------------------------------------------------------------------------------------

/* 
   19. Encapsulation Example
*/
class BankAccount {
  #balance = 0;
  constructor(initial = 0) { this.#balance = initial; }
  deposit(amount) { this.#balance += amount; }
  withdraw(amount) { this.#balance -= amount; }
  getBalance() { return this.#balance; }
}
const acct = new BankAccount(100);
acct.deposit(50);
acct.withdraw(30);
console.log("19:", acct.getBalance());

//---------------------------------------------------------------------------------------------------------

/* 
   20. Abstraction in OOP
*/
class Shape {
  area() { throw new Error("Must implement area()"); }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r * this.r; }
}
class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}
console.log("20 Circle area:", new Circle(3).area().toFixed(2));
console.log("20 Rectangle area:", new Rectangle(4, 5).area());
