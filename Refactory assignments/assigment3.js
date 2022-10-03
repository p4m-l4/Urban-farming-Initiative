console.log("*******************Class 1********************");
function person(name,gender,age,height,education) {
    this.personName = name;
    this.personGender = gender ;
    this.personAge = age ;
    this.ppersonHeight = heigh ;
    this.personEducation = education ;
}

let person_1 = new person('Betty', 'F', '24', '160cm', 'Bachelors'); 
let person_2 = new person('Marvin','M','27','190cm','Masters'); 
let person_3 = new person('Henry', 'M','19','185cm','UACE');

console.log(person_1);
console.log(person_2);
console.log(person_3);

// 2
console.log("*******************Class 2********************");
function movie (name,releaseYear,genre,rating,language) {

    this.movieName = name;
    this.movieReleaseyear = releaseYear;
    this.movieGenre = genre;
    this.movieRating = rating;
    this.movieLanguage = language;

}

let movie_1 = new movie ('Peaky blinders', 2019 ,'Suspense','9/10','English');
let movie_2 = new movie ('Who killed Captain Alex', 2015 ,'Action/Comedy','10/10','Luganda');
let movie_3 = new movie ('Top gun', 2022 ,'Action','8/10','English');

console.log(movie_1);
console.log(movie_2);
console.log(movie_3);

// 3
console.log("*******************Class 3********************");
class books{
    constructor(name,author,year,rating,genre){
        this.bookName = name;
        this.bookAuthor = author;
        this.bookYear = year;
        this.bookRating = rating;
        this.bookGenre = genre;
    }
}

let book_1 = new books ('harry porter','Dennis', 2010,'9.5/10','Fiction');
let book_2 = new books ('Data Structure & Algos','Martha K', 2021,'10/10','Education');
let book_3 = new books ('Java','Elizabeth', 2022,'10/10','Education');
let book_4 = new books ('Kintu','Joan', 2015,'10/10','fiction');


console.log(book_1);
console.log(book_2);
console.log(book_3);
console.log(book_4);


// 4
console.log("*******************Class 4********************");
class cars{
    constructor(brand,model,year,type,drive) {
        this.carBrand = brand;
        this.carModel = model;
        this.carYear = year;
        this.carType = type;
        this.carDrive = drive;
    }

} 

let car_1 = new cars('Range Rover', 'Sport-SUV' , 2022, 'SUV', 'Auto');
let car_2 = new cars('Toyota', 'Wish' , 2003, 'Sedan', 'Manual');
let car_3 = new cars('Tesla', 'Model-X' , 2021, 'Sedan', 'Auto');


console.log(car_1);
console.log(car_2);
console.log(car_3);







