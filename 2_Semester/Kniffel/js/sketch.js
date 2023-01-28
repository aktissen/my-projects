// ==== SETUP ====
import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import TextButton from "./textButton.js";
import SelectButton from "./selectButton.js";
import Score from "./score.js";
import Bonus from "./bonus.js";

let numberOfDice = 5;
let gameStart = false;
let gameEnd = false;
let roundCounter = 0;
let showClue = false;
let endScore = 0;

// ==== GAME ====
// dices
let dice = [];
for (let i = 0; i < numberOfDice; i++) {
  dice[i] = new Dice(50 + i * 100, 50, 80);
}

// selectButtons
let numberOfButtons = 14;
let selectButtonArray = [];
for (let i = 0; i < numberOfButtons; i++) {
  selectButtonArray[i] = new SelectButton(
    224,
    252 + i * 33,
    85,
    31,
    0,
    "#fff9f2",
    "#424242",
    20,
    1 + i,
    "",
    dice
  );
}

// Start and Restart button
let rollAll = new RollAllButton(50, 180, 200, 50, "Würfeln", dice, 0);
let buttonStart = new TextButton(
  window.width / 2 - 105,
  400,
  250,
  50,
  10,
  "#ffa9a1",
  "Starte das Spiel",
  "white",
  25
);
let buttonRestart = new TextButton(
  window.width / 2 - 105,
  450,
  250,
  50,
  10,
  "#ffa9a1",
  "Neustart",
  "white",
  25
);

// Score
let showScore = new Score(267, 725, 0, 22, "white");

// bonus
let showBonus = new Bonus(267, 463, 0, 22, "white");

// ==== MOUSE CLICKED ====
window.mouseClicked = mouseClicked;
function mouseClicked() {
  if (buttonStart.hitTest(mouseX, mouseY) && !gameStart) {
    gameStart = true;
    gameEnd = false;
  }

  // Restart of game
  if (buttonRestart.hitTest(mouseX, mouseY) && gameEnd) {
    gameStart = false;
    gameEnd = false;
    rollAll.rollingCounter = -1;
    roundCounter = 0;
    rollAll.clicked();
    for (let SelectObject of selectButtonArray) {
      SelectObject.amount = 0;
      SelectObject.alreadyChosen = false;
      SelectObject.text = "";
    }
    showScore.text = 0;
    showBonus.text = 0;
    showBonus.amountFirstHalf = 0;
    showBonus.addAmount = true;
    endScore = 0;
  }

  // activate or deactivate dice
  for (let diceObject of dice) {
    diceObject.mouseClicked();
  }

  // Roll all Dices
  if (rollAll.rollingCounter < 2) {
    rollAll.mouseClicked();
  } else {
    showClue = true;
  }

  // click on of the select Buttons
  for (let selectButtonObject of selectButtonArray) {
    if (selectButtonObject.hitTest(mouseX, mouseY)) {
      let x = selectButtonObject.chosenTest();
      if (!x) {
        selectButtonObject.countValues();
        if (
          selectButtonObject.chosenValue <= 6 ||
          selectButtonObject.chosenValue > 7
        ) {
          roundCounter++;
        }

        // update Score
        showBonus.calculateScore(selectButtonArray);
        showScore.calculateScore(selectButtonObject.text, showBonus);

        // active all dices after chosen possibility
        for (let diceObject of dice) {
          diceObject.active = true;
        }

        // roll all dices for new round
        rollAll.clicked();
        rollAll.rollingCounter = 0;

        showClue = false;
      } else {
        console.log("Dieser Button wurde bereits gedrückt");
      }
    }
  }
}

// ==== DRAW ====
window.draw = draw;
function draw() {
  noStroke();
  background("#fff9f2");
  textFont(window.fontKniffel);

  // start screen
  if (!gameStart) {
    buttonStart.display();
    image(titleImage, window.width / 2 - 180, 100);
  }

  // game running
  if (gameStart && !gameEnd) {
    rollAll.display();
    for (let diceObject of dice) {
      diceObject.display();
    }

    for (let selectButtonObject of selectButtonArray) {
      selectButtonObject.display();
    }

    image(tableImage, 50, 250);
    showScore.display();
    showBonus.display();

    if (showClue) {
      textAlign(LEFT);
      fill("#424242");
      text("Bitte wähle eine Möglichkeit aus!", 270, 205);
    } else {
      textAlign(LEFT);
      fill("#424242");
      text("restliche Würfe: " + (2 - rollAll.rollingCounter), 270, 205);
    }
  }

  // game end
  if (gameEnd) {
    endScore = showScore.text;
    image(titleImage, window.width / 2 - 180, 100);
    fill("#424242");
    textAlign(CENTER);
    text(
      "Du hast folgende Punktzahl erreicht: " + endScore,
      width / 2 + 20,
      350
    );
    buttonRestart.display();
  }

  if (roundCounter >= 13) {
    gameEnd = true;
  }
}
