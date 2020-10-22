//this file will activate anything that does not require user input

//runs the application and any of the functions inside it once
main();
function main(){
    
    
    findIsbnCorrelation()
    // tellIsbnKeys();
    // getBooksMovies();
}

//this function gets any bookDetail given for the ISBN numbers, then outputs to isbnResults
//dosn't like being in the same file as what it's calling since it's called first before activating the classes
async function findIsbnCorrelation(){
    var bookarr = [];
    if(isbnlist.length != 0){
        for(let i = 0; i < isbnlist.length; i++){
            let book = new bookDetail(isbnlist[i], "M");
            await book.getDetail();
            bookarr.push(book);
        }
        document.getElementById("isbnResults").innerHTML +="The Results for the ISBN List";
        for(x of bookarr){
            document.getElementById("isbnResults").innerHTML +=
            "<div class='bookDetails'>"+
            x.cover()+
            x.getAuthor()+
            "</div>";
        }
    } else{
        document.getElementById("isbnResults").innerHTML = "There are no elements in the isbnList try with a new file."
    }
}