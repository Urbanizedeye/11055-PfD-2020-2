//File of Arrays
//Created by: Aiden Down

//create Array
var student_names = ["Simon", "Billybob"];

//write to html
document.write("Manually Writing the Student Names:")
document.write(student_names[0]);
document.write(student_names[1]);

//write the length of the array
document.write("The number of students that are in the array:");
document.write(student_names.length);

//Write out the names using for
document.write("The student names done automatically:")
for(let i = 0; i < student_names.length; i++){
    document.write(student_names[i]);
}

//Add a student
document.write("Add a student:");
//Prompt function for Student name to add to array
student_names.push(prompt("Enter a name:"));

//Write out using same for...
document.write("The student names done automatically:")
for(let i = 0; i < student_names.length; i++){
    document.write(student_names[i]);
}