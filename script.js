const speed = 10;

document.addEventListener("DOMContentLoaded", () => {
    try {
        init();
    } catch (error) {
        console.error("Initialization error:", error);
    }
});

function init() {
    document.onkeydown = handleKeydown;
}

function handleKeydown(event) {
    
    const playerRacket = document.getElementById("player");
    currentMarginLeft = parseInt(window.getComputedStyle(playerRacket).marginLeft, 10);
    if (event.key === "ArrowRight" && currentMarginLeft + speed <= 400) {
        playerRacket.style.marginLeft = (currentMarginLeft + speed) + "px";
    }
    else if (event.key === "ArrowLeft" && currentMarginLeft - speed >= 0) {
        playerRacket.style.marginLeft = (currentMarginLeft - speed) + "px";
    }    
}
