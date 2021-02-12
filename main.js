// line(x1, y1, x2, y2)
// RGB color
// aquamarine rgb(127, 255, 212)
// white rgb(255, 255, 255)
// tomaro rgb(255, 99, 71)
// dodgerblue rgb(30, 144, 255)

let aquamarine = {
    r: 127,
    g: 255,
    b: 212
}
let white = {
    r2: 30,
    g: 144,
    b: 255
}
let tomato = {
    r: 255,
    g: 99,
    b: 71
}
let dodgerblue = {
    r: 30,
    g: 144,
    b: 255
}

function setup() {
    createCanvas(400, 300)
    strokeWeight(2)
    strokeJoin(ROUND)
    textSize(16);
    textFont('"Press Start 2P"');
}

function draw() {
    white.r = map(mouseX, 0, 400, 255, aquamarine.r)
    white.g = map(mouseX, 0, 400, 255, aquamarine.g)
    white.b = map(mouseX, 0, 400, 255, aquamarine.b)

    tomato.r = map(mouseX, 0, 400, 255, aquamarine.r)
    tomato.g = map(mouseX, 0, 400, 99, aquamarine.g)
    tomato.b = map(mouseX, 0, 400, 71, aquamarine.b)

    dodgerblue.r = map(mouseX, 0, 400, 30, aquamarine.r)
    dodgerblue.g = map(mouseX, 0, 400, 144, aquamarine.g)
    dodgerblue.b = map(mouseX, 0, 400, 255, aquamarine.b)

    stroke(dodgerblue.r, dodgerblue.g, dodgerblue.b)
    fill(0)
    line(200, 289, 200, 160)
    // triangle back
    quad(200, 17, 268, 132, 200, 160, 132, 132)
    quad(200, 32, 264, 146, 200, 160, 136, 146)
    quad(172, 48, 88, 48, 30, 154, 110, 154)
    quad(228, 48, 312, 48, 370, 154, 290, 154)
    
    stroke(white.r, white.g, white.b)
    // white
    // left stroke
    line(181, 36, 200, 2)
    line(175, 28, 181, 36)
    line(166, 42, 175, 28)
    line(84, 42, 166, 42)
    line(18, 159, 84, 42.4)
    line(17, 160, 100, 160)
    line(20, 180, 100, 161)
    line(20, 180, 200, 299)
    // right stroke
    line(219, 36, 200, 2)
    line(225, 28, 219, 36)
    line(234, 42, 225, 28)
    line(316, 42, 234, 42)
    line(382, 159, 316, 42.4)
    line(383, 160, 300, 160)
    line(380, 180, 300, 161)
    line(380, 180, 200, 299)
    // pyramid
    quad(200, 68, 217, 96, 200, 100, 183, 96)
    quad(200, 102, 222, 110, 200, 118, 178, 110)
    quad(160, 138, 178, 110, 200, 118, 200, 146)
    quad(240, 138, 222, 110, 200, 118, 200, 146)
    stroke(tomato.r, tomato.g, tomato.b)
    // right
    quad(92, 54, 160, 54, 106, 148, 40, 148)
    line(60, 114, 74, 148)
    line(76, 84, 106, 148)
    line(92, 54, 122, 118)
    line(122, 54, 139, 90)
    line(122, 54, 74, 148)
    // //left
    quad(308, 54, 240, 54, 294, 148, 360, 148)
    line(340, 114, 326, 148)
    line(324, 84, 294, 148)
    line(308, 54, 278, 118)
    line(278, 54, 261, 90)
    line(278, 54, 326, 148)
    stroke(dodgerblue.r, dodgerblue.g, dodgerblue.b)
    line(172, 48, 176, 42)
    line(176, 42, 181, 49)
    line(228, 48, 224, 42)
    line(224, 42, 219, 49)
    // left
    line(144, 160, 150, 150)
    line(42, 184, 144, 160)
    line(42, 184, 200, 289)
    line(128, 241, 190, 159)
    line(88, 214, 182, 157)
    line(130, 164, 200, 180)
    line(104, 170, 200, 200)
    line(74, 177, 200, 235)
    // right
    line(256, 160, 250, 150)
    line(358, 184, 256, 160)
    line(358, 184, 200, 289)
    line(272, 241, 210, 159)
    line(312, 214, 218, 157)
    line(270, 164, 200, 180)
    line(296, 170, 200, 200)
    line(326, 177, 200, 235)
    noStroke()
    fill(white.r, white.g, white.b) 
    text('DP ALIVE', 240, 30);
}
