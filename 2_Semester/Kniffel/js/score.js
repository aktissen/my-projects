export default class Score {
  constructor(x, y, text, sizeText, textColor) {
    this.x = x;
    this.y = y;
    this.text = 0;
    this.sizeText = sizeText;
    this.textColor = textColor;
  }

  display() {
    textSize(this.sizeText);
    fill(this.textColor);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
  }

  calculateScore(ValueSelectButtons, bonusButton) {
    this.text = int(this.text) + ValueSelectButtons;
    this.text = int(this.text) + bonusButton.value;
  }
}
