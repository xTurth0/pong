const racketMovementSpeed = 10;
const computerRacketMovementSpeed = 1;
let ballMovementSpeed = 1;
const ballIncrementSpeed = 0;
const ballInterval = 20;
let direction = "SE";

document.addEventListener("DOMContentLoaded", () => {
    try {
        init();
    } catch (error) {
        console.error("Initialization error:", error);
    }
});

function init() {
    document.onkeydown = handleKeydown;
    const ball = document.getElementById("ball");
    const intervalId = setInterval(moveBall, ballInterval, ball);
    const intervalComputerRacketId = setInterval(computerRacketMovement, computerRacketMovementSpeed, ball);
    
}

function computerRacketMovement(ball) {
    let computerRacket = document.getElementById("computer");
    let computerMarginLeft = parseInt(window.getComputedStyle(computerRacket).marginLeft, 10);
    let ballMarginLeft = parseInt(window.getComputedStyle(ball).marginLeft, 10);
    if (computerMarginLeft + 40 < ballMarginLeft && computerMarginLeft + computerRacketMovementSpeed <= 400) {
        computerRacket.style.marginLeft = (computerMarginLeft + computerRacketMovementSpeed) + "px";
    }
    else if (computerMarginLeft + 40 > ballMarginLeft && computerMarginLeft + computerRacketMovementSpeed >= 0) {
        computerRacket.style.marginLeft = (computerMarginLeft - computerRacketMovementSpeed) + "px";
    }
}

function handleKeydown(event) {
    
    const playerRacket = document.getElementById("player");
    currentMarginLeft = parseInt(window.getComputedStyle(playerRacket).marginLeft, 10);
    if (event.key === "ArrowRight" && currentMarginLeft + racketMovementSpeed <= 400) {
        playerRacket.style.marginLeft = (currentMarginLeft + racketMovementSpeed) + "px";
    }
    else if (event.key === "ArrowLeft" && currentMarginLeft - racketMovementSpeed >= 0) {
        playerRacket.style.marginLeft = (currentMarginLeft - racketMovementSpeed) + "px";
    }    
}

function moveBall(ball) {
    let currentMarginLeft = parseInt(window.getComputedStyle(ball).marginLeft, 10);
    let currentMarginTop = parseInt(window.getComputedStyle(ball).marginTop, 10);
    if (currentMarginTop == 440 || currentMarginTop == -440) {
        ballMovementSpeed += ballIncrementSpeed;
    } 
    if (direction === "SE") {
        if (currentMarginTop >= 440) {
            direction = "NE";
        }
        if (currentMarginLeft >= 480) {
            direction = "SW";
        }
        ball.style.marginLeft = (currentMarginLeft + ballMovementSpeed) + "px";
        ball.style.marginTop = (currentMarginTop + ballMovementSpeed) + "px";
    }
    else if (direction === "NE") {
        if (currentMarginTop <= -440) {
            direction = "SE";
        }
        if (currentMarginLeft >= 480) {
            direction = "NW";
        }
        ball.style.marginLeft = (currentMarginLeft + ballMovementSpeed) + "px";
        ball.style.marginTop = (currentMarginTop - ballMovementSpeed) + "px";
    }
    else if (direction === "NW") {
        if (currentMarginTop <= -440) {
            direction = "SW";
        }
        if (currentMarginLeft <= 0) {
            direction = "NE";
        }
        ball.style.marginLeft = (currentMarginLeft - ballMovementSpeed) + "px";
        ball.style.marginTop = (currentMarginTop - ballMovementSpeed) + "px";
    }
    else {
        if (currentMarginTop >= 440) {
            direction = "NW";
        }
        if (currentMarginLeft <= 0) {
            direction = "SE";
        }
        ball.style.marginLeft = (currentMarginLeft - ballMovementSpeed) + "px";
        ball.style.marginTop = (currentMarginTop + ballMovementSpeed) + "px";
    }
    
}



