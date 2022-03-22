
// This detects when a button is being pressed

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
    playSound(key);
});

// This is the function that will switch between letters and play the corresponding sound

function playSound(key) {

    switch (key) {     //switches depending on key clicked
        case "Aa": 
          var letterA = new Audio("sounds/a.mp3");
            letterA.play();
          console.log("clicked")
            break;
        case "Bb":
          var letterB = new Audio("sounds/b.mp3");
            letterB.play();
            break;
        case "Cc":
          var letterC = new Audio("sounds/c.mp3");
          letterC.play();
            break;
        case "Dd": 
          let letterD = new Audio("sounds/d.mp3");
          letterD.play();
            break;
        case "Ee":
          let letterE = new Audio("sounds/e.mp3");
          letterE.play();
            break;
        case "Ff":
          let letterF = new Audio("sounds/f.mp3");
          letterF.play();
            break;
        case "Gg": 
          let letterG = new Audio("sounds/g.mp3");
          letterG.play();
            break;
        case "Hh":
          let letterH = new Audio("sounds/g.mp3");
          letterH.play();
            break;
        case "Ii":
          let letterI = new Audio("sounds/i.mp3");
          letterI.play();
            break;
        case "Jj": 
          let letterJ = new Audio("sounds/j.mp3");
          letterJ.play();
            break;
        case "Kk":
          let letterK = new Audio("sounds/k.mp3");
          letterK.play();
            break;
        case "Ll":
          let letterL = new Audio("sounds/l.mp3");
          letterL.play();
          break;
        case "Mm": 
          let letterM = new Audio("sounds/m.mp3");
          letterM.play();
            break;
        case "Nn":
          let letterN = new Audio("sounds/n.mp3");
          letterN.play();
            break;
        case "Oo":
          let letterO = new Audio("sounds/o.mp3");
          letterO.play();
            break;
        case "Pp": 
          let letterP = new Audio("sounds/p.mp3");
          letterP.play();
            break;
        case "Qq":
          let letterQ = new Audio("sounds/q.mp3");
          letterQ.play();
            break;
        case "Rr":
          let letterR = new Audio("sounds/r.mp3");
          letterR.play();
          break;
        case "Ss":
          let letterS = new Audio("sounds/s.mp3");
          letterS.play();
          break;
        case "Tt": 
          let letterT = new Audio("sounds/t.mp3");
          letterT.play();
            break;
        case "Uu":
          let letterU = new Audio("sounds/u.mp3");
          letterU.play();
            break;
        case "Vv":
          let letterV = new Audio("sounds/v.mp3");
          letterV.play();
          break;
        case "Ww":
          let letterW = new Audio("sounds/w.mp3");
          letterW.play();
          break;
        case "Xx":
          let letterX = new Audio("sounds/x.mp3");
          letterX.play();
            break;
        case "Yy":
          let letterY = new Audio("sounds/y.mp3");
          letterY.play();
          break;
        case "Zz":
          let letterZ = new Audio("sounds/z.mp3");
          letterZ.play();
          break;
        default: console.log("wrong key");
    }
    handleButtonFlashing(key);
}

function handleButtonFlashing(key){
  document.querySelector('.'+ key[0,1]).classList.add('pressed')
  window.setTimeout(function (){
      document.querySelector('.'+key[0,1]).classList.remove('pressed');
  },200);
}
