# CS260 Notes

## **Github Commands:**
*Git Add* - stages the changes (modifications) so that they can be included in the next commit. *syntax* - git add myfile.txt

*Git Commit* - Save the changes to the local repository with a message. *syntax* - git commit -m "Added myfile.txt"

*Git Commit Add and Commit* - Shortcut that combines two steps: adding changes and committing them in one go. *syntax* - git commit -am "update(notes) thoughts about startup applications"
    It won’t stage new, untracked files. For those, you need to manually run git add first.

*Git Push* - Sends changes to GitHub where you can track it on their servers. *syntax* - git push

*Git Status* - shows the current state of your working directory and staging area. It helps you see which changes have been staged for commit, which files have been modified but not yet staged, and which files are untracked (not being tracked by Git).

*Git Fetch* - command downloads updates from a remote repository but does not merge them into your local branch. It’s used to see what changes have been made in the remote repository without affecting your current working directory.

*Git Merge* - used to combine changes from one branch into your current branch. It takes the changes made in another branch and integrates them into the branch you're currently working on. After merging, both branches would contain the same code. *syntax* - git merge <branch_name>

*Git Pull* - used to fetch and merge changes from a remote repository into your current local branch in one step. It brings your local branch up-to-date with the latest changes from the remote repository. If there are any conflicts during the merge, Git will ask you to resolve them before completing the pull.


## Using Ubuntu

*SSH* - Use the ssh console program to shell into your production environment server. *Syntax:* ssh -i Desktop/mcqueen.pem ubuntu@poetryportfolios.click

*CaddyFile* - configuration file for the Caddy web server. *Commands:* :wq (w saves, q quits) *Restarting Caddy* - Restart Caddy so that your changes take effect. Note that this requires you to use sudo (super user do) to elevate your user to have the rights to restart the gateway. *syntax* - sudo service caddy restart

## HTML Notes

Make sure to have something that will load quickly be the first thing on the website. 

*Links:* Absolute and relative links. <a 'href="https://poetryportfolios.click/profiles">' 

## Midterm Notes

**#title vs .grid:** The # selector targets an element with a specific ID, while the .grid (.) selector targets elements with a specific class. 
Code examples: 
```html
<h1 id="title">Welcome</h1>
#title {color: blue;}
<div class="grid">Content 1</div>
<div class="grid">Content 2</div>
.grid {display: grid;}
```

The `#` selector targets an element with a specific ID, while the `.grid` (`.`) selector targets elements with a specific class.

**Code examples:**

```html
<h1 id="title">Welcome</h1>

#title {
  color: blue;
}

<div class="grid">Content 1</div>
<div class="grid">Content 2</div>

.grid {
  display: grid;
}
```
**Padding vs Margin:**
Padding is space inside the element between the content and the border, and margin is space outside the element, between the border and surrounding elements. 

**Flex rules:**
*1) Flex Direction*
[]row: horizontal (default)
[]row-reverse: horizontal but reversed
[]column: vertical
[]column-reverse: vertical but reversed

*2) Justify Content*
[]flex-start: align items to start
[]flex-end: align items to end
[]center: align items to center
[]space-between: evenly distribute items with space between
[]space-around: space around items including edges

**Arrow Syntax Declaration:**
*Characteristics* - if the function body is a single expression, omit curly braces and return keyword - the result is automatically returned. 

```javascript
const square = x => x * x;
console.log(square(5));  // Output: 25
```
*multiple parameters*
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5
```
*multiple statements*
When there are multiple statements, you must use {} and explicitly return a value
```javascript
const sum = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum(2, 3));  // Output: 5
```
**Javascript map**
map() is an array method that creates a new array by applying a function to each element of an existing array. Returns a new array containing the results; original array remains unchanged. 
```javascript
const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);
```
*callback* is a function called for every element of the array. Takes three arguments:
[1] currentValue: current element being processed
[2] index (optional): index of current element
[3] array (optional): the array map was called on
*thisArg* (optional): Value to use as 'this' when executing callback

```javascript
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]
```
Using index
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const fruitLengths = fruits.map((fruit, index) => `${fruit} is at index ${index}`);
console.log(fruitLengths);
// Output: ["apple is at index 0", "banana is at index 1", "cherry is at index 2"]
```
Mapping objects
```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob']
```
**Document Object Model (DOM)**  
DOM is a crucial concept for web development, enabling dynamic interactions and content manipulation in web pages.  
Different types of nodes in the DOM include:
1. `<div>, <h1>, <p>` represent HTML elements
2. Text nodes represent text content within elements
3. Attribute nodes represent attributes of elements 

