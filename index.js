
/*  BELOW IS all math and screen variables needed to display button clicks ---------------------------------*/
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let dec = document.getElementById("dec");
let ScreenText = document.getElementById("ScreenText");
let text;

let add = document.getElementById("add");






zero.addEventListener("click", (e) => {
    if(text == undefined){
        text = "0"
        ScreenText.innerText = text
    }
    else{
        text = text + "0";
        ScreenText.innerText = text
    }
    
});



one.addEventListener("click", (e) => {


    if(text == undefined){
        text = "1"
        ScreenText.innerText = text
    }
    else{
        text = text + "1";
        ScreenText.innerText = text
    }
});

two.addEventListener("click", (e) => {
    if(text == undefined){
        text = "2"
        ScreenText.innerText = text
    }
    else{
        text = text + "2";
        ScreenText.innerText = text
    }
    
});


three.addEventListener("click", (e) => {
    if(text == undefined){
        text = "3"
        ScreenText.innerText = text
    }
    else{
        text = text + "3";
        ScreenText.innerText = text
    }
    
});

four.addEventListener("click", (e) => {
    if(text == undefined){
        text = "4"
        ScreenText.innerText = text
    }
    else{
        text = text + "4";
        ScreenText.innerText = text
    }
    
});

five.addEventListener("click", (e) => {
    if(text == undefined){
        text = "5"
        ScreenText.innerText = text
    }
    else{
        text = text + "5";
        ScreenText.innerText = text
    }
    
});

six.addEventListener("click", (e) => {
    if(text == undefined){
        text = "6"
        ScreenText.innerText = text
    }
    else{
        text = text + "6";
        ScreenText.innerText = text
    }
    
});

seven.addEventListener("click", (e) => {
    if(text == undefined){
        text = "7"
        ScreenText.innerText = text
    }
    else{
        text = text + "7";
        ScreenText.innerText = text
    }
    
});

eight.addEventListener("click", (e) => {
    if(text == undefined){
        text = "8"
        ScreenText.innerText = text;
    }
    else{
        text = text + "8";
        ScreenText.innerText = text;
    }
    
});

nine.addEventListener("click", (e) => {
    if(text == undefined){
        text = "9";
        ScreenText.innerText = text;
    }
    else{
        text = text + "9";
        ScreenText.innerText = text;
    }
    
});


dec.addEventListener("click", (e) => {
    if(text == undefined){
        text = ".";
        ScreenText.innerText = text;
    }
    else{
        text = text + ".";
        ScreenText.innerText = text;
    }
    
});

add.addEventListener("click", (e) => {
    if(text == undefined){
        text = " + ";
        ScreenText.innerText = text;
    }
    else{
        text = text + " + ";
        ScreenText.innerText = text;
    }
    
});
/*  ABOVE IS all math and screen variables needed to display button clicks ---------------------------------*/




/*  BELOW IS all math being calculated so the calculator actually works ---------------------------------*/


let eq = document.getElementById("eq")
let mathEq;

eq.addEventListener("click", (e) => {

    for(i = 0; i < text.length; i++){

        if(text[i] == "+" || text[i] == "-" || text[i] == "*" || text[i] == "/"){
            console.log("found");
        }
        else if(text[i] == " "){
            console.log("space");
        }
        else{
            mathEq = text[i];
            mathEq = parseInt(mathEq, "10");
            console.log(mathEq);
        }

        switch(text[i]){
            case "+":
            case "-":
        }
        switch (arithmeic) {
            case "addition":
                
                FinalAnswer = first + second;
                document.write(FinalAnswer);
                break;
            case "+":
                FinalAnswer = first + second;
                document.write(FinalAnswer);
                break;
            case "-":
                FinalAnswer = first - second;
                document.write(FinalAnswer);
                break;
            case "x":   
                FinalAnswer = first * second;
                document.write(FinalAnswer);
                break;
            case "/":   
                FinalAnswer = first / second;
                document.write(FinalAnswer);
                break;
            case "subtraction":
                FinalAnswer = first - second;
                document.write(FinalAnswer);
                break;
        
            case "multiplication":
                FinalAnswer = first * second;
                document.write(FinalAnswer);
                break;
        
            case "division":
                FinalAnswer = first / second;
                document.write(FinalAnswer);
                break;
        
            default:  // all other cases
                document.write("unable to execute that")
          }
    }
    
});