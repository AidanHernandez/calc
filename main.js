let first = prompt("First number");
let second = prompt("Second number");
let arithmeic = prompt("addition, subtraction, multiplication or division")
let FinalAnswer;

arithmeic = arithmeic.toLowerCase();

first = parseInt(first, "10");
second = parseInt(second, "10");

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
  