*Dynamic Interaction*
- Change the content of elements.
- Modify styles (CSS) of elements.
- Create and remove elements.
- Respond to user events (like clicks, keyboard input, etc.).

*APIs*
The DOM provides a set of APIs that allow developers to access and manipulate the nodes in the document. Some common methods and properties include:
```javascript
document.getElementById()
```
Selects an element by its ID.
```javascript
document.querySelector()
```
Selects the first matching element based on a CSS selector.

```javascript
element.innerHTML
```
Gets or sets the HTML content inside an element.
```javascript
element.style
```
Gets or sets the inline styles of an element.
```javascript
element.appendChild()
```
Adds a new child node to an element.

Example of DOM Manipulation:
```javascript
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <h1 id="myTitle">Hello, World!</h1>
    <button id="changeText">Change Text</button>

    <script>
        const button = document.getElementById('changeText');
        button.addEventListener('click', () => {
            const title = document.getElementById('myTitle');
            title.textContent = 'Text Changed!';
        });
    </script>
</body>
</html>
```
In this example, when the button is clicked, an event listener changes the text of the `<h1>` element.
The DOM is updated in real-time, reflecting the changes made by the JavaScript code.

By default, the HTML `<span>` element has a CSS display property value of inline.

*Inline Element:* This means that the `<span>` element does not start on a new line and only takes up as much width as necessary. It allows other elements to sit next to it on the same line.
*Use Case:* The `<span>` element is typically used for styling small portions of text or for grouping inline elements without affecting the layout of the surrounding content.

**Changing `<div>` elements to background color red:**
```css
div {
    background-color: red;
}
```

**Display image with hyperlink in html**
To display an image with a hyperlink in HTML, you can use the `<a>` (anchor) element to wrap the `<img>` (image) element. This way, when the image is clicked, it will act as a link to the specified URL.

```html
<a href="URL">
    <img src="image_source" alt="description of image">
</a>
```

**CSS box model ordering of box layers starting at inside working out**
1. Content (innermost where the actual content is displayed)
2. Padding (creates space between content and border)
3. Border (surrounds the padding)
4. Margin (outermost layer, creates space between border and adjacent elements/edge of containing element)

**Select element with ID "byu" and change its text color to green**
1. use `document.getElementById()`
2. set `style.color` to change text color
Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text Color Example</title>
    <style>
        #byu {
            font-size: 24px; /* Just to make it more visible */
        }
    </style>
</head>
<body>
    <p id="byu">This text will change color to green.</p>
    <button id="changeColorButton">Change Color</button>

    <script>
        // Function to change text color to green
        function changeTextColor() {
            const byuElement = document.getElementById('byu');
            byuElement.style.color = 'green'; // Change text color to green
        }

        // Add event listener to the button
        document.getElementById('changeColorButton').addEventListener('click', changeTextColor);
    </script>
</body>
</html>
```
**HTML tags**
| Type of Tag      | Actual Tag      |
|------------------|------------------|
| Paragraph        | `<p>`            |
| Heading 1        | `<h1>`           |
| Heading 2        | `<h2>`           |
| Unordered List   | `<ul>`           |
| Ordered List     | `<ol>`           |
| List Item        | `<li>`           |
| Table            | `<table>`        |
| Table Row        | `<tr>`           |
| Table Header     | `<th>`           |
| Table Data       | `<td>`           |
| Link             | `<a>`            |
| Image            | `<img>`          |

**Declaring document type as HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
```
## JavaScript Syntax
**If statement**
```javascript
if (condition) {
    // code to be executed if the condition is true
}
```
example:
```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
```
**Else**
```javascript
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```
**Else if**
```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}
```
**For loop**
```javascript
for (initialization; condition; increment) {
    // code to be executed in each iteration
}
```
**While loop**
```javascript
while (condition) {
    // code to be executed as long as the condition is true
}
```
**Switch statement**
Evaluates an expression and executes corresponding code based on matching cases.
```javascript
switch (expression) {
    case value1:
        // code to be executed if expression matches value1
        break;
    case value2:
        // code to be executed if expression matches value2
        break;
    default:
        // code to be executed if none of the cases match
}
```
Example
```javascript
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("You chose a banana.");
        break;
    case "apple":
        console.log("You chose an apple.");
        break;
    default:
        console.log("Unknown fruit.");
}
```
**Creating objects in JavaScript**
1. Object literal syntax
```javascript
const person = {
    name: "John",
    age: 30,
    isStudent: false
};
```
2. Using the `new Object()` constructor
```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.isStudent = false;
```
3. Using a constructor function
```javascript
function Person(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
}
const john = new Person("John", 30, false);
```
4. Using class syntax(ES6)
```javascript
class Person {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

const john = new Person("John", 30, false);
```
5. Using `Object.create()`
```javascript
const personPrototype = {
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

const john = Object.create(personPrototype);
john.name = "John";
john.age = 30;
john.isStudent = false;
```
**Adding properties to objects**
- Dot Notation: Use `objectName.propertyName` to add a new property.
- Bracket Notation: Use `objectName["propertyName"]` to add a property, especially useful for dynamic names.
- `Object.assign()`: A method to add multiple properties from another object.

