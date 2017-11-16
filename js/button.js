var changeBg = document.querySelector('#change-bg');
var colors = ['pink', 'green', 'blue', 'purple', 'red'];
var clicks = 0;

//if the user eventually clicks on the button

//addEventListener is a method. On this element, wait for this click event. When that click event happens,
changeBg.addEventListener('click', function(){

  //when you use CSS properties that have hyphens, it translates to camel case
  changeBg.style.backgroundColor = colors[clicks];
  clicks++;

  if (clicks === colors.length) {
    clicks = 0;
  }

});

//Alternative you couldve created a named function:

// function changeBtnColor(){
//   changeBg.style.backgroundColor = colors[clicks];
//   clicks++;
//
//   if (clicks === colors.length) {
//     clicks = 0;
//   }
//
// }
// changeBg.addEventListener('click', changeBtnColor);
