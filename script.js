"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 20;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // jeśli nic nie zostanie wpisane
  if (!guess) {
    document.querySelector(".message").textContent = "Wpisz numer :)";
  }
  //jeśli gracz wygra
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Gratulacje! Easy win!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "#60b347";
    document.querySelector(".guess").style.color = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    let zielonyBtn = document.querySelectorAll("button");
    let i;
    for (i = 0; i < zielonyBtn.length; i++) {
      zielonyBtn[i].style.color = "#60b347";
    }

    if (score < highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Wpisana za duża liczba"
          : "Potrzebna wyższa liczba";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Wykorzystałeś wszystkie szanse";
      document.querySelector(".score").textContent = 0;
    }
  }
  // jeśli liczba jest mniejsza od secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = guess > secretNumber ?
  //       "Potrzebna wyższa liczba" : "Wpisana za duża liczba";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "Wykorzystałeś wszystkie szanse";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // jeśli liczba jest większa od secret number
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Wpisana za duża liczba";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       "Wykorzystałeś wszystkie szanse";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

//restart gry
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector("body").style.backgroundColor = "#3b5998";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").style.color = "#3b5998";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.color = "#3b5998";
  document.querySelector(".message").textContent = "Start guessing...";

  let niebieskiBtn = document.querySelectorAll("button");
  let i;
  for (i = 0; i < niebieskiBtn.length; i++) {
    niebieskiBtn[i].style.color = "#3b5998";
  }
});
