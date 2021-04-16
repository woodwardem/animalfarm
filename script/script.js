console.log('hello world');


// create a template for an animal 
// is that four differant templates? 
// create a single constructor - 
//parameters for constructor- animal name- dog, cat, sheep, or horse
//property - animalName
//method to render itself on the screen render()


function Animal (animalName) {
    this.animalName = animalName;
}


Animal.prototype.render() = function() {
    console.log("this function has been called")
}

//when user clicks on the cat button, I want a cat to be created- under the cat button