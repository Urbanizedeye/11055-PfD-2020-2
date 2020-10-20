
/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Object orientation

/* writing a class
*/

/* requires the p5 library */

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(1000, 600);
    background(100, 0, 150);
}

function draw() {
    

    // call your new class correctly
    
    var floor1 =  new aFloor(100, 400, 4, 125, 4, true)
    var floor2 =  new aFloor(100, 50, 4, 125, 4, false)
    floor2.drawFloor();
    floor1.drawFloor();
    noLoop();
}