**Changing 'animal' to 'crow' in HTML**
1. Selecting the Element:
`document.getElementById("animal")` selects the `<span>` element with the id of "animal".
2. Updating the Text:
The textContent property is used to change the text inside that element to "crow".
```javascript
// Select the span element with the id 'animal'
const animalElement = document.getElementById("animal");

// Change the text content to 'crow'
animalElement.textContent = "crow";
```
You can also find elements like this `(element.textContent === "animal")` or you can sort through them in a for loop and find a specific index: `(spans[i].textContent === "animal")`

**JSON (JavaScript Object Notation)**
Example of a JSON object:
```json
{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
    }
}
```
Common uses: 
1. Transmitting data between clients and server in web apps.
2. Configuration files
3. Serialization
```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);
```

**Console commands**
| Console command  | what it does     |
|------------------|------------------|
| pwd              | print working dir|
| cd               | change directory |
| chmod            | change mode      |
| ls               | list directory   |
| vim              | text&code editor |
| nano             | text editor      |
| mkdir            | make directory   |
| mv               | move             |
| rm               | remove           |
| man              | manual           |
| ssh              | secure shell     |
| ps               | process status   |

*chmod:* Change mode - change the file system peermissions of files or directories. 

*mv:* move or rename files and directories. Syntax:
```bash
mv [options] source destination
```
*rmv:* remove or delete files and directories. Syntax:
```bash
rm [options] file_or_directory
```
*ssh:* protocol for securely connecting to remote servers. Encrypts data transmitted over network. 

**la parameters for ls command
1. `-l`: long listing format, gives specific information about the file.
2. `-a`: all files - includes hidden files and directories with names starting with a .

**Understanding domains**
With the domain banana.fruit.bozo.click:
1. Top-level Domain is the last part of the domain - here it is click.
2. Root domain refers to the domain name that includes the top-level and second-level. Here it is bozo.click
3. Subdomain is a part of a larger domain. subdomains: [banana.fruit subdomain of bozo.click]

**Is a web certificate necessary to use HTTPS?**
Yes, a web certificate (specifically, an SSL/TLS certificate) is necessary to use HTTPS (Hypertext Transfer Protocol Secure).

*Why?* Without a valid SSL/TLS certificate, a website cannot establish a secure connection using HTTPS.

**DNS A record**
A DNS A record (Address Record) can only point to an IP address and not to another A record. Here's a breakdown of how A records work:
- Purpose: An A record maps a domain name to its corresponding IPv4 address. This allows users to access a website using a human-readable domain name instead of an IP address.
- Format: The record consists of the domain name and the IPv4 address.
- Points to an IP Address: An A record directly maps a domain name to an IPv4 address. For instance, example.com can have an A record pointing to 192.0.2.1.

**Port 443, 80, 22**
- *Port 80:* Protocol: HTTP (Hypertext Transfer Protocol)
Description: Port 80 is used for standard web traffic. When you access a website using `http://`, your browser communicates with the server using this port.
- *Port 443:* Protocol: HTTPS (Hypertext Transfer Protocol Secure)
Description: Port 443 is used for secure web traffic. When you access a website using `https://`, your browser communicates with the server over this port, and the data is encrypted using SSL/TLS.
- Port 22: Protocol: SSH (Secure Shell)
Description: Port 22 is used for secure remote administration and file transfers over SSH. It allows secure command-line access to remote servers and is commonly used for secure logins, file transfers, and executing commands on remote systems.

**JavaScript Promises**
Creating a Promise: You can create a new promise using the Promise constructor. It takes a function (executor) as an argument, which has two parameters: resolve and reject.
```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true; // Simulating success or failure

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});
```
Using Promises: You can handle the result of a promise using ```.then()``` for fulfilled promises and ```.catch()``` for rejected promises.
```javascript
myPromise
    .then(result => {
        console.log(result); // "Operation was successful!"
    })
    .catch(error => {
        console.error(error); // This would run if the promise was rejected
    });
```

*Elements:* div (allows you to separate), span (vertical region inside of a span?), h<1-9> headers 1-9, p (paragraph), table, ol, ul (ordered and unordered list), a (anchor the text to a hyperlink), img, &, <, 

w3schools.com -- <a href="https://www.w3schools.com/html/default.asp">


