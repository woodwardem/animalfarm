function Animal(animalName) {
    this.animalName = animalName;
}
//this function is like the constructor function for the animals that we will create. It is just the overall template for the objects that will be made. 


Animal.prototype.render = function() { //this render function is like the template for all animals to be put on the page. When it is called the animals information will be printed onto the website. 

let animalDiv = document.createElement('div');
animalDiv.className = `${this.animalName}Object`;
animalDiv.textContent = this.animalName;

let animalSection = document.querySelector(`#${this.animalName}Section`);

animalSection.appendChild(animalDiv);
}
//this function is the render function. It contains evrything that will be rendered onto the webpage. This function is responsible for 
//printing everything on the screen. 

let makeCatButton = document.getElementById('makeCat');
makeCatButton.addEventListener('click', respond)
    
function respond() { {

let cat = new Animal('cat')
cat.render(); //this render is specific to the cat, this is saying the cat will be rendered on the screen. 
}

//This function is the function that tells the computer what to print (which animal and its information ) onto the screen when the button is clicked. 




}
let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener ('click',goMakeDog)

function goMakeDog() {
    let dog = new Animal('dog');
    dog.render();// The dog will be rendered on the screen. (when the button is pushed)
}// the most specific declarations to the render is that the the animals will only be rendered on the page when that button is clicked. 
//All the last 4 functions are responsible for printing the correct animal on the screen when that button is clicked. These functions are only invoked when 
//the button(s) are clicked. 
let makeHorseButton = document.getElementById('makeHorse');// this conencts the button for horse to the id in the html. 
makeHorseButton.addEventListener ('click',goMakeHorse)//tells the computer what to do when the makeHorse button is clicked. 

function goMakeHorse() {
    let horse = new Animal('horse');//creating a new animal. this is possible because of the constructir function and its template. 
    horse.render();// The horse will be rendered on the screen when the button is pushed. 
}
let makeSheepButton = document.getElementById('makeSheep');
makeSheepButton.addEventListener ('click',goMakeSheep)

function goMakeSheep() {
    let sheep= new Animal('sheep');
    sheep.render();// The sheep will be rendered on the screen when the button is pushed. 
}
