//This will hold the functions and classes that get the bookDetails and Movie info; also handles finding the book that the user inputs

//This function finds the book the user inputs and puts all that it finds in the output Div
function findBooks(){
    document.getElementById("output").innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("bookSearchInput").value)//gets the results for the book search
    .then(a => a.json())
    .then(Response =>{
        for(var i=0; i < Response.docs.length; i++){//this is the formating of the information gotten from openlibraries
            document.getElementById("output").innerHTML+=
            "<div class='bookSearchResults'>"+
            "<h2>"+Response.docs[i].title+"</h2>"+
            "<h2>"+Response.docs[i].author_name[0]+"</h2>"+
            "<h2>"+Response.docs[i].isbn[0]+"</h2>"+
            "<br><img id='searchBookCover' src='http://covers.openlibrary.org/b/isbn/"+Response.docs[i].isbn[0]+"-M.jpg' alt="+"'No image exists"+"'><br>"+
            "</div>";
        }
    });
}

//this handles getting the cover to the book
class getBookCover{
    //Returns the correct image Html for the given isbn number

    constructor(isbn, size="S", key="isbn"){
        this.isbn = isbn;
        this.size = "-"+size;
        this.key = key.toLowerCase()+"/";
        this.url_a = "<img src='http://covers.openlibrary.org/b/";
        this.url_b = ".jpg' />";
    }

    //sets the size if not given one
    size(val = "S"){
        this.size = "-"+val
    }

    display() {
        //returns the html directory in correct format
        return this.url_a + this.key + this.isbn + this.size + this.url_b;
    }
}

//This class gets the book details
class bookDetail {
    //Handles getting all the infomation on a book

    constructor(isbn, size = 'S', key='isbn'){
        this.isbn = isbn;
        this.key = key.toUpperCase()+ ":";
        this.bc = new getBookCover(isbn, size, key);
        this.url_a = "https://openlibrary.org/api/books?bibkeys=";
        this.url_b = "&format=json&jscmd=data";
        this.detail = "";
    }

    size(val = 'S'){
        this.bc.size(val);
    }

    cover(){
        return this.bc.display();
    }

    async getDetail(){

        let dets = await getBookDetails(this.url_a, this.key, this.isbn, this.url_b);
        this.detail = dets[this.key + this.isbn];
    }

    getAuthor(){
        //get author from the json object
        return this.detail['authors'][0]['name']
    }

    getTitle(){
        //get title from json object
        return this.detail['title']
    }

    getExerpt(){
        //get exerpt from json object
        return this.detail['exerpts'][0]['text']
    }

    getPageAmount(){
        //get amount of pages from json object
        return this.detail['number_of_pages']
    }
}

//get book details in the form of a json file
async function getBookDetails(url_a, key, isbn, url_b){
    //put the details in a this.details property
    let url = url_a + key + isbn + url_b;

    try {
        const resp = await fetch(url);
        const jres = await resp.json();
        console.log(jres);

        return jres
    } catch (err){
        throw err;
    }
}

//This function shows that there are items in the isbn file to be accessed
// function tellIsbnKeys(){
//     let sentence = "ISBN Numbers Found: ";
//     if(isbnlist){
//         for(let i = 0; i < isbnlist.length; i++){
//             sentence = sentence +"ISBN: "+isbnlist[i]+" ";
//         }
//     } else{
//         sentence = "There are no isbn numbers in isbn.list";
//     }
//     document.getElementById("isbnListThere").innerHTML= sentence;
// }


//gets the books and movies connected to the isbn numbers
// function getBooksMovies(){
//     if(isbnlist != 0){
//         for(var i=0; i < isbnlist.length; i++){
//             document.getElementById("isbnResults").innerHTML="";
//             fetch("http://openlibrary.org/search.json?isbn="+isbnlist[i])//gets the results for the isbn search
//             .then(a => a.json())
//             .then(Response =>{
//             for(var x=0; x < Response.docs.length; x++){//this is the formating of the information gotten from openlibraries
//                 document.getElementById("isbnResults").innerHTML+="<h2>"+Response.docs[x].title+"</h2>"+
//                 Response.docs[x].author_name[0]+
//                 "<br><img src='http://covers.openlibrary.org/b/isbn/"+Response.docs[x].isbn[0]+"-M.jpg'><br>";
//             }
//         });
//         }
//     } else{
//         document.getElementById("isbnResults").innerHTML = "There are no isbn numbers.";
//     }
// }