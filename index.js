
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
let itteration = false;
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let x = document.getElementById("x");
let divide = document.getElementById("divide");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let z = 0;
let deleted;
let negative = document.getElementById("negative");


zero.addEventListener("click", (e) => {
    if(text == undefined){
        text = "0"
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
    else{
        text = text + "0";
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
    
    
});



one.addEventListener("click", (e) => {


    if(text == undefined){
        text = "1"
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
    else{
        text = text + "1";
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
     
});

two.addEventListener("click", (e) => {
    if(text == undefined){
        text = "2"
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
    else{
        text = text + "2";
        ScreenText.innerText = text;
        z++;
         itteration = true;
    }
    
    
});


three.addEventListener("click", (e) => {
    if(text == undefined){
        text = "3"
        ScreenText.innerText = text;
z++;
         itteration = true;
         
    }
    // dleetd = true
    else{
        text = text + "3";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }

    
    
    
});

four.addEventListener("click", (e) => {
    if(text == undefined){
        text = "4"
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "4";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    
    
});

five.addEventListener("click", (e) => {
    if(text == undefined){
        text = "5"
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "5";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    
    
});

six.addEventListener("click", (e) => {
    if(text == undefined){
        text = "6"
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "6";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    
    
});

seven.addEventListener("click", (e) => {
    if(text == undefined){
        text = "7"
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "7";
        ScreenText.innerText = text;
z++;
         itteration = true;
        
    }
    
    
});

eight.addEventListener("click", (e) => {
    if(text == undefined){
        text = "8"
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "8";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    

    
});

nine.addEventListener("click", (e) => {
    if(text == undefined){
        text = "9";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + "9";
        ScreenText.innerText = text;
z++;

         itteration = true;
    }
    
    
});


dec.addEventListener("click", (e) => {
    if(text == undefined){
        text = ".";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    else{
        text = text + ".";
        ScreenText.innerText = text;
z++;
         itteration = true;
    }
    
});

add.addEventListener("click", (e) => {
    if(text == undefined){
        text = " + ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    else{
        text = text + " + ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    
});

sub.addEventListener("click", (e) => {
    if(text == undefined){
        text = " - ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    else{
        text = text + " - ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    
});

x.addEventListener("click", (e) => {
    if(text == undefined){
        text = " x ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    else{
        text = text + " x ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;

        
    }
    
});

divide.addEventListener("click", (e) => {
    if(text == undefined){
        text = " / ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    else{
        text = text + " / ";
        ScreenText.innerText = text;
        z++;
        z++;
        z++;
        
    }
    
});

negative.addEventListener("click", (e) => {
    if(text == undefined){
        text = "-";
        ScreenText.innerText = text;
        z++;
        
    }
    else{
        text = text + "-";
        ScreenText.innerText = text;
        z++;
    }
    
});

ac.addEventListener("click", (e) => {
    text = undefined;
    deleted = true;
    ScreenText.innerText = 0;


    
});

del.addEventListener("click", (e) => {
    
    let remove = text.split("");
    z--;
    
    if(remove[z] == " "){
        remove.pop();
        remove.pop();
        remove.pop();
        
        z--;
        z--;
        
        console.log(z)
    }
    else{
        
        console.log(z)
        remove.pop();
    }

    
    console.log(remove)
    

    text = remove.toString();
    text = text.replaceAll(',', '');
    ScreenText.innerText = text;

    console.log(text)
    if(text == ""){
        text = undefined;
        deleted = true;
        ScreenText.innerText = 0;

    }
   


    
});

/*  ABOVE IS all math and screen variables needed to display button clicks ---------------------------------*/




/*  BELOW IS all math being calculated so the calculator actually works ---------------------------------*/


let eq = document.getElementById("eq")
let mathEq;
let Finaleq;
let symbol;
let detectorSymbol;



eq.addEventListener("click", (e) => {
    let test = text.split(" ")
    for(i = 0; i < test.length; i++){



        
        console.log(test)
        switch(test[i]){
            case "+":
                symbol = "+";
                detectorSymbol = true;
                break;
            case "-":
                symbol = "-";
                detectorSymbol = true;
                break;
            // case "-":

            case "x":
                symbol = "x";
                detectorSymbol = true;
                break;
            case "/":
                symbol = "/";
                detectorSymbol = true;
                break;
            case " ":
                detectorSymbol = true;
                break;
            default:
                mathEq = test[i];
                mathEq = parseFloat(mathEq, "10");
                console.log(mathEq);
                
                break;
        }


        if(i == 0){
            
            Finaleq = mathEq;
            console.log(Finaleq);
            
        }
        else if(detectorSymbol == false){
            switch (symbol){
                case "+":
                    
                    Finaleq = Finaleq + mathEq;
                    console.log(Finaleq);
                    break;
                case "-":
                    Finaleq = Finaleq - mathEq;
                    console.log(Finaleq);
                    break;
                case "x":
                    Finaleq = Finaleq * mathEq;
                    console.log(Finaleq);
                    break;
                case "/":
                    Finaleq = Finaleq / mathEq;
                    console.log(Finaleq);
                    break;
            }
        }
        else{
            detectorSymbol = false;
            
        }
        



       
        

        
       
    }
    if(isNaN(Finaleq) == true){
        console.log("worj");
        ScreenText.innerText = "Error";
        text = 0;
        deleted = true;
    }
    else{
        
        ScreenText.innerText = Finaleq;
        text = Finaleq;
    }
    
    
});