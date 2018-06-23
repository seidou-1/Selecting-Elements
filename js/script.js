//document.querySelector will return a single element that is the first in matching the criteria within the ().
//querySelector is a method within the document object
//This is saying find me the id with the element header

//Original way of doing it:
//document.querySelector('#header').textContent = " <h1> Hello World </h1>";

//the querySelector is like CMD F to find something else
//querySelector is a method
//textContent is a property that allows you to chenge the text content that is inside the element to something else

//this is getting elements with the class .p-styles and it's then goign to change its content to "Bahuh?". But it's only going to grab the first one
//document.querySelector('.p-styles').textContent= "Bahuh?"


var header = document.querySelector('#header');
header.textContent = "Hello World";

//we're storing the results as a variable so we can then do somethign with it
var pStyles = document.querySelectorAll ('.p-styles');
console.log(pStyles);

//.length tells you how many elements are contained in that array
for (var i = 0; i < pStyles.length; i++) {
  pStyles[i].textContent = "I'm p-Styles " + (i + 1);
}

//*********************************************************************************************************
//Same exercise with the LIs though. Get all the list items and have them numbered. So it'll be .1, .2, .3
var lStyles = document.querySelectorAll ('li');
//console.log(lStyles);
for (var i = 0; i < lStyles.length; i++) {
  lStyles[i].textContent = "I'm List " + (i+1);
}

//***************************Long way of doing the above - select an element by it's ID****************************

//Another way to select an element by it's ID is document.getElementByID

document.getElementById('second-header').textContent = "Something";

var awesomes = document.getElementsByClassName('awesome');
console.log(awesomes);

for (var i = 0; i < awesomes.length; i++) {
  awesomes[i].textContent = i +1;
}

//***************************Longer way of doing the above - select an element by it's tag****************************

var h3s = document.getElementsByTagName('h3');

for (var i = 0; i < h3s.length; i++) {
  h3s[i].textContent = "JavaScript is awesome " + (i +1);
}
