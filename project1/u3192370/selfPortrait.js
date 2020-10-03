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
let bkColour = 0;//controlls background colour
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
    
    background(bkColour);   

    face();
    
}

function ellipse1(){
    //Ellipse
    fill(ellipFill, 50, 0);//Controlls Ellipse fill colour
    ellipFill += 1;
    mx = mouseX;
    my = mouseY;
    if(mx > 1500){mx = 1500;}
    if(mx < 250){mx = 250;}
    if(my > 700){my = 700}
    if(my < 150){my = 150;}
    ellipse(mx, my, 25, 25);
    if(ellipFill > 255){ellipFill = 5;}
}

function ellipse2(){
    //Ellipse
    fill(0, 255, 0);//Controlls Ellipse fill colour
    ellipse(width/2, height/2, 150, 150);
    if(ellipFill > 255){ellipFill = 5;}
}

function ellipse3Orbit(){
    //Ellipse
    fill(153, 76, 0);//Controlls Ellipse fill colour
    
    //orbit position
    if(orbitX >= 450){sOrbitX = false;}
    if(orbitY <= 300){sOrbitX = true;}
    if(orbitX <= 800){sOrbitX = true;}
    if(orbitY >= 600){sOrbitX = false;}
    if(sOrbitX){orbitX += 1;}else{orbitX -=1;}
    if(uOrbitY){orbitY += 1;}else{orbitY -=1;}

    ellipse(orbitX, orbitY, 50, 50)

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
    if(offsetX >= width){offsetX = 0;}
    if(offsetY >= height){offsetY = 0;}
}