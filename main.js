function preload() {

}
function setup() {
    canvas = createCanvas(750, 450);
    canvas.position(300, 120);
    webcam = createCapture(VIDEO);
    webcam.hide();
}
function draw() {
    image(webcam, 180, 100, 370, 250);
    fill(252, 232, 10);
    circle(40, 60, 50);
    rect(60, 100, 100, 100);
    circle(40, 250, 50);
    rect(60, 265, 100, 100, 20);

    fill(14, 225, 240);
    rect(200, 380, 330, 50);

    fill(64, 250, 7);
    circle(700, 60, 50);
    rect(600, 100, 100, 100);
    circle(700, 240, 50);
    rect(600, 270, 100, 100, 20);

fill(14, 225, 240)
    rect(200, 20, 330, 50);
}
function take_snapshot(){
    save("yo.png");
}