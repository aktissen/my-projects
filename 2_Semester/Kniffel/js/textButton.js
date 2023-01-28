import Button from "./button.js";

export default class TextButton extends Button {
  constructor(x, y, width, height, radius, color, text, colorText, sizeText) {
    super(x, y, width, height, radius);
    this.color = color;
    this.text = text;
    this.colorText = colorText;
    this.sizeText = sizeText;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.radius);
    fill(this.colorText);
    textAlign(CENTER, CENTER);
    textSize(this.sizeText);
    text(this.text, this.x + this.width / 2, this.y + this.height / 4 + 10);
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    }
    return false;
  }
}
