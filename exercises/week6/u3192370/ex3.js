//print out array function

//create arrays
var number_array = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
var word_array = ["This", "is", "a", "word", "array", "filled", "with", "words"];

//write out the name 
document.write("Name of arrays: word_array, number_array");


arrayOut(word_array);
arrayOut(number_array);

//write out function
function arrayOut(arrayName){
    for(let i = 0; i < arrayName.length; i++){
        document.write(arrayName[i]);
    }
}