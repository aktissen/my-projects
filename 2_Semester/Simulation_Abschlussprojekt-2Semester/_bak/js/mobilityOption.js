import BasicObjectText from "./basicObjectText.js";

export default class MobilityOption extends BasicObjectText {
  constructor(
    x,
    y,
    width,
    height,
    cost,
    velocity,
    environmentalInfluence,
    titlemobi,
    text,
    textSize
  ) {
    super(x, y, width, height);
    this.cost = cost;
    this.velocity = velocity;

    this.environmentalInfluence = environmentalInfluence;

    this.hidden = true;
    this.selected = false;
    this.duration = 0;
    this.titlemobi = titlemobi;
  }

  display() {
    if (!this.hidden) {
      push();

      noStroke();
      fill(222, 250, 251);

      rect(this.x, this.y, this.width, this.height, 10);

      pop();
      fill("grey");
      text(this.titlemobi, this.x + this.width / 2, this.y + this.height / 2);
      text(this.text, this.x + width / 2, this.y + this.height / 2 + 100);
    }
  }

  clicked() {
    this.selected = true;
  }
}
