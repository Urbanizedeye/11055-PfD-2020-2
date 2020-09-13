/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// functional

/* write the following in a functional way

ask the user of the program for a number, store it
ask the user of the program for a number, store it
check that if the sum of both numbers is under 10, tell the user 'too small'
check that if the sum of both numbers is over 10, tell the user 'too big'
check that if the sum of both numbers is 10, tell the user 'perfect'

*/

guessing10();

function guessing10(){
    var user_input1 = parseInt(prompt("Input a Number", "Number Here"));
    var user_input2 = parseInt(prompt("Input a Number", "Number Here"));

    var adding = user_input1 + user_input2;

    if(adding == 10){
        document.write(adding+" Perfect");
        alert(adding+" Perfect");
    }
    if(adding > 10){
        document.write(adding+" Too Big");
        alert(adding+" Too Big")
    }
    if(adding < 10){
        document.write(adding+" Too Small");
        alert(adding+" Too Small");
    }
}


