
const TOTAL = 300;
let points = [];


// preload img:
let img;

// fonts:
let font
function preload() {
    img = loadImage("img/goodguygregory.png");
    newFont = loadFont('fonts/Oxygen-Bold.ttf')
}

function setup() {
    let canvas = createCanvas(windowWidth, 800);

    canvas.parent('sketch-holder');

    for (var i = 0; i < TOTAL; i++) {
        points.push({
            pos: createVector(700, 330),
            dir: random(TWO_PI),
            size: random(0, 30),
            color: color(random(20, 255), random(20, 255), random(20, 255))
        });
    }
    background(50);
}

function draw() {
    image(img, 470, 120, 450, 450);
    fill(255);
    stroke(0);
    textFont(newFont);
    textSize(68);
    text("Greg Witt", 40, 435);
    textSize(35)

    // add time to the equation:
    var time = millis() / 1000;
    let i = 0;
    while (i < TOTAL) {
        var point = points[i];

        //  trick 2:
        point.dir += noise(point.pos.x, point.pos.y, time) - 0.477;

        //trick 1
        point.pos.x += cos(point.dir);
        point.pos.y += sin(point.dir);

        //  Constrainted Values:

        //  TODO:
        //  random size and random color:
        noStroke();
        fill(point.color);
        ellipse(point.pos.x, point.pos.y, point.size);
        i++;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
