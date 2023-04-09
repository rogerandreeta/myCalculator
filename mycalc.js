console.log(
    "MyCalculator - Made by Roger Andreeta"
); 

document.getElementById("answer").readOnly = true; //set this attribute in Html file

let screen = document.getElementById("answer");

buttons = document.querySelectorAll("button");

let screenValue = "";
let memory = "";


for (button of buttons) {
    button.addEventListener("click", (e) => {
        var btnValue = e.target.innerText;
        
        function strictResult(screeValue) {
            let result = memory + screenValue;
            // return Function(`"use strict";return(${result})`)();
            return Function(`return(${result})`)();
        }

        function Calculating() {
        let result = strictResult(screenValue);
        screen.value = Math.round(result * 100) / 100;
        memory = result;
        screenValue = "" ;
      
      }
        if (btnValue == "÷") {
            btnValue = "/";
            screenValue += btnValue;
            screen.value = screenValue;
        }else if (btnValue == "X") {
            btnValue = "*";
            screenValue += btnValue;
            screen.value = screenValue;
        }else if (btnValue == "C") {
            screenValue = "";
            screen.value = screenValue;
            memory ="";
        } else if (btnValue == "=") {
            Calculating();
        } 
        else {
            screenValue += btnValue;
            screen.value = screenValue;
        }
    }
    );
}



