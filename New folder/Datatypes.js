/* A computer needs to know the kind of data that it is dealing with so that it can prepare enough space since memory is limited
data types defines the grouping of data to be stored in memory eg in C int c = 10 (int here refers to an integer data type. 
JS does not declare data types but determines the datatype based on the value assigned)

Examples of data types*/

let fname = "Pamela";
let myAge = 16;
let trial = 16.5;

console.log(typeof(fname));
console.log(typeof(myAge));
console.log(typeof(trial));

console.log(fname/ myAge); // NaN error means Not a Number
//Numbers that contain more than 53 characters in length are called big int numbers. Big int cannot be added to number data type

const dataChecked = true
console.log(typeof(dataChecked));
var name;
console.log(typeof(name));
//any variable nt defined but used is returned as undefined

let notEmpty = null;
console.log(typeof(notEmpty)); //data type: 'object' one of the variables is null

//big five data types number, string, boolean, undefined, object, NaN