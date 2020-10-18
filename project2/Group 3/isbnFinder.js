//This will hold the functions that the main html file will activate



//This function finds the book the user inputs and puts all that it finds in the output Div
function findBooks(){
    console.log(document.getElementById("input").value)
    document.getElementById("output").innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)//gets the results for the book search
    .then(a => a.json())
    .then(Response =>{
        for(var i=0; i < Response.docs.length; i++){//this is the formating of the information gotten from openlibraries
            document.getElementById("output").innerHTML+="<h2>"+Response.docs[i].title+"</h2>"+
            Response.docs[i].author_name[0]+
            "<br><img src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg'><br>";
        }
    });
}

//This function shows that the isbn file is there to be accessed
function tellIsbnKeys(){
    let sentence = "ISBN Numbers Found: ";
    if(isbnlist){
        for(let i = 0; i < isbnlist.length; i++){
            sentence = sentence +"ISBN: "+isbnlist[i]+" ";
        }
    } else{
        sentence = "There is no isbn.js file";
    }
    document.getElementById("isbnListThere").innerHTML= sentence;
}


//gets the books and movies connected to the isbn numbers
function getBooksMovies(){
    for(var i=0; i < isbnlist.length; i++){
        document.getElementById("isbnResults").innerHTML="";
        fetch("http://openlibrary.org/search.json?isbn="+isbnlist[i])//gets the results for the isbn search
        .then(a => a.json())
        .then(Response =>{
        for(var x=0; x < Response.docs.length; x++){//this is the formating of the information gotten from openlibraries
            document.getElementById("isbnResults").innerHTML+="<h2>"+Response.docs[x].title+"</h2>"+
            Response.docs[x].author_name[0]+
            "<br><img src='http://covers.openlibrary.org/b/isbn/"+Response.docs[x].isbn[0]+"-M.jpg'><br>";
        }
    });
    }
}

tellIsbnKeys();
getBooksMovies();

