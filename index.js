let name="Chandrasekar";
let age="25";
let qualification="BE";
let address="Chennai, Trichy, Erode, Coimbatore";

// Object
let person =  {

    name:"Chandrasekar",
    age:22,
    address:"Chennai, Trichy, Erode, Coimbatore",
    qualification:"BE",
    sibilings:{
        brother: false,
        sister: true,
    }
} //object
console.log(person.age);
person.age=25;




console.log(person.age);  // dot notation

console.log(person['age']); // bracket notation
console.log(person.sibilings);
console.log(person.qualification);
