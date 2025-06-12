let homeCount = 0
let guestCount = 0
let homeScoreDisplay = document.getElementById("home-score-display")
let guestScoreDisplay = document.getElementById("guest-score-display")
let red = "#F94F6D"
let green = "#94F9A4"

function updateScoreDisplay(team, points) {
    if (team==="home") {
        homeCount += points
        homeScoreDisplay.textContent = homeCount
    } else {
        guestCount += points
        guestScoreDisplay.textContent = guestCount
    }
    markWinner()
}

function markWinner() {
    if (homeCount > guestCount) {
        homeScoreDisplay.style.color = green;
        guestScoreDisplay.style.color = red;
        
    } else if (guestCount > homeCount) {
        guestScoreDisplay.style.color = green;
        homeScoreDisplay.style.color = red;
    }
    else {
        homeScoreDisplay.style.color = red;
        guestScoreDisplay.style.color = red;
    }
}

function reset() {
    homeCount = 0
    guestCount = 0
    homeScoreDisplay.textContent = homeCount
    guestScoreDisplay.textContent = guestCount
    homeScoreDisplay.style.color = red
    guestScoreDisplay.style.color = red
    
}