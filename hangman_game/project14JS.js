/*************************************All variables used in program********************************************/
var arrayOfCount = new Array(26);
for(index=0;index<26;index++){
    arrayOfCount[index] = 0;
}
var imagesArray = ["hangmanimg1.png","hangmanimg2.png","hangmanimg3.png","hangmanimg4.png","hangmanimg5.png",
"hangmanimg6.png","hangmanimg7.png"];
var count  = 0;
var arrayOfTopics = ["state","Car Company","Country","Data Structure"];
/***************************************************************************************************************/
var randomNumber1 = (Math.floor(Math.random()*1000))%4;
console.log("random1 = "+randomNumber1+" arraytopic = "+arrayOfTopics[randomNumber1]);
document.getElementById("topicNameReplace").innerHTML = arrayOfTopics[randomNumber1];
var resultString = "";

/****************************the array of topics and their hint*************************************************/
if(randomNumber1==0){
    var cityArray = ["RAJASTHAN","MADHYPRADESH","UTTARPRADESH","UTTRAKHAND","JAMMUKASHMIR","TAMILNADU"];
    var randomNumber3 = (Math.floor(Math.random()*1000))%6;
    console.log("array of stste  = "+cityArray[randomNumber3]);
    var stateHint = ["favorite tourist spot in india","",
                    "most important engineering colleges are situated here",
                    "this state has many beautiful valley","this state enjoy many special power",
                    "literacy of this state is very high"];
    resultString = cityArray[randomNumber3];
}
else if(randomNumber1==1){
    var carArray = ["MARUTISUZUKI","CHRYSLER","HYUNDAI","LAMBORGINI","VOLKSWAGEN","PORSCHE","BUGGATI"];
    var carArraylength = carArray.length;
    var randomNumber5 = (Math.floor(Math.random()*1000))%carArraylength;
    var carHint = ["Cars of this company are very popular in india",
                  "It is one of the 'Big three' automobile' manufacturer","Largest car sold by this company after lockdown",
                  "This company initially manufacture tractor","Among Biggest car seller in the world",
                "Builds among the fastest car in the world","Fastest production car is the world"];
    resultString = carArray[randomNumber5]; 
    
}
else if(randomNumber1==2){
    var countryArray = ["ETHIOPIA","CZECHOSLOVAKIA","GUATEMALA","INDONESIA","MOZAMBIQUE","URUGUARY","ZIMBABWE"];
    var countryArrayLength = countryArray.length;
    var randomNumber4 = (Math.floor(Math.random()*1000))%countryArrayLength;
    //console.log("array of country = "+countryArray[randomNumber4]+" random number 4 = "+randomNumber4);
    var countryHint = ["It is landlocked country split by the great rift valley",
                    "The capital of the country is prague","This is home of volcanoes, rainforests and ancient mayan sites",
                    "this country consists of more than 17,000 island including sumatra,java etc",
                    "It's long coastline is dotted with popular beaches like tofo",
                    "It is one of the top 5 producers of wine in south America",
                    "The largest waterfall of world is situated here"];
    resultString = countryArray[randomNumber4];
}
else{
    var dataStructure = ["STACK","QUEUE","TREE","ARRAYLIST","HEAP"];
    var randomNumber2 = (Math.floor(Math.random()*1000))%5;
    console.log("random2 = "+randomNumber2+" datastructure ="+dataStructure[randomNumber2]);
    var dataStructureHint = ["it is well known for its use in balanced paranthesis question",
                            "fifo data structure","Used to store data in non linear form",
                            "resizable array in java",
                            "Another form of tree"];
    resultString = dataStructure[randomNumber2];
}
/*****************************************************************************************************************/

/************************************ Hint button click function**************************************************/
document.getElementById("toGetHintButton").onclick = () => {
    if(randomNumber1==0) document.getElementById("hintWill").innerHTML = stateHint[randomNumber3];
    else if(randomNumber1==1) document.getElementById("hintWill").innerHTML = carHint[randomNumber5];
    else if(randomNumber1==2) document.getElementById("hintWill").innerHTML = countryHint[randomNumber4];
    else document.getElementById("hintWill").innerHTML = dataStructureHint[randomNumber2];
    document.getElementById("toGetHintButton").style.display = "none";
}
/***************************************************************************************************************/

