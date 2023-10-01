var roll1 = Math.floor(Math.random()*6);
var roll2 = Math.floor(Math.random()*6);

var files = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src", files[roll1]);
document.querySelector(".img2").setAttribute("src", files[roll2]);

if(roll1 > roll2){
    document.querySelector("h1").textContent = "Player 1 Wins!!";
}
else if(roll2 > roll1){
    document.querySelector("h1").textContent = "Player 2 Wins!!";
}
else{
    document.querySelector("h1").textContent = "It's a Tie."
}
