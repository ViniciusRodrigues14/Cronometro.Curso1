let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let timer;
let seconds = 0;
let running = false;

function updateTimerDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateTimerDisplay(); // Inicializa o cronômetro em 00:00