var lengthOfString = resultString.length;
// console.log("length = "+lengthOfString);
var dashedString = "";
var sundarString = "";
for(indexOf= 0;indexOf<lengthOfString;indexOf++){
    dashedString += "_";
    sundarString += "_ ";
}
console.log("dashed string = "+dashedString);
document.getElementById("guessedWord").innerHTML = sundarString;
var characterGuessed = 'A';


/***************************************** All alphabet button click event will be handeled here*****************/

document.getElementById("a").onclick = ()=>{
    arrayOfCount[0]++;
    if(arrayOfCount[0]==1){
        characterGuessed = 'A';
        checkForCharacter();
    }
}
document.getElementById("b").onclick = ()=>{
    arrayOfCount[1]++;
    if(arrayOfCount[1]==1){
        characterGuessed = 'B';
        checkForCharacter();
    }
}
document.getElementById("c").onclick = ()=>{
    arrayOfCount[2]++;
    if(arrayOfCount[2]==1){
        characterGuessed = 'C';
        checkForCharacter();
    }
}
document.getElementById("d").onclick = ()=>{
    arrayOfCount[3]++;
    if(arrayOfCount[3]==1){
        characterGuessed = 'D';
        checkForCharacter();
    }
}
document.getElementById("e").onclick = ()=>{
    arrayOfCount[4]++;
    if(arrayOfCount[4]==1){
        characterGuessed = 'E';
        checkForCharacter();
    }
}
document.getElementById("f").onclick = ()=>{
    arrayOfCount[5]++;
    if(arrayOfCount[5]==1){
        characterGuessed = 'F';
        checkForCharacter();
    }
}
document.getElementById("g").onclick = ()=>{
    arrayOfCount[6]++;
    if(arrayOfCount[6]==1){
        characterGuessed = 'G';
        checkForCharacter();
    }
}
document.getElementById("h").onclick = ()=>{
    arrayOfCount[7]++;
    if(arrayOfCount[7]==1){
        characterGuessed = 'H';
        checkForCharacter();
    }
}
document.getElementById("i").onclick = ()=>{
    arrayOfCount[8]++;
    if(arrayOfCount[8]==1){
        characterGuessed = 'I';
        checkForCharacter();
    }  
}
document.getElementById("j").onclick = ()=>{
    arrayOfCount[9]++;
    if(arrayOfCount[9]==1){
        characterGuessed = 'J';
        checkForCharacter();
    }
}
document.getElementById("k").onclick = ()=>{
    arrayOfCount[10]++;
    if(arrayOfCount[10]==1){
        characterGuessed = 'K';
        checkForCharacter();
    }
}
document.getElementById("l").onclick = ()=>{
    arrayOfCount[11]++;
    if(arrayOfCount[11]==1){
        characterGuessed = 'L';
        checkForCharacter();
    }
}
document.getElementById("m").onclick = ()=>{
    arrayOfCount[12]++;
    if(arrayOfCount[12]==1){
        characterGuessed = 'M';
        checkForCharacter();
    }
}
document.getElementById("n").onclick = ()=>{
    arrayOfCount[13]++;
    if(arrayOfCount[13]==1){
        characterGuessed = 'N';
        checkForCharacter();
    }  
}
document.getElementById("o").onclick = ()=>{
    arrayOfCount[14]++;
    if(arrayOfCount[14]==1){
        characterGuessed = 'O';
        checkForCharacter();
    }
}
document.getElementById("p").onclick = ()=>{
    arrayOfCount[15]++;
    if(arrayOfCount[15]==1){
        characterGuessed = 'P';
        checkForCharacter();
    }
}
document.getElementById("q").onclick = ()=>{
    arrayOfCount[16]++;
    if(arrayOfCount[16]==1){
        characterGuessed = 'Q';
        checkForCharacter();
    }
}
document.getElementById("r").onclick = ()=>{
    arrayOfCount[17]++;
    if(arrayOfCount[17]==1){
        characterGuessed = 'R';
        checkForCharacter();
    }
}
document.getElementById("s").onclick = ()=>{
    arrayOfCount[18]++;
    if(arrayOfCount[18]==1){
        characterGuessed = 'S';
        checkForCharacter();
    }
}
document.getElementById("t").onclick = ()=>{
    arrayOfCount[19]++;
    if(arrayOfCount[19]==1){
        characterGuessed = 'T';
        checkForCharacter();
    }
}
document.getElementById("u").onclick = ()=>{
    arrayOfCount[20]++;
    if(arrayOfCount[20]==1){
        characterGuessed = 'U';
        checkForCharacter();
    }
}
document.getElementById("v").onclick = ()=>{
    arrayOfCount[21]++;
    if(arrayOfCount[21]==1){
        characterGuessed = 'V';
        checkForCharacter();
    }
}
document.getElementById("w").onclick = ()=>{
    arrayOfCount[22]++;
    if(arrayOfCount[22]==1){
        characterGuessed = 'W';
        checkForCharacter();
    }
}
document.getElementById("x").onclick = ()=>{
    arrayOfCount[23]++;
    if(arrayOfCount[23]==1){
        characterGuessed = 'X';
        checkForCharacter();
    }
}
document.getElementById("y").onclick = ()=>{
    arrayOfCount[24]++;
    if(arrayOfCount[24]==1){
        characterGuessed = 'Y';
        checkForCharacter();
    }
}
document.getElementById("z").onclick = ()=>{
    arrayOfCount[25]++;
    if(arrayOfCount[25]==1){
        characterGuessed = 'Z';
        checkForCharacter();
    }
}
document.getElementById("playAgain").onclick = () => {
    // window.open("project14Play.html");
    reloadFun();
}

