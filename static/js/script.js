// Challenge 1 : Your Age In Days
function ageinDays(){
    var birthYear = prompt("Enter Your Birth Year");
    var age = 2020 - birthYear;
    var result = age*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are "+result+" Days Old");

    h1.setAttribute("id","result");
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('result').remove();
}

// Challenge 2 : Cat Generator
function GenerateCat(){
    var image = document.createElement("img");
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/4kc.gif"
    div.appendChild(image);
}

// Challenge 3 : Rock Paper Scissors
function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    var results;
    var finalmsg;
    humanChoice = yourChoice.id;
    botChoice = randToRpsInt();
    botChoice = numberToChoice(botChoice);
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    var a=results[0];
    var b= results[1];
    if (a>b){
        finalmsg="human won";
    }
    if(a<b){
        finalmsg="computer won";
    } 
    if(a===b){
        finalmsg="draw";
    }
    /*message = finalMessage(results);*/
    rpsFrontEnd(humanChoice,botChoice,finalmsg);
}
function randToRpsInt(){
    return Math.floor(Math.random() *3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice, botChoice){
    var rpsDatabase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5,'rock':0}
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore,botScore];
}
function rpsFrontEnd(humanimg,botimg,finalmsg){
    var imageDb={
        'rock':document.getElementById("rock").src,
        'paper':document.getElementById("paper").src,

        'scissors':document.getElementById("scissors").src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='"+imageDb[humanimg]+"' height=150 width = 150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);'>" 
    
    messageDiv.innerHTML="<h1 "+finalmsg+"; font-size : 60px; padding:30px; '>"+finalmsg +"</h1>"

    botDiv.innerHTML="<img src= '"+imageDb[botimg]+"'height=150 width = 150 style='box-shadow : 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);



}