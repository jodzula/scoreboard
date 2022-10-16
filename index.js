let homeResult = 0;
let guestResult = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function AddOneHome() {
    homeResult += 1;
    homeEl.textContent = homeResult
}

function AddTwoHome() {
    homeResult += 2;
    homeEl.textContent = homeResult
}

function AddThreeHome() {
    homeResult += 3;
    homeEl.textContent = homeResult
}

function AddOneGuest() {
    guestResult += 1;
    guestEl.textContent = guestResult
}

function AddTwoGuest() {
    guestResult += 2;
    guestEl.textContent = guestResult
}

function AddThreeGuest() {
    guestResult += 3;
    guestEl.textContent = guestResult
}

function NewGame() {
    homeResult = 0;
    guestResult = 0;
    homeEl.textContent = homeResult
    guestEl.textContent = guestResult
    
}




homeEl.textContent = homeResult
guestEl.textContent = guestResult