function reloadFun(){
    window.location.reload();
}
/***************************************************************************************************************/
document.getElementById("quit").onclick = () => {
    console.log("quit button clicked");
    window.close();
}



function checkForCharacter() {
    var sunderStringFunc = "";
    var countOfChara = 0;
    for(inn1 = 0;inn1<lengthOfString;inn1++){
        if(dashedString.charAt(inn1)!='_'){
            countOfChara++;
        } 
    }
    console.log("count of cha =  "+countOfChara);
    if(countOfChara==lengthOfString){
        //winning
        window.open("project14Play.html","_self");
    }
    else{
        if(count==6){
            //loosing
            // window.open("project14Play.html","_self");
            location.replace("redirectLosseHang.html");
        }
        else{
            var booleanT = false;
            console.log("CLICKED CHARACTER IS = "+characterGuessed);
            
            for(inn = 0;inn<lengthOfString;inn++){
                if(resultString.charAt(inn)===characterGuessed){
                    var stringToArray = dashedString.split("");
                    stringToArray[inn] = characterGuessed;
                    dashedString = stringToArray.join("");
                    booleanT = true;
                    countOfChara++;
                }
            }
            for(sundar = 0;sundar<lengthOfString;sundar++){
                sunderStringFunc+= dashedString[sundar]+" ";
            }
            if(booleanT){
                console.log(`the character ${characterGuessed} exist in the final sring AND SATUR OF CURREN STRING = ${dashedString}`);
               // document.getElementById("guessedWord").innerHTML = dashedString;
                document.getElementById("guessedWord").innerHTML = sunderStringFunc;
                document.getElementById(characterGuessed.toLowerCase(characterGuessed)).style.backgroundColor = "green";
    
            }
            else{
                console.log("the character you guessed does not exist AND CURRENT STATUS OF STRING IS = "+dashedString);
                    //document.getElementById("guessedWord").innerHTML = dashedString;
                    document.getElementById("guessedWord").innerHTML = sunderStringFunc;
                    document.getElementById(characterGuessed.toLowerCase(characterGuessed)).style.backgroundColor = "red";
                    count++;
                    console.log("count="+count+"  array="+imagesArray[count]);
                    document.getElementById("hangmanState").src = imagesArray[count];
            }
        }
    }
    

}