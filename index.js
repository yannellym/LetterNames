
// This detects when a button is being pressed

let numberOfDrumButtons = document.querySelectorAll(".drum").length; //gets the length of all drum properties

for (let i=0; i< numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //listens for an event, this is a click 

  function handleClick () {
    

    let buttonInnerHTML = this.innerHTML;     //this to reference the key that is being pressed then it sends it to make a sound function
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  }
}



// This detects a key being pressed


addEventListener("keydown", function(event) {

makeSound(event.key);
buttonAnimation(event.key);

} );



// This is the function that will switch between letters and play the corresponding sound

function makeSound(key) {


    switch (key) {               //switches depending on key clicked
        case "w": 
        let tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
            break;
         
         case "a":
             let tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
             break;
         
         case "s": 
             let tom3 = new Audio("sounds/tom-3.mp3");
                   tom3.play();
                 break;
         
         case "d" :
              let tom4 = new Audio("sounds/tom-4.mp3");
                   tom4.play();
                 break;
 
         case "j" :
             let snare = new Audio("sounds/snare.mp3");
                   snare.play();
                 break;
 
         case "k":
             let crash = new Audio("sounds/crash.mp3");
                   crash.play();
                 break;
         
         case "l" :
                 let kick = new Audio("sounds/kick-bass.mp3");
                   kick.play();
                 break;
        default: console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." +currentKey);
  activeButton.classList.add("pressed"); 
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);
}
  
