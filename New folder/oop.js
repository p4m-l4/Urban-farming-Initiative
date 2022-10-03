/*Object oriented programming (OOP). 
- The concept or idea that advocates programming basd on real world objects.
Different from previous exercises (structured programming) that is towards the top down method of coding.
- Things to consider in OOP: Class, Object
- A class is a blueprint of an object. An object is an instance of a class.
However, an object an also be viewed as a class. eg human beings being the class with dad being the object. 
But dads can also be the class while the son is the object.
- The class has attributes or properties.
Use president as an object and creating many other instances of objects out of them, In which case we shall not be using the keyword class
- To identify a class, use: 'is a'

Concepts
Five Concepts are:
1-Objects & Classes
2-Abstraction
3-Inheritance
4-Polymorphism
5-Encapsulation

- Inheritance - Objects have the ability to take on 0ne or more properties and methods (attributes/ characteristics) of their super classes.
There exist super classes and sub classes 
eg class ~ vehicle / car
subclass ~ Subaru 
subclass ~ SUV 
object ~ Subaru forester UBB 123Z

- Abstraction - Within inheritance, there is abstraction ie level of representation/ hierarchy of a class. 
Use the highest level of representation for ites

- Polymorphism - objects of the class taking on different forms eg being a lecturer but with a son in the same class
- Encapsulation - the ability to group their methods or properties

You can make a class object*/

let dance = {
    style: "rhythm",
    tempo: 5,
    name: "Kalipso",
    origin: "Central",
    genre: "ethnic",
    age: 30,
}

//log() is a function that belongs to console class
console.log(dance.name);
console.log(dance.style);

let school = {
    teachers: 15,
    students: 30,
    subjects: 4,
    buildings: 3,
    name: "GreenHill",

//methods
    performance: () => {
        console.log("We always pass our students in first class");
    },
    sports: function(){
        console.log("We are the current champions of Kampala district");
    }
}

//Objects have behaviors or methods
//Methods define what an object does to itself or to others
//behaviors - are found in the methods. WHat we write in the methods refer to the individual behaviors


//static class
let animal = {
    name: "cat",
    age: 15,
    type: "domestic",
    owner: "Junior",
    cat: function (){}
}
console.log(animal.name);


//versus
//this is a key word used to identify the properties of a class
function car (name, model, chNo, seat){
    this.name = name;
    this.model = model;
    this.chNo = chNo;
    this.seat = seat;
}

let car1 = new car("Subaru", 2010,"X1112",5);
let car2 = new car("Subaru", 2010,"X1112",5);

function book(name, author, year){
    this.name = name;
    this.author = "Author";
    this.year = year;
    this.pub = "Osman"; //static

    console.log(name);

}


let fbook = new book ("outliers", "Zainab", 2020);
let book2 = new book ("Branding", "Trevor", 2000);
let book3 = new book ("Growing", "Angella", 2004);
/*book("outliers", "Zainab", 2000);
book ("Nyegenyege",John, 2000);;*/

// or Thisa = ll

console.log(book.name);

function shoe (name, color, label){
    this.name = name;
    this.color = color;
    this.label = label;
}

//instantiating an object to a class. New creates a new object
let fshoe = new shoe ("Bata", "pink", "open")
let anotherShoe = new shoe ("Gucci", "green", "green")

console.log(fshoe)
console.log(fshoe.name + " " + fshoe.color) //concatenate 

/*Variables
Initialization
Operators
Operands
What is a statement - a full instruction to a computer
Block of code
Function - group of code with a name
Static function versus dynamic function (has parameters and expects arguments on calling)
Return statement marks the end of the code execution

Javascript looks at html as an object

console.log is primarily used for debugging. 
However, within html, there isnt much that would be needed output on the concole

var country = {
    population : 12000000,
    name: "Uganda",
    size: 15000,
    climate: "Tropical",
}*/

function country(name, population, president, size, climate){
    this.name = name;
    this.population = population;
    this.president = president;
    this.size = size;
    this.climate = climate;
    this.continent = continent;
}
//the values assigned above are the parameters
// a dot is either calling a method or a class

let uganda = new country("Uganda", 43000000, "Tibuhabura", 15000, "Tropical");
let kenya = new country("Kenya", 56000000, "Ruto", 25000, "Semi-arid", "Africa");
let egypt = new country("Egypt", 72000000, "Guy", 53000, "Semi-desert");

//keyword new turns a function call into an instance or object of a class
//what you call an instance refers to the values to the class
//An example of instantiation is in the last 3 lines of our code
//the keyword new is called a constructor. A constructr is used to initialize an instantiated object

function sum() {

}
//another way to define a function
let sum = () => {

}

//the above function can be turned into an object as well

let baby = (name, weight, gender, yob) => {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.yob = yob
}

/*Assignment: Define 7 classes with atleast 5 parameters/properties using the <this> keyword 
and atleast 3 instances wusing the <new> keyword

Due tomorrow 4pm github*/