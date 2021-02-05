//get all the buttons
buttons = document.querySelectorAll(".drum");
//add on clike eventListener to the buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",function () {
    playIt(this.innerHTML);
    btnAnimation(this.innerHTML);

  });

}
// add event listener to the document to perform task when user use keyboard
document.addEventListener("keydown",function (event) {
  playIt(event.key);
  btnAnimation(event.key);

});
//play correspondent audio to the letter pressed(or the button that have the same letter)
function playIt(button) {
 switch (button) {
   case "w":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
     break;
   case "a":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;
   case "s":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;
   case "d":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
   case "j":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;
   case "k":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;
   case "l":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;



   default:console.log(button);

 }
}
// add animation when button is pressed
function btnAnimation(button){
  document.querySelector("."+button).classList.add("pressed");
  setTimeout(function (){
      document.querySelector("."+button).classList.remove("pressed");
  },100);
}
