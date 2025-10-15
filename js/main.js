// 1. 시간/분/초 입력 가능
// 2. start 누르면 타이머가 1초 단위로 감소
// 3. pause 누르면 타이머 멈춤
// 4. 다시 start 누르면 재시작
// 5. 0초가 되면 초기화
// 6. Reset을 누르면 초기화

const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const playBtn = document.querySelector(".play-btn");
const resetBtn = document.querySelector(".reset-btn");

let timer;
let inRunning = false;

function startTimer() {
  timer = setInterval(() => {}, 1000);
}

function stopTimer() {}

function resetTimer() {
  clearInterval(timer);
}

playBtn.addEventListener("click", () => {
  playBtn.querySelector("p").textContent = "STOP";
  playBtn.querySelector("p");
  startTimer();
});
