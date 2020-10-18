//This will hold the functions that the main html file will activate



//This function finds the book the user inputs and puts all that it finds in the output Div
function findBooks(){
    console.log(document.getElementById("input").value)
    document.getElementById("output").innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)//gets the results for the book search
    .then(a => a.json())
    .then(Response =>{
        for(var i=0; i < Response.docs.length; i++){//this is the formating of the information gotten from openlibraries
            document.getElementById("output").innerHTML+="<a href='"+Response.docs[i].url[0]+"'>"+"<h2>"+Response.docs[i].title+"</h2>"+"</a>"+
            Response.docs[i].author_name[0]+
            "<br><img src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg'><br>";
        }
    });
}

//This function shows that the isbn file is there to be accessed
function tellIsbnKeys(){
    let sentence = "ISBN Numbers Found: ";
    var newPara = document.createElement("P");//creates new html element
    if(isbnlist){
        for(let i = 0; i < isbnlist.length; i++){
            sentence = sentence +"ISBN: "+isbnlist[i]+" ";
        }
    } else{
        sentence = "There is no isbn.js file";
    }
    
    newPara.innerText = sentence;//makes the sentence string the inside text to the new element
    document.body.appendChild(newPara);//appends the new html element to the body
}


//gets the books and movies connected to the isbn numbers
function getBooksMovies(){
    for(var i=0; i < isbnlist.length; i++){
        document.getElementById("isbnResults").innerHTML="";
        fetch("http://openlibrary.org/search.json?isbn="+isbnlist[i])//gets the results for the isbn search
        .then(a => a.json())
        .then(Response =>{
        for(var x=0; x < Response.docs.length; x++){//this is the formating of the information gotten from openlibraries
            document.getElementById("output").innerHTML+="<a href='"+Response.docs[x].url[0]+"'>"+"<h2>"+Response.docs[x].title+"</h2>"+"</a>"+
            Response.docs[x].author_name[0]+
            "<br><img src='http://covers.openlibrary.org/b/isbn/"+Response.docs[x].isbn[0]+"-M.jpg'><br>";
        }
    });
    }
}

tellIsbnKeys();

