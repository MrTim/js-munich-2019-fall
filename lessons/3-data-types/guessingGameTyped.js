let correctNumber = Math.floor(Math.random() * (10 + 1));

function playRounds(lives) {
    if(lives === 0) {
        document.writeln('<h2 class="lose">You lose!</h2>');
        return;
    }

    let number = Number(prompt("Enter a value between 1 and 10"));
    if(isNaN(number)) {
        alert('Please enter a valid number!');
        playRounds(lives);
        return;
    }

    if (correctNumber === number) {
        document.writeln('<h2 class="win">You win!</h2>');
        return true;
    } else if (number > correctNumber) {
        alert("Sorry, too high.");
        playRounds(lives - 1);
    } else {
        alert("Sorry, too low.");
        playRounds(lives - 1);
    }
}

playRounds(3);