var numberButtons = document.querySelectorAll(".drum").length;
// Button Click
for (var i = 0; i < numberButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    addEffects(buttonHTML);
  });
}
// Key board press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addEffects(event.key);
});

function makeSound(key){
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;
    case 'j':
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case 'k':
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
    case 'l':
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;
  }
}

function addEffects(currKey){
      var activeButton=document.querySelector("."+currKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
}
