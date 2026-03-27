const btn = document.querySelector(".btn");
// console.log(btn);
function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
btn.addEventListener("click", function () {
  

  const num1 = getRandomDiceNumber();
  const num2 = getRandomDiceNumber();

  document
    .querySelector(".img1")
    .setAttribute("src", "assets/images/dice" + num1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "assets/images/dice" + num2 + ".png");

  if (num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 wins";
  } else if (num1 < num2) {
    document.querySelector("h1").textContent = "Player 2 wins";
  } else {
    document.querySelector("h1").textContent = "Draw";
  }
});
