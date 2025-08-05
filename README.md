# 20 JavaScript Code Challenges – Asynchronous Programming, Promises, Callbacks & OOP

This project contains **20 hands-on JavaScript coding challenges** that cover important topics such as:

- ⏳ Asynchronous programming with **Promises** and **async/await**
- 🔄 Working with **callbacks** and avoiding "callback hell"
- 🏛 Object-Oriented Programming (OOP) principles: **classes, inheritance, encapsulation, abstraction**
- 🌐 Fetching data from APIs and handling responses

Each challenge is implemented in a single JavaScript file (`Solution/script.js`) with **clear comments** describing the question and a **solution** directly below it.  
Console output demonstrates the result of each challenge.

---

## 📁 File: `Solution/script.js`

### 🚀 Topics & Challenges Covered:

| #  | Challenge Description                                          | Techniques Used                                   |
|----|----------------------------------------------------------------|---------------------------------------------------|
| 1  | Create a Promise                                               | `Promise`, `setTimeout`, `resolve`                |
| 2  | Handle Promise Rejection                                       | `Promise`, `reject`, `.catch()`                   |
| 3  | Chain Multiple Promises                                        | `.then()` chaining                                |
| 4  | Promise with `finally()`                                       | `.finally()` after resolve/reject                 |
| 5  | Fetch Multiple APIs with `Promise.all()`                       | `Promise.all()`, `fetch()`                         |
| 6  | Basic Async/Await Example                                      | `async/await`, `fetch()`                          |
| 7  | Async Function with Error Handling                             | `try...catch`, `fetch()`                          |
| 8  | Convert Callback Function to Async/Await                       | `Promise` wrapper, `async/await`                  |
| 9  | Parallel Async Calls with `Promise.all()` and `await`          | `Promise.all()`, async functions                  |
| 10 | Async/Await with Error Handling for Multiple Calls             | `try...catch`, `Promise.all()`                     |
| 11 | Callback Example                                               | Basic callback function                           |
| 12 | Nested Callbacks                                               | Callback nesting                                  |
| 13 | Callback Hell → Refactor with Promises/Async-Await             | `Promise`, `async/await`                          |
| 14 | Using Callbacks with `setTimeout`                              | Delay with callback                               |
| 15 | Handle Multiple Callbacks Sequentially                         | Callback sequence execution                       |
| 16 | Create a Class and Object                                      | `class`, constructor                              |
| 17 | Class with Methods                                             | Class method definition                           |
| 18 | Inheritance in OOP                                             | `extends`, method overriding                      |
| 19 | Encapsulation Example                                          | Private fields (`#`), getter/setter methods       |
| 20 | Abstraction in OOP                                             | Abstract method pattern, subclass implementation |

---

## 🔧 How to Use

1. Clone or download the repository.
2. Open a terminal in the project folder.
3. Run in Node.js:
   ```bash
    cd Solution
    node script.js

or by use console in Solution/index.html