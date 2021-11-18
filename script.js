"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 20;
let numer = document.querySelector(".number");
let wynik = document.querySelector(".score");
let input = document.querySelector(".guess");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector(".check").click();
  }
});

let passMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(input.value);

  // jeśli nic nie zostanie wpisane
  if (!guess) {
    //  document.querySelector(".message").textContent = "Wpisz numer :)";
    passMessage("Wpisz numer :)");
  }
  //jeśli gracz wygra
  else if (guess === secretNumber) {
    //  document.querySelector(".message").textContent = "Gratulacje! Easy win!";
    passMessage("Gratulacje! Easy win!");
    numer.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    numer.style.color = "#60b347";
    input.style.color = "#60b347";
    numer.style.width = "30rem";

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
      //    document.querySelector(".message").textContent =
      passMessage(
        guess > secretNumber
          ? "Wpisana za duża liczba"
          : "Potrzebna wyższa liczba"
      );
      score--;
      wynik.textContent = score;
    } else {
      //  document.querySelector(".message").textContent =
      passMessage("Wykorzystałeś wszystkie szanse");
      wynik.textContent = 0;
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
  wynik.textContent = score;
  input.value = "";
  input.style.color = "#3b5998";
  numer.textContent = "?";
  numer.style.width = "13rem";
  numer.style.color = "#3b5998";
  passMessage("Rozpocznij zgadywanie...");

  let niebieskiBtn = document.querySelectorAll("button");
  let i;
  for (i = 0; i < niebieskiBtn.length; i++) {
    niebieskiBtn[i].style.color = "#3b5998";
  }
});
