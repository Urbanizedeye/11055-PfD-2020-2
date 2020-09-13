//File of arrays with family member names
//Created: Aiden Down

//Create array
var family_names = ["Aiden", "Willem", "Nicholas", "Barry", "Geof", "Sarah", "Jenny", "Sam", "Harry"];

//Add a new name
document.writeln("Add a new Family Name:");
//Prompt function for new name
family_names.push(prompt("Enter a new name:"));

//write out using for
document.writeln("List of Family names: ");
for(let i = 0; i < family_names.length; i++){
    document.write(family_names[i]+" ");
}

//Write out using for.. ignore names starting with S
document.writeln("List of Family names not starting with S: ")
for(let i = 0; i < family_names.length; i++){
    if(family_names[i].charAt(0) != "S"){
        document.write(family_names[i]+" ");
    }
}