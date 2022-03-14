"use strict";

var firstname = document.getElementById("first.name");
var lastname = document.getElementById("last.name");
var phone = document.getElementById("phone.number");
var button1 = document.getElementById("button1");
var fbutton = document.getElementById("first.button");



// while (1000){
// }
  

  // if(document.getElementById('first-button').clicked == true)
  // {
  //   alert("button was");
  // }

// if(firstname != null && firstname.value == '') {
//   alert("sveiki");
// }

// Sticky Header 
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


fbutton.addEventListener("click", myFunction2);
 function myFunction2()
 {
  alert("Downloaded");
}
button1.addEventListener("click", myFunction3);
 function myFunction3(){
  if( firstname.value == '' || lastname.value == '' || phone.value == '') {
      alert("Neuzpildei");
    }
 }
