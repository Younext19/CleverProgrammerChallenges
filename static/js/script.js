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
