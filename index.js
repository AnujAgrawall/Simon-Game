const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
const started = false;
const level = 0;


$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});



$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence() {
    level++;

    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}