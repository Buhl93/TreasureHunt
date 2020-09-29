let firstLink = document.querySelector(".first-link");
let secondLink = document.querySelector(".second-link");
let thirdLink = document.querySelector(".third-link");
let firstPage = document.querySelector(".first-page");
let secondPage = document.querySelector(".second-page");
let thirdPage = document.querySelector(".third-page");
let textInput1 = document.querySelector(".text-input1");
let submitBtn1 = document.querySelector(".submit1");
let input1 = document.querySelector(".input1");
let output1 = document.querySelector(".output1");
let input2 = document.querySelector(".input2");
let output2 = document.querySelector(".output2");
let input3 = document.querySelector(".input3");
let output3 = document.querySelector(".output3");
let textInput2 = document.querySelector(".text-input2");
let submitBtn2 = document.querySelector(".submit2");
let wheelNumber1 = document.querySelector("#wheel-number1");
let wheelNumber2 = document.querySelector("#wheel-number2");
let wheelNumber3 = document.querySelector("#wheel-number3");
let arrowUp1 = document.querySelector(".arrow-up1");
let arrowDown1 = document.querySelector(".arrow-down1");
let arrowUp2 = document.querySelector(".arrow-up2");
let arrowDown2 = document.querySelector(".arrow-down2");
let arrowUp3 = document.querySelector(".arrow-up3");
let arrowDown3 = document.querySelector(".arrow-down3");
let home = document.querySelector(".home");
let key = document.querySelector(".key");
let dice = document.querySelector(".dice");




//Navbar
firstLink.addEventListener("click", function () {   
    if (firstPage.classList.contains("invisible") == true) {
       firstPage.classList.remove("invisible");
       firstPage.classList.add("visible");
       secondPage.classList.remove("visible");
       thirdPage.classList.remove("visible");
       if (!secondPage.classList.contains("invisibleStart")) {
            secondPage.classList.add("invisible");
       }
       if (!thirdPage.classList.contains("invisibleStart")) {
            thirdPage.classList.add("invisible");
       }

       home.classList.remove("greyedOut");
       key.classList.add("greyedOut");
       dice.classList.add("greyedOut");
   }
        
});

secondLink.addEventListener("click", function () {
    if (secondPage.classList.contains("invisible") == true || secondPage.classList.contains("invisibleStart") == true){
        secondPage.classList.remove("invisible");
        secondPage.classList.remove("invisibleStart");
        secondPage.classList.add("visible");
        firstPage.classList.add("invisible");
        firstPage.classList.remove("visible");
        thirdPage.classList.remove("visible");
        if (!thirdPage.classList.contains("invisibleStart")) {
            thirdPage.classList.add("invisible");
        }

        key.classList.remove("greyedOut");
        home.classList.add("greyedOut");
        dice.classList.add("greyedOut");
    } 
});

thirdLink.addEventListener("click", function () {
    if (thirdPage.classList.contains("invisible") == true || thirdPage.classList.contains("invisibleStart") == true) {
        thirdPage.classList.remove("invisible");
        thirdPage.classList.remove("invisibleStart");
        thirdPage.classList.add("visible");
        firstPage.classList.add("invisible");
        firstPage.classList.remove("visible");
        secondPage.classList.remove("visible");
        if (!secondPage.classList.contains("invisibleStart")) {
            secondPage.classList.add("invisible");
        }

        dice.classList.remove("greyedOut");
        key.classList.add("greyedOut");
        home.classList.add("greyedOut");
    } 
});

//Submit button 1
submitBtn1.addEventListener("click", function() {
    if (textInput1.value == "30" || textInput1.value == "tredive") {
        output1.classList.remove("invisibleStart");
        output1.classList.add("answer");
        input1.classList.add("invisible");
    } 
});

//Submit Button 2
submitBtn2.addEventListener("click", function () {
    if (textInput2.value == "en tryllenøgle" || 
        textInput2.value == "En tryllenøgle" ||
        textInput2.value == "tryllenøgle" ||
        textInput2.value == "Tryllenøgle" || 
        textInput2.value == "en skeletnøgle" ||
        textInput2.value == "En skeletnøgle" ||
        textInput2.value == "skeletnøgle" ||
        textInput2.value == "Skeletnøgle") 
        {
        output2.classList.remove("invisibleStart");
        output2.classList.add("answer");
        input2.classList.add("invisible");
    } 
});

//Number Wheels
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

arrowUp1.addEventListener("click", function() {
    if (counter1 !== 9) {
        counter1++;
        wheelNumber1.innerText = counter1;
    } else {
        counter1 = 0;
        wheelNumber1.innerText = counter1;
    }
    checkNumberWheel()
});

arrowDown1.addEventListener("click", function () {
    if (counter1 !== 0) {
        counter1--;
        wheelNumber1.innerText = counter1;
    } else {
        counter1 = 9;
        wheelNumber1.innerText = counter1;
    }
    checkNumberWheel()
});

arrowUp2.addEventListener("click", function () {
    if (counter2 !== 9) {
        counter2++;
        wheelNumber2.innerText = counter2;
    } else {
        counter2 = 0;
        wheelNumber2.innerText = counter2;
    }
    checkNumberWheel()
});

arrowDown2.addEventListener("click", function () {
    if (counter2 !== 0) {
        counter2--;
        wheelNumber2.innerText = counter2;
    } else {
        counter2 = 9;
        wheelNumber2.innerText = counter2;
    }
    checkNumberWheel()
});

arrowUp3.addEventListener("click", function () {
    if (counter3 !== 9) {
        counter3++;
        wheelNumber3.innerText = counter3;
    } else {
        counter3 = 0;
        wheelNumber3.innerText = counter3;
    }
    checkNumberWheel()
});

arrowDown3.addEventListener("click", function () {
    if (counter3 !== 0) {
        counter3--;
        wheelNumber3.innerText = counter3;
    } else {
        counter3 = 9;
        wheelNumber3.innerText = counter3;
    }
    checkNumberWheel()
});

function checkNumberWheel() {
    if (wheelNumber1.innerText == 1 && wheelNumber2.innerText == 8 && wheelNumber3.innerText == 9) {
        output3.classList.remove("invisibleStart");
        output3.classList.add("answer");
        input3.classList.add("invisible");
    }
}


