// Constructor function to create objects with variables
function Person(name, age) {
    // Validate inputs
    if (typeof name !== "string" || typeof age !== "number" || age < 0) {
        throw new Error("Invalid input: name must be a string and age must be a non-negative number.");
    }
    this.name = name;
    this.age = age;
}

// Add a print method to the prototype (shared by all Person objects)
Person.prototype.print = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};
const person1 = new Person("Abc", 25);
person1.print(); // Output: Name: Abc, Age: 25
