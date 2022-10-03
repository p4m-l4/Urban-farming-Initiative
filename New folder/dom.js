//Accessing the sections in the code by assigning them variables
const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const ul = document.getElementsByTagName("ul")[0];
const html = document.documentElement;

//Accessing the different sections of the code, where do the sections belong
console.log(p.parentNode);
console.log(p.parentNode.parentNode.parentNode.parentNode);
console.log(html.parentNode);

console.log(ul.childNodes)

//Changing the background color in the HTML, ordering the code
//Accessing different elements in the code using 'for', the element number eg[2] and firstElementChild
ul.firstElementChild.style.background = "yellow"

for(let element of ul.children){
    element.style.background = "gold"
}
ul.firstElementChild.style.background = "yellow"

document.body.children[3].lastElementChild.style.background = "fuchsia"

const tiger = ul.children[1]

tiger.nextElementSibling.style.background = "coral"

tiger.previousElementSibling.style.background = "aquamarine"

