const paragraph = document.createElement("p")

//Creating content in the existing HTML document using JS. innerHTML didn't work 
//because it had nowhere to go. Specify where the content goes eg body or ul
paragraph.textContent = "A brand new paragraph"
paragraph.innerHTML = "I am a paragraph with <strong>bold text</strong>."

console.log(paragraph)

const toDoList = document.querySelector("ul");
const newToDo = document.createElement("li");

//Adding elements in the list using JS
newToDo.textContent = "Do homework"
toDoList.appendChild(newToDo);

anotherToDo = document.createElement("li");
anotherToDo.textContent = "Pay bills"
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild);

//Replacing elements in a list
const modifyToDo = document.createElement("li")


modifyToDo.textContent = "Feed the dog"
toDoList.replaceChild(modifyToDo, toDoList.children[2])

//Removing one element
toDoList.removeChild(toDoList.lastElementChild)

