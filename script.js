"use strict";

var firstname = document.getElementById("first.name");
var lastname = document.getElementById("last.name");
var phone = document.getElementById("phone.number");
var firstname1 = document.getElementById("first.name1");
var lastname1 = document.getElementById("last.name2");
var phone1 = document.getElementById("phone.number3");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var fbutton = document.getElementById("first.button");




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


// Forms 
fbutton.addEventListener("click", myFunction2);
 function myFunction2()
 {
  alert("Atsiųsta");
}
button1.addEventListener("click", myFunction3);
 function myFunction3(){
  if( firstname.value == '' || lastname.value == '' || phone.value == '') {
      alert("Neužpildei");
    }else {
      alert("Ačiū!")
    }
 }


button2.addEventListener("click", myFunction4);
 function myFunction4(){
  if( firstname1.value == '' || lastname1.value == '' || phone1.value == '') {
      alert("Neužpildei");
    } else {
      alert("Ačiū!")
    }
 }


//  Swipwe

 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});