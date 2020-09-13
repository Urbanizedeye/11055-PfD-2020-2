/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// procedural

/* write the following in a procedural way

ask the user of the program for a their full name (first [middle] last), store it
read through the string variable that holds their full name, and work out which is their last name 
print the last name only onto the webpage

javascript strings are just arrays you can access each part of the string using []

e.g.

*/

var user_full_name = prompt("Input your full name", "Your name here.");

var name_split = user_full_name.split(" ");

document.write("Your last name is: "+ name_split[name_split.length -1]);
alert("Your last name is: "+ name_split[name_split.length -1]);




