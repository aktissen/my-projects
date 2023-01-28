function preload() {
  // images
  // Vorlage hamster: https://de.freepik.com/vektoren-kostenlos/set-von-karten-mit-nachrichten-und-hand-gezeichneten-hamster_1252054.htm#page=1&query=hamster&position=0
  hamster_up = loadImage("../img/hamster-up.png");
  hamster_down = loadImage("../img/hamster-down.png");
  wheel = loadImage("../img/wheel.png");
  // Vorlage cat: https://de.freepik.com/vektoren-kostenlos/handgezeichnete-entzueckende-tiere-sammlung_4176026.htm#page=2&query=cat&position=1
  cat = loadImage("../img/cat.png");
  // Vorlage hands: https://de.freepik.com/vektoren-kostenlos/freedom-hintergrund_780956.htm#page=6&query=hands&position=7
  hand = loadImage("../img/hand.png");
  hand_mirrored = loadImage("../img/hand_mirrored.png");
  plattformWood = loadImage("../img/plattform_wood.png");
  plattformGrass = loadImage("../img/plattform_grass.png");
  plattformSand = loadImage("../img/plattform_sand.png");
  startImage = loadImage("../img/start.png");
  resetImage = loadImage("../img/reset.png");
  title = loadImage("../img/title.png");
  hamsterWave = loadImage("../img/hamster_wave.png");
  endTitle = loadImage("../img/end.png");
  howTo = loadImage("../img/how_to.png");
  closeButton = loadImage("../img/x.png");
  imgWheat = loadImage("../img/wheat.png");
  imgSeed = loadImage("../img/seed.png");

  // font
  myFont = loadFont("../img/GROBOLD.ttf");

  // sounds
  soundFormats("mp3", "ogg");
  // Quelle: https://freesound.org/people/yummie/sounds/410574/ made by yummie and Manuel Graf, copyright to yummie and Manuel Graf, licensed under Attribution license, no changes
  gameSound = loadSound(
    "../sounds/410574__yummie__game-background-music-loop-short.mp3"
  );
  // Quelle: http://soundbible.com/1949-Pew-Pew.html
  pewSound = loadSound("../sounds/Pew_Pew.mp3");
  // Quelle: https://freesound.org/people/Leszek_Szary/sounds/172205/
  jumpSound = loadSound("../sounds/172205__leszek-szary__jumping.mp3");
  // Quelle: https://freesound.org/people/Soundholder/sounds/425347/ made by soundholder and Dawid Moroz, copyright to soundholder an Dawid Moroz, licensed under Attribution license, no changes
  hitSound = loadSound("../sounds/425347_soundholder_8bit-hit-14.mp3");
  // Quelle: https://freesound.org/people/cabled_mess/sounds/371451/
  looseSound = loadSound(
    "../sounds/371451_cabled-mess_lose-funny-retro-video-game.mp3"
  );
  highscoresString = localStorage.getItem("highscores");
}

function setup() {
  //debug
  var clearStorage = false;
  if (clearStorage) {
    localStorage.clear();
  }

  createCanvas(400, 600);
  frameRate(30);
  gameEnd();
  reset();
  //sounds
  pewSound.setVolume(0.2);
  jumpSound.setVolume(0.2);
  gameSound.setVolume(0.05);
  hitSound.setVolume(0.2);
  looseSound.setVolume(0.2);
}

// window.addEventListener("resize", function() {
//   resizeCanvas(windowWidth, windowHeight);
//   clear();
// });

new p5();
var width = windowWidth;
var height = windowHeight;
