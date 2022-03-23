/ This detects when a button is being pressed

const numOfLetters = document.querySelectorAll('.letter').length;
for (var i = 0; i < numOfLetters; i++) {
    document.querySelectorAll('.letter')[i].addEventListener("click", function () {
        var key = this.innerHTML;
        console.log(key)
        playSound(key);
        handleButtonFlashing(key)
    });
}

// Handle Keyboard Key Presses
document.addEventListener("keydown", function (event) {
    var key = event.key;
    console.log(key)
    playSound(key);
});

// This is the function that will switch between letters and play the corresponding sound

function playSound(key) {

    switch (key) {     //switches depending on key clicked
        case "a": 
          var letterA = new Audio("sounds/a.mp3");
            letterA.play();
          console.log("clicked")
            break;
        case "b":
          var letterB = new Audio("sounds/b.mp3");
            letterB.play();
            break;
        case "c":
          var letterC = new Audio("sounds/c.mp3");
          letterC.play();
            break;
        case "d": 
          let letterD = new Audio("sounds/d.mp3");
          letterD.play();
            break;
        case "e":
          let letterE = new Audio("sounds/e.mp3");
          letterE.play();
            break;
        case "f":
          let letterF = new Audio("sounds/f.mp3");
          letterF.play();
            break;
        case "g": 
          let letterG = new Audio("sounds/g.mp3");
          letterG.play();
            break;
        case "h":
          let letterH = new Audio("sounds/g.mp3");
          letterH.play();
            break;
        case "i":
          let letterI = new Audio("sounds/i.mp3");
          letterI.play();
            break;
        case "j": 
          let letterJ = new Audio("sounds/j.mp3");
          letterJ.play();
            break;
        case "k":
          let letterK = new Audio("sounds/k.mp3");
          letterK.play();
            break;
        case "l":
          let letterL = new Audio("sounds/l.mp3");
          letterL.play();
          break;
        case "m": 
          let letterM = new Audio("sounds/m.mp3");
          letterM.play();
            break;
        case "n":
          let letterN = new Audio("sounds/n.mp3");
          letterN.play();
            break;
        case "o":
          let letterO = new Audio("sounds/o.mp3");
          letterO.play();
            break;
        case "p": 
          let letterP = new Audio("sounds/p.mp3");
          letterP.play();
            break;
        case "q":
          let letterQ = new Audio("sounds/q.mp3");
          letterQ.play();
            break;
        case "r":
          let letterR = new Audio("sounds/r.mp3");
          letterR.play();
          break;
        case "s":
          let letterS = new Audio("sounds/s.mp3");
          letterS.play();
          break;
        case "t": 
          let letterT = new Audio("sounds/t.mp3");
          letterT.play();
            break;
        case "u":
          let letterU = new Audio("sounds/u.mp3");
          letterU.play();
            break;
        case "v":
          let letterV = new Audio("sounds/v.mp3");
          letterV.play();
          break;
        case "w":
          let letterW = new Audio("sounds/w.mp3");
          letterW.play();
          break;
        case "x":
          let letterX = new Audio("sounds/x.mp3");
          letterX.play();
            break;
        case "y":
          let letterY = new Audio("sounds/y.mp3");
          letterY.play();
          break;
        case "z":
          let letterZ = new Audio("sounds/z.mp3");
          letterZ.play();
          break;
        default: console.log("wrong key");
    }
    handleButtonFlashing(key);
}

function handleButtonFlashing(key){
  document.querySelector('.'+ key).classList.add('pressed')
  window.setTimeout(function (){
      document.querySelector('.'+key).classList.remove('pressed');
  },200);
}
