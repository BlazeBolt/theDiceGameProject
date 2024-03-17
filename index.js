var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+randomNumber1+".png";

var randomImageSource = "./images/"+randomDiceImage;

var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2Source = "./images/dice"+randomNumber2+".png";

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomDiceImage2Source);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins !";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins !";
}