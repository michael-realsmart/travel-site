class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hi there!, My name is " + this.name + " my favorite color is " + this.favoriteColor + ".");
  }
}

export default Person;
