('use strict')

const form = document.getElementsByTagName('FORM') [0];
form.addEventListener('submit', makeNewArticle );

function makeNewArticle(event) {
event.preventDefault();
console.log('hello, button was clicked')
}