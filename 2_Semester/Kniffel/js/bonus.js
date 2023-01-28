import Score from "./score.js";

export default class Bonus extends Score {
  constructor(x, y, text, sizeText, textColor) {
    super(x, y, text, sizeText, textColor);
    this.x = x;
    this.y = y;
    this.text = 0;
    this.sizeText = sizeText;
    this.textColor = textColor;
    this.allFirstHalf = false;
    this.amountFirstHalf = 0;
    this.addAmount = true;
    this.value = 0;
  }

  calculateScore(selectButtonArray) {
    if (
      selectButtonArray[0].alreadyChosen === true &&
      selectButtonArray[1].alreadyChosen === true &&
      selectButtonArray[2].alreadyChosen === true &&
      selectButtonArray[3].alreadyChosen === true &&
      selectButtonArray[4].alreadyChosen === true &&
      selectButtonArray[5].alreadyChosen === true
    ) {
      this.allFirstHalf = true;
    } else {
      this.allFirstHalf = false;
    }

    if (this.allFirstHalf) {
      let sum = 0;
      for (let i = 0; i < 6; i++) {
        sum = sum + selectButtonArray[i].text;
      }
      this.amountFirstHalf = sum;
    }

    if (this.amountFirstHalf >= 63 && this.addAmount === true) {
      this.text = 35;
      this.value = 35;
      this.addAmount = false;
    } else {
      this.value = 0;
    }
  }
}
