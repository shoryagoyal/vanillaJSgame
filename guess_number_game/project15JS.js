var randomNumber = Math.floor(Math.random()*100);
var chances = 10;
var prevGues = "";
var submitButton = document.getElementById("submitButton");
submitButton.onclick = () => {
    console.log("submit button clicked ad random number is="+randomNumber);
    var inputNumber = document.getElementById("inputNumber").value;
    console.log("entered number is="+inputNumber);
    if(inputNumber===""){
        document.getElementById("result").innerHTML = "Please enter some value";
        document.getElementById("result").style.backgroundColor = "yellow";
    }
    else{
        var flag = possible();
        console.log("flag = "+flag);
        if(flag) {
           prevGues += inputNumber+" ";
           document.getElementById("prevGuessArray").innerHTML = prevGues;
           check(inputNumber);
        }
    }
    
}
function possible(){
    console.log("inside possible func = "+chances);
    if(chances>0){
        console.log("you can go forward");
        return true;
    }
    else{
        //alert("you loose");
        location.replace("redirectLooseG.html");
        // console.log("you are not allowed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        return false;
    }
}
function check(inputNumber) {
    if(inputNumber<randomNumber) {
        console.log("inside if");
        document.getElementById("result").innerHTML = "Number is too low";
        document.getElementById("result").style.backgroundColor = "red";
        chances--;
        document.getElementById("chanceLeftCount").innerHTML = chances;
    }
    else if(inputNumber>randomNumber){
        console.log("inside else if");
        document.getElementById("result").innerHTML = "Number is too high";
        document.getElementById("result").style.backgroundColor = "red";
        chances--;
        document.getElementById("chanceLeftCount").innerHTML = chances;
    }
    else{
        document.getElementById("result").style.backgroundColor = "green";
        console.log("inside else");
        document.getElementById("result").innerHTML = "you won";
        location.replace("redirectWonGuess.html");
    }
}















