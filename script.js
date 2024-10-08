document
  .getElementById("toggle-ingredients")
  .addEventListener("click", function () {
    const ingredients = document.getElementById("ingredients");
    ingredients.classList.toggle("hidden");
    this.textContent = ingredients.classList.contains("hidden")
      ? "Show Ingredients"
      : "Hide Ingredients";
  });

document.getElementById("start-cooking").addEventListener("click", function () {
  let preparationTime = 45 * 60; // 45 minutes in seconds
  const timerDisplay = document.getElementById("timer-display");

  const timer = setInterval(() => {
    if (preparationTime <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Time's up!";
    } else {
      const minutes = Math.floor(preparationTime / 60);
      const seconds = preparationTime % 60;
      timerDisplay.textContent = `Time Remaining: ${minutes}m ${
        seconds < 10 ? "0" : ""
      }${seconds}s`;
      preparationTime--;
    }
  }, 1000);
});
