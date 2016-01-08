// javascript stuff goes here
console.log("work please")
var speed = 65;

// Complete the condition in the ()s on line 4
if (speed>80) {
    console.log ("slow down")
	// Use console.log() to print "Slow down"
	
} 
else {
	console.log("drive safe")
	// Use console.log() to print "Drive safe"


}
var userChoice = prompt("Do you choose rock, paper, or scissors?"); 
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
       if(choice1 === "rock") {
        if(choice2 === "scissors") {
        return "rock wins";
        } 
        else {
            return "paper wins"; }
    }
    
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins" ;
        } 
        else {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins" ;
            }
            else {
            if (choice2 === "paper") {
            return "scissors wins" }
            }
            }
}
compare (userChoice, computerChoice);
