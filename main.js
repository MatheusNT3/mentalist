var numeroSecreto = parseInt(Math.random() * 11)

function Guess() {
    
    
    var elementResulted = document.getElementById("resulted")

    var guess = parseInt(document.getElementById("value").value);
    console.log(guess);
    
    if (guess == numeroSecreto) {
        elementResulted.innerHTML = "You guessed right!"
        
    }

    else if (guess > 10 || guess < 0) {
        elementResulted.innerHTML = "You must type a number between 0 and 10";
        }
    
    else {
        elementResulted.innerHTML = "You erred!";
    }
}

