// Sprite Controls 
let sprite = document.getElementById("astronaut-sprite");
let scoreCounter = document.getElementById("score-counter");
let spaceObstacle = document.querySelector(".space-obstacle");

function  locomotionJump () {
    sprite.classList.add("animate-sprite"); 
    setTimeout(() => {
        sprite.classList.remove("animate-sprite"); 
    }, 700); 
}

document.addEventListener("touchstart", () => {
    if(!sprite.classList.contains("animate-sprite")) {
        locomotionJump(); 
    }
});   

document.addEventListener("keypress", () => {
    if(!sprite.classList.contains("animate-sprite")) {
        locomotionJump (); 
    }
});    

// Game Over & Score Counter Detection 
setInterval (() => {
    scoreCounter.innerText++;
    const spriteTop = parseInt(window.getComputedStyle(sprite)
    .getPropertyValue("top")); 
    const obstacleLeft = parseInt(window.getComputedStyle(spaceObstacle)
    .getPropertyValue("left")); 
    console.log(obstacleLeft)


    if (obstacleLeft < 50 && obstacleLeft > 0 && spriteTop > 250) {
        alert("Game Over! You Got A Score Of: " + scoreCounter.innerText);
        location.reload();
    }
}, 50); 




// Player Settings - Modals 
// let modalBtn = document.querySelector(".open-modal"); 
// let modalBg = document.querySelector(".outer-modal");
// let modalClose = document.querySelector(".close-modal"); 

// modalBtn.addEventListener("click", function () {
//     modalBg.classList.add("modal-toggle")
// }); 

// modalClose.addEventListener("click", function () {
//     modalBg.classList.remove("modal-toggle")
// }); 

// Ingame Audio

