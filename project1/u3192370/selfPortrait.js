//File: This is to create a self portrait
//Name: Aiden Down
//Student Number: u3192370

//fuctional

//Graphic Setup
function setup(){
    //Size of Canvas
    createCanvas(1700, 910)
}


//Global Changable Variables
let ellipFill = 0;//Controlls Ellipse fill colour
let beanieColour = 0;//Controlls Beanie colour


let offsetX = 0;//Moving square offsetX
let offsetY = 0;//Moving square offsetY

//orbitEllipse
let orbitX = 850;//orbit current postion
let orbitY = 300;//
let sOrbitX = true;//controlls Side to side movement
let uOrbitY = true;//controlls Up and Down movement


//Drawing Function
function draw(){
    //controlls colour of background
    red = random(255);
    green = random(255);
    blue = random(255);
    //controlls when background changes colour
    if( i = random(100) < 5){ background(red, green, blue);  }
    //moving box
    rect1();
    face();
    eyes();   
}

//handles drawing the face and anything attached to the head
function face(){
    //skin colour
    fill(255, 160,122);
    
    //ears
    ellipse(width/2-200,height/2-25, 200, 190);
    ellipse(width/2+200,height/2-25, 200, 190);
    //inner ear & inner ear skin colour
    fill(233,150,122);
    ellipse(width/2-225,height/2-25, 100, 95);
    ellipse(width/2+225,height/2-25, 100, 95);

    //face background and skin colour
    fill(255, 160,122);
    ellipse(width/2, height/2, 500, 700)

    //beanie
    if(beanieColour == 255){beanieColour = 0;}
    beanieColour += 1;
    fill(34,beanieColour,34);
    arc(width/2,height/2-130, 525, 450, 3, 6.4)

    //eyes and colour
    fill(255,255,255);
    ellipse(width/2-120,height/2-60, 100, 55);
    ellipse(width/2+120,height/2-60, 100, 55);

    //Mouth
    fill(240,128,128);
    ellipse(width/2,height/2+170, 200, 40);
    //line on mouth
    stroke(0);
    line(width/2-100,height/2+170, width/2+100,height/2+170)

    //nose
    line(width/2,height/2,width/2,height/2+80)
    line(width/2,height/2+80,width/2+20,height/2+60)
    line(width/2,height/2+80,width/2-20,height/2+60)
}

//controlls the eye postion
let LeyeX = 730;//Left eye starting postion
let leyeY = 395;
let ReyeX = 970;//Right eye starting postion
let ReyeY = 395;
function eyes(){
    fill(0);
    //changes eye postion
    if(LeyeX <= mouseX && LeyeX <=760 || LeyeX <=700){LeyeX +=2;}else{LeyeX -=2;}
    if(leyeY <= mouseY && leyeY <=415 || leyeY <=375){leyeY +=1;}else{leyeY -=1;}
    if(ReyeX <= mouseX && ReyeX <=1000 || ReyeX <=920){ReyeX +=1;}else{ReyeX -=1;}
    if(ReyeY <= mouseY && ReyeY <=415 || ReyeY <=380){ReyeY +=1;}else{ReyeY -=1;}
    ellipse(LeyeX,leyeY, 25, 25)
    ellipse(ReyeX,ReyeY, 25, 25);
    
}

function rect1(){
    //Rectangle
    //position of rect on page
    posY = height - offsetY;
    posX = width - offsetX;

    fill(200);//Controlls rect fill colour
    
    //assigns postion and value
    rect(posX, posY, 20, 20);
    
    //changes offset
    offsetX += 5;
    offsetY += 5;

    //resets rect postion
    if(offsetX >= width){offsetX = random(width);}
    if(offsetY >= height){offsetY = random(height);}
}