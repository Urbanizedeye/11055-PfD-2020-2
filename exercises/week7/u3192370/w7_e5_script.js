/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// functional

/* 

You may want to add some interaction to your self portrait?

https://p5js.org/examples/interaction-tickle.html 

what about making your eyes follow the mouse pointer around?

https://p5js.org/examples/interaction-reach-1.html


*/
let message = 'tickle',
    font,
    bounds, // holds x, y, w, h of the text's bounding box
    fontsize = 60,
    x,
    y; // x and y coordinates of the text

 function preload(){
     font = loadFont('assets/KumbhSans-Regular.ttf');
 }


function setup(){
    createCanvas(710, 400);

    //set up font
    textFont(font);
    textSize(fontsize);

    //get width & hieght of text to center
    bounds = font.textBounds(message, 0, 0, fontsize);
    x = width / 2 - bounds.w / 2;
    y = hieght / 2 - bounds.h / 2;
}

function draw(){
    background(204, 120);

    //write text in black and get bounding box
    fill(0);
    text(message, x, y);
    bounds = font.textBounds(message, x, y, fontsize);

    //check if the mouse is inside the bounding box and tickle if so
    if(
        mouseX >= bounds.x &&
        mouseX <= bounds.x + bounds.w &&
        mouseY >= bounds.y &&
        mouseY <= bounds.y + bounds.h
    ){
        x += random(-5, 5);
        y += random(-5, 5);
    }

}




