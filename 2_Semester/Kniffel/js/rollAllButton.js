import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice, rollingCounter) {
    super(x, y, width, height);
    this.title = title;
    this.dice = dice;
    this.rollingCounter = rollingCounter;
  }

  display() {
    fill("#ffa9a1");
    rect(this.x, this.y, this.width, this.height, 10);
    fill("white");
    textSize(27);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.width / 2, this.y + this.height / 2 - 3);
  }

  clicked() {
    this.rollingCounter = this.rollingCounter + 1;
    for (let diceObject of this.dice) {
      if (diceObject.active) {
        diceObject.roll();
      }
    }
  }
}
