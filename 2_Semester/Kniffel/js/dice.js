import Button from "./button.js";

export default class Dice extends Button {
  constructor(x, y, diceSize) {
    super(x, y, diceSize, diceSize);
    this.value = this.getRandomValue();
    this.active = true;
  }

  getRandomValue() {
    return Math.floor(random(1, 7));
  }

  roll() {
    this.value = this.getRandomValue();
    return this.value;
  }

  display() {
    if (this.active) {
      fill("rgba(255,111,97, 1)");
    } else {
      fill("rgba(255,111,97, 0.5)");
    }
    rect(this.x, this.y, this.width, this.height, this.height / 10);
    if (this.active) {
      fill("rgba(255,255,255, 1)");
    } else {
      fill("rgba(255,255,255, 0.5)");
    }
    if (this.value === 1) {
      ellipse(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width / 5
      );
    }
    if (this.value === 2) {
      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
    }
    if (this.value === 3) {
      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
    }
    if (this.value === 4) {
      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
    }
    if (this.value === 5) {
      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width / 5
      );
      ellipse(
        this.x + this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
    }
    if (this.value === 6) {
      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );

      ellipse(
        this.x + this.width / 4,
        this.y + this.height / 2,
        this.width / 5
      );

      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height / 4,
        this.width / 5
      );

      ellipse(
        this.x + this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );

      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height / 2,
        this.width / 5
      );

      ellipse(
        this.x + this.width - this.width / 4,
        this.y + this.height - this.height / 4,
        this.width / 5
      );
    }
  }

  clicked() {
    if (!this.active) {
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
