// To start the game
$(document).ready(function () {

    // To generates random number between 19 - 120
    var random = Math.floor(Math.random() * 120 + 19)

    // Display random number
    $('.randomNumber').text(random);

    // Generating random number between 1 - 12 for each crystal
    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);
    var allNum = [num1, num2, num3, num4];
    console.log(allNum)

    // Main variables to track of total points, wins, and losses 
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('.wins').text("Wins: " + wins);
    $('.losses').text("Losses: " + losses);

    // To reset game after win/lose
    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random)
        $('.randomNumber').text(random);
        allNum = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#scoreDisplay').empty();
    }

    // Displaying wins
    function winner() {
        alert("Keep up the good work!");
        wins++;
        $('.wins').text("Wins: " + wins);
        reset();
    }

    // Displaying losses
    function loser() {
        alert("Better luck next time!");
        losses++;
        $('.losses').text("Losses: " + losses);
        reset()
    }

    // On click, add value to play total score
    $('#red').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('.scoreDisplay').text(playerTotal);
        // Set winning/losing conditions
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })

    $('#blue').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('.scoreDisplay').text(playerTotal);
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })

    $('#teal').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('.scoreDisplay').text(playerTotal);
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })

    $('#green').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('.scoreDisplay').text(playerTotal);
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    });
});
