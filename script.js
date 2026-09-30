// 1. Greeting that changes with the time of day
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning! 👋";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! 👋";
} else {
  greeting.textContent = "Good evening! 👋";
}

// 2. "Stamp my passport" buttons on the travel cards
const buttons = document.querySelectorAll(".stamp-btn");
const stampCount = document.getElementById("stampCount");
let count = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.parentElement;
    card.classList.toggle("stamped");

    if (card.classList.contains("stamped")) {
      button.textContent = "Stamped! ✓";
      count = count + 1;
    } else {
      button.textContent = "Stamp my passport";
      count = count - 1;
    }

    stampCount.textContent = count;
  });
});
