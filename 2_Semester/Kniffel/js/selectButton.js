import Button from "./button.js";

export default class SelectButton extends Button {
  constructor(
    x,
    y,
    width,
    height,
    radius,
    color,
    colorText,
    sizeText,
    chosenValue,
    text,
    dice
  ) {
    super(x, y, width, height, radius);
    this.color = color;
    this.colorText = colorText;
    this.sizeText = sizeText;
    this.chosenValue = chosenValue;
    this.amount = 0;
    this.alreadyChosen = false;
    this.text = "";
    this.possibility = "";
    this.dice = dice;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.radius);
    fill(this.colorText);
    textAlign(CENTER);
    textSize(this.sizeText);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);
    textAlign(LEFT);
    text(this.possibility, this.x + this.width + 30, this.y + this.height / 2);
  }

  chosenTest() {
    if (!this.alreadyChosen) {
      return false;
    } else {
      return true;
    }
  }

  countValues() {
    if (this.chosenValue <= 6) {
      for (let diceObject of this.dice) {
        if (this.chosenValue === diceObject.value) {
          this.amount++;
        }
      }
      this.text = this.chosenValue * this.amount;
      this.alreadyChosen = true;
    }

    if (this.chosenValue === 7) {
      this.alreadyChosen = true;
    }

    if (this.chosenValue >= 8) {
      this.sortDicesInArray();
    }
  }

  sortDicesInArray() {
    let diceValues = [];
    let evaluation = [0, 0, 0, 0, 0, 0];

    for (let diceObject of this.dice) {
      diceValues.push(diceObject.value);
    }

    for (let i of diceValues) {
      for (let j = 1; j <= 6; j++) {
        if (i === j) {
          evaluation[j - 1]++;
        }
      }
    }

    // Dreierpasch
    if (this.chosenValue === 8) {
      for (let i of evaluation) {
        if (i >= 3) {
          this.countAllValues();
          break;
        } else {
          this.text = 0;
        }
      }
    }

    //Viererpasch
    if (this.chosenValue === 9) {
      for (let i of evaluation) {
        if (i >= 4) {
          this.countAllValues();
          break;
        } else {
          this.text = 0;
        }
      }
    }

    // kleine Straße
    if (this.chosenValue === 10) {
      if (
        evaluation[2] >= 1 &&
        evaluation[3] >= 1 &&
        ((evaluation[0] >= 1 && evaluation[1] >= 1) ||
          (evaluation[1] >= 1 && evaluation[4] >= 1) ||
          (evaluation[5] >= 1 && evaluation[4] >= 1))
      ) {
        this.text = 30;
      } else {
        this.text = 0;
      }
    }

    // große Straße
    if (this.chosenValue === 11) {
      if (
        evaluation[1] === 1 &&
        evaluation[2] === 1 &&
        evaluation[3] === 1 &&
        evaluation[4] === 1 &&
        (evaluation[5] === 1 || evaluation[0] === 1)
      ) {
        this.text = 40;
      } else {
        this.text = 0;
      }
    }

    // Full House
    if (this.chosenValue === 12) {
      for (let e of evaluation) {
        if (e === 3) {
          for (let j of evaluation) {
            if (j === 2) {
              this.text = 25;
              break;
            } else {
              this.text = 0;
            }
          }
          break;
        } else {
          this.text = 0;
        }
      }
    }

    // Kniffel
    if (this.chosenValue === 13) {
      for (let i of evaluation) {
        if (i === 5) {
          this.text = 50;
          break;
        } else {
          this.text = 0;
        }
      }
    }

    // Chance
    if (this.chosenValue === 14) {
      this.countAllValues();
    }

    this.alreadyChosen = true;
  }

  countAllValues() {
    this.text = 0;
    for (let diceObject of this.dice) {
      this.text = int(this.text) + diceObject.value;
    }
  }
}
