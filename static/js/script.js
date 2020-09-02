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
    console.log(yourChoice);
}