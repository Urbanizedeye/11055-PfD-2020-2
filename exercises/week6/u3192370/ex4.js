//canvas sketch stuff

function setup(){
    //creatCanvas(400, 400);
    createCanvas(400, 400, WEBGL);
}

function draw(){
    //background(220);
    //ellipse(50, 50, 80,80);
    /*
    if(mouseIsPressed){
        fill(0);
    } else{
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
    */
   background(250);
   normalMaterial();
   push();
   rotateZ(frameCount * 0.01);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   box(70, 70, 70);
   pop();
}