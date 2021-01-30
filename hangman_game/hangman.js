/*************************************All variables used in program********************************************/
var arrayOfCount = new Array(26);
for(index=0;index<26;index++){
    arrayOfCount[index] = 0;
}
var imageCount=0;
var imagesArray = ["hangmanimg1.png","hangmanimg2.png","hangmanimg3.png","hangmanimg4.png","hangmanimg5.png",
"hangmanimg6.png","hangmanimg7.png"];

var arrayOfTopics = ["State","Car Company","Country","Data Structure"];
/***************************************************************************************************************/
var selectTopic = (Math.floor(Math.random()*1000))%4;
console.log("random1 = "+selectTopic+" arraytopic = "+arrayOfTopics[selectTopic]);
document.getElementById("topicNameReplace").innerHTML = arrayOfTopics[selectTopic];
var resultString = "";

/****************************the array of topics and their hint*************************************************/
if(selectTopic==0){
    var cityArray = ["RAJASTHAN","MADHYPRADESH","UTTARPRADESH","UTTRAKHAND","JAMMUKASHMIR","TAMILNADU"];
    var randomNumber3 = (Math.floor(Math.random()*1000))%6;
    console.log("array of stste  = "+cityArray[randomNumber3]);
    var stateHint = ["favorite tourist spot in india","",
                    "most important engineering colleges are situated here",
                    "this state has many beautiful valley","this state enjoy many special power",
                    "literacy of this state is very high"];
    resultString = cityArray[randomNumber3];
}
else if(selectTopic==1){
    var carArray = ["MARUTISUZUKI","CHRYSLER","HYUNDAI","LAMBORGINI","VOLKSWAGEN","PORSCHE","BUGGATI"];
    var carArraylength = carArray.length;
    var randomNumber5 = (Math.floor(Math.random()*1000))%carArraylength;
    var carHint = ["Cars of this company are very popular in india",
                  "It is one of the 'Big three' automobile' manufacturer","Largest car sold by this company after lockdown",
                  "This company initially manufacture tractor","Among Biggest car seller in the world",
                "Builds among the fastest car in the world","Fastest production car is the world"];
    resultString = carArray[randomNumber5]; 
    
}
else if(selectTopic==2){
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
    if(selectTopic==0) document.getElementById("hintWill").innerHTML = stateHint[randomNumber3];
    else if(selectTopic==1) document.getElementById("hintWill").innerHTML = carHint[randomNumber5];
    else if(selectTopic==2) document.getElementById("hintWill").innerHTML = countryHint[randomNumber4];
    else document.getElementById("hintWill").innerHTML = dataStructureHint[randomNumber2];
    document.getElementById("toGetHintButton").style.display = "none";
}
/***************************************************************************************************************/




/***************************************** All alphabet button click event will be handeled here*****************/

/***************************************************************************************************************/
var lengthOfString = resultString.length;
// console.log("length = "+lengthOfString);
var chancesUsed  = 0;
var sundarString = "";
for(indexOf= 0;indexOf<lengthOfString;indexOf++){
    sundarString += "_ ";
}
document.getElementById("guessedWord").innerHTML = sundarString;
var characterGuessed = 65;

let userString = "";
for(index = 0;index < lengthOfString; index++){
    userString += "_";
}
function checkForCharacter(characterGuessed) {
    if(arrayOfCount[characterGuessed-65] === 1) {
        return;
    }
    arrayOfCount[characterGuessed-65]++;
    chancesUsed++;
    //console.log("character Guessed: " + characterGuessed);
    if (chancesUsed > 6) {
        location.replace("redirectIfLose.html");
    }
    let noMatch = false;
    
    for(let index=0; index<lengthOfString; index++) {
        if (resultString.charCodeAt(index) === characterGuessed) {
            console.log(String.fromCharCode(characterGuessed));
            userString = userString.replaceAt(index, String.fromCharCode(characterGuessed));
            noMatch = true;
        }
    }

    if (!noMatch) {
        document.getElementById("hangmanState").src = imagesArray[imageCount];
        imageCount++;
    }

    document.getElementById("guessedWord").innerHTML = userString;//beautify(userString);
    if (userString === resultString) {
        location.replace("redirectIfWin.html");
    }

}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//     for(inn1 = 0;inn1<lengthOfString;inn1++){
//         if(dashedString.charAt(inn1)!='_'){
//             countOfChara++;
//         } 
//     }
//     console.log("count of cha =  "+countOfChara);
//     if(countOfChara==lengthOfString){
//         //winning
//         window.open("project14Play.html","_self");
//     }
//     else{
//         if(count==6){
//             //loosing
//             // window.open("project14Play.html","_self");
            
//         }
//         else{
//             var booleanT = false;
//             console.log("CLICKED CHARACTER IS = "+characterGuessed);
            
//             for(inn = 0;inn<lengthOfString;inn++){
//                 if(resultString.charAt(inn)===characterGuessed){
//                     var stringToArray = dashedString.split("");
//                     stringToArray[inn] = characterGuessed;
//                     dashedString = stringToArray.join("");
//                     booleanT = true;
//                     countOfChara++;
//                 }
//             }
//             for(sundar = 0;sundar<lengthOfString;sundar++){
//                 sunderStringFunc+= dashedString[sundar]+" ";
//             }
//             if(booleanT){
//                 console.log(`the character ${characterGuessed} exist in the final sring AND SATUR OF CURREN STRING = ${dashedString}`);
//                // document.getElementById("guessedWord").innerHTML = dashedString;
//                 document.getElementById("guessedWord").innerHTML = sunderStringFunc;
//                 document.getElementById(characterGuessed.toLowerCase(characterGuessed)).style.backgroundColor = "green";
    
//             }
//             else{
//                 console.log("the character you guessed does not exist AND CURRENT STATUS OF STRING IS = "+dashedString);
//                     //document.getElementById("guessedWord").innerHTML = dashedString;
//                     document.getElementById("guessedWord").innerHTML = sunderStringFunc;
//                     document.getElementById(characterGuessed.toLowerCase(characterGuessed)).style.backgroundColor = "red";
//                     count++;
//                     console.log("count="+count+"  array="+imagesArray[count]);
//                     document.getElementById("hangmanState").src = imagesArray[count];
//             }
//         }
//     }
    

// }